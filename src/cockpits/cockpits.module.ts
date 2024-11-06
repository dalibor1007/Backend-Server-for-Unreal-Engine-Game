import { Module } from '@nestjs/common';
import { CockpitsService } from './cockpits.service';
import { CockpitsController } from './cockpits.controller';

@Module({
  controllers: [CockpitsController],
  providers: [CockpitsService],
})
export class CockpitsModule {}
