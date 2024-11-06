import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  imports : [
    NestjsFormDataModule,
  ],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
