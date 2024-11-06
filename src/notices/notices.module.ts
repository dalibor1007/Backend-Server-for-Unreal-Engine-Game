import { Module } from '@nestjs/common';
import { NoticesService } from './notices.service';
import { NoticesController } from './notices.controller';
import { NotificationsScheduler } from './notices.scheduler';

@Module({
  controllers: [NoticesController],
  providers: [NoticesService, NotificationsScheduler],
})
export class NoticesModule {}
