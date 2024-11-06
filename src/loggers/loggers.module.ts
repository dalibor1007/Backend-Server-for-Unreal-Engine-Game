import { Global, Module } from '@nestjs/common';
import { LoggersService } from './loggers.service';

@Global()
@Module({
  providers: [LoggersService],
  exports: [LoggersService],
})
export class LoggersModule {}