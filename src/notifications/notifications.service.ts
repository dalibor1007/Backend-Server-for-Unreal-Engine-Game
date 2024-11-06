import { Injectable } from '@nestjs/common';
import { IOutput } from 'src/_configs/types.config';
import { PrismaService } from 'src/prisma/prisma.service';
import { TUserId } from 'src/users/Users';


@Injectable()
export class NotificationsService {
  constructor(
    private readonly prisma: PrismaService,
  ){}
  
  // async findAll(_user: TUserId): Promise<IOutput> {
  //   let output: IOutput;
  //   try{
  //     output = {
  //       success: true,
  //       message: '',
  //       data: {}
  //     }
  //   }catch(error){
  //     output = {
  //       success: false,
  //       message: error.message
  //     }
  //   }
  //   return output;
  // }
  async findAll(userId: number): Promise<IOutput> {  
    let output: IOutput;  
    try {  
      const notifications = await this.prisma.notification.findMany({  
        where: {  
          userId: userId,  
          isRead: false, // Only fetch unread notifications  
        },  
      });  

      output = {  
        success: true,  
        message: 'Fetched unread notifications successfully.',  
        data: notifications, // Return the notifications  
      };  
    } catch (error) {  
      output = {  
        success: false,  
        message: error.message,  
      };  
    }  
    return output;  
  }
}
