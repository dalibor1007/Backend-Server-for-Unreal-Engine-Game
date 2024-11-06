import { Module } from '@nestjs/common';
import { HangarsService } from './hangars.service';
import { HangarsController } from './hangars.controller';

@Module({
  controllers: [HangarsController],
  providers: [HangarsService],
})
export class HangarsModule {}
