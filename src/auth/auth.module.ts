import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { UsersModule } from 'src/users/users.module';
import { HttpModule } from '@nestjs/axios';


@Module({
    imports : [
      UsersModule,
      PassportModule,
      NestjsFormDataModule,
      HttpModule,
      JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          secret: configService.get('JWT_SECRET_KEY'),
          signOptions: {
              expiresIn: '1d',
          },
        }),
        inject: [ConfigService],
      }),
    ],
  providers: [AuthService,LocalStrategy,JwtStrategy, UsersService],
  controllers: [AuthController]
})
export class AuthModule {}
