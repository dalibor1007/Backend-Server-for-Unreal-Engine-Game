import { Module } from '@nestjs/common';
import { AsteroidsService } from './asteroids.service';
import { AsteroidsController } from './asteroids.controller';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports : [
    NestjsFormDataModule,
  ],
  controllers: [AsteroidsController],
  providers: [AsteroidsService],
})
export class AsteroidsModule {}
