import { Injectable } from '@nestjs/common';
import { IOutput } from 'src/_configs/types.config';
import { PrismaService } from 'src/prisma/prisma.service';
import { TUserId } from 'src/users/Users';


@Injectable()
export class MarketsService {
  
  constructor(
    private readonly prisma: PrismaService,
  ){}
  
  async findAll(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try{
      output = {
        success: true,
        message: '',
        data: {
          "market_info": {
            "next_update": {
              "days": 0,
              "hours": 0,
              "minutes": 0,
              "seconds": 0
            },
            "mineral_prices": [
              {
                "table_id": 101,
                "cost_price": 500,
                "sell_price": 600
              },
              {
                "table_id": 102,
                "cost_price": 550,
                "sell_price": 650
              }
              // Additional mineral prices can be added here.
            ]
          }
        }
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
