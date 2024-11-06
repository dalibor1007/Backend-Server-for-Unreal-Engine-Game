import { Injectable } from '@nestjs/common';
import { Notification } from '@prisma/client';
import { IOutput } from 'src/_configs/types.config';
import { PrismaService } from 'src/prisma/prisma.service';
import { TUserId } from 'src/users/Users';

@Injectable()
export class NoticesService {
  
  constructor(
    private readonly prisma: PrismaService,
  ){}
  async createNotification(userId: number, type: string, content: string): Promise<Notification> {  
    return this.prisma.notification.create({  
      data: {  
        userId,  
        type,  
        content,  
        isRead: false,
      },  
    });  
  }  

  async getUserNotifications(userId: number): Promise<Notification[]> {  
    return this.prisma.notification.findMany({  
      where: { userId },  
      orderBy: { createdAt: 'desc' },  
    });  
  }  

  async markAsRead(notificationId: number): Promise<Notification> {  
    return this.prisma.notification.update({  
      where: { id: notificationId },
      data: { isRead: true },  
    });   
  }
  async delete(notificationId: number): Promise<void> {  
    
  }  

  // Method to clean up notifications older than 3 days  
  async deleteOldNotifications(): Promise<void> {  
    const dateThreshold = new Date();  
    dateThreshold.setDate(dateThreshold.getDate() - 3);  
    // await this.notificationy.delete({ isRead: true, createdAt: LessThan(dateThreshold) });  
  } 
  async findAll(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try{
      output = {
        success: true,
        message: '',
        data: {}
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  
}
