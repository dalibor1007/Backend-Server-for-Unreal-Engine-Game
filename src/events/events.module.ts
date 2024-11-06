import { Module } from '@nestjs/common';
import { FiringGateway } from './firing.gateway';
import { NotificationsGateway } from './notifications.gateway';
import { SocketAuthMiddleware } from 'src/middleware/ws-middleware';
import { JwtService } from '@nestjs/jwt';
import { NoticesService } from 'src/notices/notices.service';
import { NotificationsService } from 'src/notifications/notifications.service';

@Module({
  providers:[
    FiringGateway,
    NotificationsGateway,
    SocketAuthMiddleware,
    JwtService,
    NoticesService,
    NotificationsService
  ]
})
export class EventsModule {}
