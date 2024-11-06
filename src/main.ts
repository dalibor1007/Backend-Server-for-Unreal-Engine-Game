import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ErrorExceptionFilter } from './exceptions-filters/error-exception-filter';
import { CatchAllErrorsExceptionFilter } from './exceptions-filters/catch-all-errors-exception.filter';
import * as fs from 'fs';
import { AccountsModule } from './accounts/accounts.module';
import { AchievementsModule } from './achievements/achievements.module';
import { AsteroidsModule } from './asteroids/asteroids.module';
import { CockpitsModule } from './cockpits/cockpits.module';
import { HangarsModule } from './hangars/hangars.module';
import { LeaderboardsModule } from './leaderboards/leaderboards.module';
import { MarketsModule } from './markets/markets.module';
import { NoticesModule } from './notices/notices.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PlayersModule } from './players/players.module';
import { PlanetsModule } from './planets/planets.module';


async function bootstrap() {
  let app;
  const port = process.env.PORT;
  app = await NestFactory.create(AppModule, {
    bodyParser: true,
  });

  
  const configsSwagger = {
    logo: `${process.env.SWAGGER_LOGO}`,
    title: `${process.env.SWAGGER_TITLE}`,
    description: `${process.env.SWAGGER_DESCRIPTON}`,
    version: `${process.env.SWAGGER_VERSION}`,
    contact: {name: `${process.env.SWAGGER_CONTACT_NAME}`, url: `${process.env.SWAGGER_CONTACT_URL}`, email: `${process.env.SWAGGER_CONTACT_EMAIL}`},
    server: {name: `${process.env.SWAGGER_SERVER_NAME}`, url: `${process.env.SWAGGER_SERVER_URL}`}

  }
  
  const config = new DocumentBuilder()
    .setTitle(configsSwagger.title)
    .setVersion(configsSwagger.version)
    .setContact(configsSwagger.contact.name, configsSwagger.contact.url, configsSwagger.contact.email)
    .setDescription(configsSwagger.description)
    .addServer(configsSwagger.server.url, configsSwagger.server.name)
    .addTag('Authentications', "User authentication")
    .addTag('Users', "Endpoints Users", { description: "Main endpoints in the context of users.", url: "" })
    .addTag('Accounts', "Endpoints Accounts", { description: "Main endpoints in the context of accounts.", url: "" })
    .addTag('Achievements', "Endpoints Achievements", { description: "Main endpoints in the context of Achievements.", url: "" })
    .addTag('Asteroids', "Endpoints Asteroids", { description: "Main endpoints in the context of Asteroids.", url: "" })
    .addTag('Cockpits', "Endpoints Cockpits", { description: "Main endpoints in the context of Cockpits.", url: "" })
    .addTag('Hangars', "Endpoints Hangars", { description: "Main endpoints in the context of Hangars.", url: "" })
    .addTag('Leaderboards', "Endpoints Leaderboards", { description: "Main endpoints in the context of Leaderboards.", url: "" })
    .addTag('Markets', "Endpoints Markets", { description: "Main endpoints in the context of Markets.", url: "" })
    .addTag('Notices', "Endpoints Notices", { description: "Main endpoints in the context of Notices.", url: "" })
    .addTag('Notifications', "Endpoints Notifications", { description: "Main endpoints in the context of Notifications.", url: "" })
    .addTag('Players', "Endpoints Players", { description: "Main endpoints in the context of Players.", url: "" })
    // .addTag('MapPoints', "Endpoints Map Points (MapPoints/get-map)", { description: "Main endpoints in the context of MapPoints.", url: "" })
    .addTag('Planets', "Endpoints Planets", { description: "Main endpoints in the context of Planets.", url: "" })
    
    .addBearerAuth({ type: "http", scheme: "bearer", bearerFormat: "Token", description: "Valid JWT token." }, "JWT")
    .build();

  const bgColorTopbar = process.env.ENVIRONMENT == "production" ? '#1b1b1b' : '#00C6CC';
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: process.env.TITLE,
    swaggerOptions: {
      docExpansion: 'none',
      operationsSorter: function (methodA: any, methodB: any) {
        const order = { post: '1', get: '0', patch: '2', put: '3', delete: '4' };
        return order[methodA._root.entries[1][1]].localeCompare(order[methodB._root.entries[1][1]]);
      },
      displayRequestDuration: true,
      filter: false,
      syntaxHighlight: { theme: 'monokai' },
      tryItOutEnabled: true,
      requestSnippetsEnabled: true,
      persistAuthorization: true
    },
    customfavIcon: `${process.env.FAVICON}`,
    customCss: `
      .topbar-wrapper img {content:url(\'${configsSwagger.logo}'); width:auto; height:4-px;}
      .topbar {background-color: ${bgColorTopbar} !important;}
      `,
    swaggerUrl: configsSwagger.server.url,
    validatorUrl: 'suprem-ms',
    url: configsSwagger.server.url,
  }

  const document = SwaggerModule.createDocument(app, config, {
    include: [AuthModule, UsersModule, AccountsModule, AchievementsModule, AsteroidsModule, CockpitsModule, HangarsModule, LeaderboardsModule, MarketsModule, NoticesModule, NotificationsModule, PlayersModule, PlanetsModule],
  });
  SwaggerModule.setup('doc', app, document, customOptions);
  
  const { httpAdapter } = app.get(HttpAdapterHost);
  
  app.useGlobalFilters( 
    new ErrorExceptionFilter(),
    new CatchAllErrorsExceptionFilter(httpAdapter)
  );

  fs.writeFileSync("./swagger-spec.json", JSON.stringify(document));

  // app.useGlobalGuards()

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    errorHttpStatusCode: 422
  }),
  );
  app.enableCors();
  await app.listen(port);
  Logger.debug(`ENVIRONMENT on: ${process.env.ENVIRONMENT} | PORT: ${port}`);
}
bootstrap();
