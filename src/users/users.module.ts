import { Global, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Global()
@Module({
  imports : [
    NestjsFormDataModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
