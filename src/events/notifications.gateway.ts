import { ConnectedSocket, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from 'socket.io';
import { NoticesService } from "src/notices/notices.service";

@WebSocketGateway({namespace: 'notifications'})
export class NotificationsGateway {

  @WebSocketServer()
  server: Server; 

  /**
   *
   */
  constructor(private readonly notificationsService: NoticesService) {} 

  handleConnection(client: any){
    console.log('===> Namespace notifications : client socket is connected...')
    console.log('client.id', client.id)
  }

  @SubscribeMessage('notification')
  handleMessage(client: any, payload: any): string {
    console.log('NOTIFICATION CLIENT:', client.id)
    console.log('NOTIFICATION PAYLOAD:', payload)

    return 'Notificações enviadas';
  }

  handleDisconnect(client: any){
    console.log(` notification ===> socket ID ${client.id} - client socket is disconnected...`)
  }

  @SubscribeMessage('newNotification')  
  async handleNewNotification(notificationData: Partial<Notification>) {  
    // const notification = await this.notificationsService.createNotification(notificationData);  
    // this.server.emit('notification', notification); // Emit the new notification to all connected clients  
  }  

  @SubscribeMessage('markAllAsRead')  
  async handleMarkAllAsRead(clientId: string) {  
    // Logic to mark all notifications as read for the user  
    // This can be based on userId or any identifier you have  
  } 


}