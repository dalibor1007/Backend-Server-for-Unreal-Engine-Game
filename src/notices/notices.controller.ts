import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, Res, HttpStatus } from '@nestjs/common';
import { NoticesService } from './notices.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Notification } from '@prisma/client';

@ApiTags('Notices')
@Controller('notices')
export class NoticesController {
  constructor(private readonly noticesService: NoticesService) {}

  @Get()
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  findAll(@Res() user) {
    return this.noticesService.findAll(user.id);
  }


  @Post()  
  async create(@Body() body: { userId: number; type: string; content: string }): Promise<Notification> {  
    return this.noticesService.createNotification(body.userId, body.type, body.content);  
  }  
 
  @Get(':userId')  
  async getAllForUser(@Param('userId') userId: number): Promise<Notification[]> {  
    return this.noticesService.getUserNotifications(userId);  
  }  

  @Patch(':id/read')  
  async markAsRead(@Param('id') id: number): Promise<Notification> {  
    return this.noticesService.markAsRead(id);  
  } 

}
