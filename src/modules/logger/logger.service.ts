import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Sentry from '@sentry/nestjs';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

import { Config, SentryConfig } from '../../configs/config.type';

@Injectable()
export class LoggerService implements OnModuleInit {
  private readonly isLocal: boolean;
  private readonly logger = new Logger();

  constructor(private readonly configService: ConfigService<Config>) {
    const sentryConfig = this.configService.get<SentryConfig>('sentry');
    this.isLocal = sentryConfig?.env === 'local';
  }

  onModuleInit() {
    const sentryConfig = this.configService.get<SentryConfig>('sentry');

    Sentry.init({
      dsn: sentryConfig?.dsn,
      integrations: [nodeProfilingIntegration()],
      tracesSampleRate: 1.0,
      debug: sentryConfig?.debug,
      sendDefaultPii: true,
      release: `${process.env.npm_package_name}@${process.env.npm_package_version}`, // ✅
      environment: sentryConfig?.env, // ✅ (корисно для prod/dev/local)
    });
  }
  public info(message: string): void {
    if (this.isLocal) {
      this.logger.log(message);
    } else {
      Sentry.captureMessage(message, 'info');
    }
  }
  public warn(message: string): void {
    if (this.isLocal) {
      this.logger.log(message);
    } else {
      Sentry.captureMessage(message, 'warning');
    }
  }
  public error(error: any): void {
    if (this.isLocal) {
      this.logger.error(error, error.stack);
    } else {
      Sentry.captureException(error, { level: 'error' });
    }
  }
}
