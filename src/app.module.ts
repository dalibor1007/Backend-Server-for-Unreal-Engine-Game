import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import securityConfig from './_configs/security.config';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CheckTokenMiddleware } from './middleware/check-token.middleware';
import { AppSecretMiddleware } from './middleware/app-secret.middleware';
import { raw } from 'express';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { HttpModule } from '@nestjs/axios';
import { APP_FILTER } from '@nestjs/core';
import { CatchAllErrorsExceptionFilter } from './exceptions-filters/catch-all-errors-exception.filter';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoggersService } from './loggers/loggers.service';
import { LoggersModule } from './loggers/loggers.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { NoticesModule } from './notices/notices.module';
import { CockpitsModule } from './cockpits/cockpits.module';
import { AsteroidsModule } from './asteroids/asteroids.module';
import { MarketsModule } from './markets/markets.module';
import { NotificationsModule } from './notifications/notifications.module';
import { HangarsModule } from './hangars/hangars.module';
import { AchievementsModule } from './achievements/achievements.module';
import { LeaderboardsModule } from './leaderboards/leaderboards.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EventsModule } from './events/events.module';
import { PlayersModule } from './players/players.module';
import { PlayersService } from './players/players.service';
import { PlanetsModule } from './planets/planets.module';
import { PlanetsService } from './planets/planets.service';


@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [securityConfig],

    }),
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
    MailerModule.forRootAsync({
      useFactory: () => ({
        // transport: `smtps://${process.env.SMTP_USERNAME}:${process.env.SMTP_PASSWORD}@${process.env.SMTP_URL}`,
        transport: {
          host: process.env.SMTP_URL,
          port: Number(process.env.SMTP_PORT),
          secure: true,
          auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
          },
        },
        defaults: {
          from: process.env.NOREPLY,
        },
        template: {
          dir: __dirname + '../../_sendmail/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
    AuthModule,
    UsersModule,
    PrismaModule,
    LoggersModule,
    AccountsModule,
    NoticesModule,
    CockpitsModule,
    AsteroidsModule,
    MarketsModule,
    NotificationsModule,
    HangarsModule,
    AchievementsModule,
    LeaderboardsModule,
    EventsModule,
    // MapPointsModule,
    PlayersModule,
    PlanetsModule, 
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: CatchAllErrorsExceptionFilter,
    }, AppService, LoggersService, UsersService, JwtService, PlayersService, PlanetsService
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, raw({ type: 'application/json' }))
      .forRoutes('*');
    consumer
      .apply(CheckTokenMiddleware, raw({ type: 'application/json' }))
      .exclude('/systems','/auth')
      .forRoutes('*');
    consumer
      .apply(AppSecretMiddleware, raw({ type: 'application/json' }))
      .exclude('/systems','/auth')
      .forRoutes('*');
  }
}
