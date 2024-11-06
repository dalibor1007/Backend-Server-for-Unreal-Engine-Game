import { Logger, UseGuards } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io'
import { IOutput } from 'src/_configs/types.config';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { SocketAuthMiddleware } from 'src/middleware/ws-middleware';
import { NotificationsService } from 'src/notifications/notifications.service';
import { TUserId } from 'src/users/Users';



@WebSocketGateway()
@UseGuards(JwtAuthGuard)
export class FiringGateway {

  @WebSocketServer()
  server: Server;

  constructor(private readonly socketAuthMiddleware: SocketAuthMiddleware,private readonly notificationsService: NotificationsService) {}  

  afterInit(client: Socket){
    // client.use(SocketAuthMiddleware() as any)
    // Logger.log('#### == >  After Initialized')
  }

  async handleConnection(client: Socket){

    await new Promise<void>((resolve, reject) => {  
      this.socketAuthMiddleware.use(client, (err) => {  
        if (err) {  
          // Send an error message to the client before disconnecting  
          client.emit('unauthorized', { message: 'You are not authenticated.' });  
          
          // Disconnect the client  
          client.disconnect(true);   
          return reject(err);  
        }  
        console.log(`Client connected: ${client['email']} - ${client.id}`);  
        resolve();  
      });  
    }).catch((err) => {  
      console.error('Authentication failed:', err.message);  
    });

  }

  
  @SubscribeMessage('notifications')
  async handleMessage(client: any, payload: any): Promise<IOutput> {
    console.log('CLIENT:', client.id)
    console.log('PAYLOAD:', payload)

    // Assuming the user ID is part of the client object  
    const userId: number = client.userId; // Adjust this according to how you store user ID in client  

    // Fetch unread notifications for the user  
    const notificationsOutput: IOutput = await this.notificationsService.findAll(userId);  

    // Return the notifications or a success message  
    return notificationsOutput;
  }

  handleDisconnect(client: Socket){
    console.log(`Global ===> socket ID ${client.id} ${client['email']} - client socket is disconnected...`)
  }
}
