import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { loggerConfig } from './common/configs/logger.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    LoggerModule.forRoot(loggerConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
