
import { Injectable } from '@nestjs/common';  
import { Cron } from '@nestjs/schedule';  
import { NoticesService } from './notices.service';  

@Injectable()  
export class NotificationsScheduler {  
  constructor(private readonly notificationsService: NoticesService) {}  

  @Cron('0 0 * * *') // This runs daily at midnight  
  handleCron() {  
    this.notificationsService.deleteOldNotifications();  
  }  
}