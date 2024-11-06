import { Injectable } from '@nestjs/common';
import { IOutput } from 'src/_configs/types.config';
import { PrismaService } from 'src/prisma/prisma.service';
import { TUserId } from 'src/users/Users';


@Injectable()
export class AsteroidsService {
  constructor(
    private readonly prisma: PrismaService,
  ){}
  
  async findAll(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try{
      const data = {
        username: "string",
        type: "string",
        socketId: "string",
        user_token: "string",
        defencer_token: "string",
        mapId: 0,
        hp: 0,
        isFiring: false,
        enteredAt: "2024-05-28T18:56:26.054Z",
        history_point: 0,
        createdAt: "2024-05-28T18:56:26.054Z",
        id: "string"
      }
      output = {
        success: true,
        message: 'Asteroids successfully found.',
        data: data
      }
    }catch(error){
      console.log(error)
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }
}
