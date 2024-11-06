import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports : [
    NestjsFormDataModule,
  ],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
