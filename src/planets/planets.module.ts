import { Module } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { PlanetsController } from './planets.controller';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports : [
    NestjsFormDataModule,
  ],
  controllers: [PlanetsController],
  providers: [PlanetsService],
})
export class PlanetsModule {}
