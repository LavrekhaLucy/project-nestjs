import * as process from 'node:process';

import { Config } from './config.type';

export default (): Config => ({
  app: {
    // port: parseInt(process.env.APP_PORT, 10) || 3000,
    // host: process.env.APP_HOST || 'localhost',
    port: parseInt(process.env.APP_PORT ?? '3000', 10),
    host: process.env.APP_HOST ?? 'localhost',
  },

  database: {
    // host: process.env.DATABASE_HOST,
    // port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    host: process.env.POSTGRES_HOST ?? 'localhost',
    port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10),
    user: process.env.POSTGRES_USER ?? 'postgres',
    password: process.env.POSTGRES_PASSWORD ?? 'postgres',
    name: process.env.POSTGRES_DB ?? 'postgres',
  },
  redis: {
    host: process.env.REDIS_HOST ?? 'localhost',
    port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
    password: process.env.REDIS_PASSWORD ?? 'password',
  },
  aws: {
    accessKey: process.env.AWS_ACCESS_KEY ?? 'aws.accessKey',
    secretKey: process.env.AWS_SECRET_KEY ?? 'aws.secretKey',
  },
  sentry: {
    dsn: process.env.SENTRY_DSN ?? 'sentry.dsn',
    env: process.env.SENTRY_ENV ?? 'local',
    debug: process.env.SENTRY_DEBUG === 'true',
  },
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET ?? 'jwt.accessSecret',
    accessExpiresIn: parseInt(process.env.JWT_ACCESS_EXPIRES_IN ?? '3600', 10),
    refreshSecret: process.env.JWT_REFRESH_SECRET ?? 'jwt.refreshSecret',
    refreshExpiresIn: parseInt(
      process.env.JWT_REFRESH_EXPIRES_IN ?? '800000',
      10,
    ),
  },
});
