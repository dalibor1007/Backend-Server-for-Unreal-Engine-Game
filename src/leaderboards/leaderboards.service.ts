import { Injectable } from '@nestjs/common';
import { IOutput } from 'src/_configs/types.config';
import { PrismaService } from 'src/prisma/prisma.service';
import { TUserId } from 'src/users/Users';

@Injectable()
export class LeaderboardsService {
  
  constructor(
    private readonly prisma: PrismaService,
  ){}
  
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
