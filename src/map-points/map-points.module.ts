import { Module } from '@nestjs/common';
import { MapPointsService } from './map-points.service';
import { MapPointsController } from './map-points.controller';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports:[
    NestjsFormDataModule
  ],
  controllers: [MapPointsController],
  providers: [MapPointsService],
})
export class MapPointsModule {}
