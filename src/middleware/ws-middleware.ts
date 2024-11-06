import { Injectable, UnauthorizedException } from '@nestjs/common';  
import { JwtService } from '@nestjs/jwt';  
import { Socket } from 'socket.io';  

@Injectable()  
export class SocketAuthMiddleware {  
  constructor(private readonly jwtService: JwtService) {}  

  use(client: Socket, next: (err?: Error) => void) {  
    const token = client.handshake.headers['authorization']?.split(' ')[1]; // Extract token from headers  

    if (!token) {  
      return next(new UnauthorizedException('No token provided'));  
    }  

    try {  
      this.jwtService.verify(token, { secret: process.env.JWT_SECRET_KEY }); // Verify token 
      const decoded = this.jwtService.decode(token);

      client['email'] = decoded.email; // Attach user data to socket object
      client['userId'] = decoded.sub; 
      next(); // Proceed to the next middleware or handler  
    } catch (err) {  
      next(new UnauthorizedException('Invalid token')); // Handle token verification error  
    }  
  }  
}