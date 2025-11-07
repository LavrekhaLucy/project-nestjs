import * as path from 'node:path';

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SourceCode } from 'eslint';

import { DatabaseConfig } from './configs/config.type';
import configuration from './configs/configuration';
import { ArticlesModule } from './modules/articles/articles.module';
import { CommentsModule } from './modules/comments/comments.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const config = configService.get<DatabaseConfig>('database');
        return {
          type: 'postgres',
          host: config?.host,
          port: config?.port,
          username: config?.user,
          password: config?.password,
          database: config?.name,
          entities: [
            path.join(
              process.cwd(),
              'dist',
              'database',
              'entities',
              '*.entity.js',
            ),
          ],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
    ArticlesModule,
    UsersModule,
    CommentsModule,
  ],
})
export class AppModule {}
