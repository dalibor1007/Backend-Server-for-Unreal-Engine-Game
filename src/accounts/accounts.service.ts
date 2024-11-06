import { Injectable } from '@nestjs/common';
import { IOutput } from 'src/_configs/types.config';
import { PrismaService } from 'src/prisma/prisma.service';
import { TUserId } from 'src/users/Users';

@Injectable()
export class AccountsService {
  

  constructor(
    private readonly prisma: PrismaService,
  ){}

  async cockpit(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try{

      const data = {
        "username": "string",
        "type": "string",
        "socketId": "string",
        "user_token": "string",
        "defencer_token": "string",
        "mapId": 0,
        "hp": 0,
        "isFiring": false,
        "enteredAt": "2024-05-25T00:04:28.293Z",
        "history_point": 0,
        "createdAt": "2024-05-25T00:04:28.293Z",
        "id": "string"
      }

      output = {
        success: true,
        message: '',
        data: data
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  async playerResearch(_user: TUserId, _params: any): Promise<IOutput> {
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

  async leaderboard(_user: TUserId): Promise<IOutput> {
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

  async playerResearchByFilters(_user: TUserId, _params: any): Promise<IOutput> {
    let output: IOutput;
    try{

      const data = {
        table_id: 0,
        startedAt: "2024-05-25T00:25:45.937Z",
        finishedAt: "2024-05-25T00:25:45.937Z",
        status: 0,
        is_with_boost: false,
        createdAt: "2024-05-25T00:25:45.937Z",
        id: "string",
        accountsId: "string"
      }
      output = {
        success: true,
        message: 'Item found successfully.',
        data: data
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  async playerResearchCount(_user: TUserId, _params: any): Promise<IOutput> {
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



  async createPlayerResearch(_user: TUserId, _params: any): Promise<IOutput> {
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


  async newAccount(_user: TUserId, _params: any): Promise<IOutput> {
    let output: IOutput;
    try{
      console.log('>>>>>>>>>>',_params)

      const userID = 1;
      const password = '***';
      const ip = '127.0.0.1';
      const storeName = 'store';
      const macAddress = '0:0:0:0:0:0:0:0:0';

      const data = {
				email: userID + '@disapora.com',
				username: userID,
				userID: userID,
				realname: userID,
				password: password,
				verified: false,
				createdAt: Date(),
				modifiedAt: Date(),
				register_ip: ip,
				store_name: storeName,
				mac_address: macAddress,
				status: 1,
				player_state: {
          home_planet_id: 10566,
          current_location_id: 10566,
          experience: 0,
          affiliations: [],
          reputation: 0,
          money_dc: 1000000,
          money_pdc: 1000000,
          jump_ready_percentage: 0.0,
          poisiton_state: 0,
          guild_id: -1,
          level: 0,
          ratio_shield_engine: 0,
        },
				attribute: {
          map_level: 0,
          ship_speed_multiplier: 1,
          ship_evasion_multiplier: 1,
          ship_damage_multiplier: 1,
          ship_cargo_space_add: 0,
          quest_slot: 0,
          research_speed_multiplier: 1,
          ship_hull_multiplier: 1,
          escape_time_substract: 0,
          ship_cost_multiplier: 1,
          gun_cost_multiplier: 1,
          misc_cost_multiplier: 1,
          repair_cost_multiplier: 1,
          sell_ship_cost_multiplier: 1,
          sell_gun_cost_multiplier: 1,
          sell_misc_cost_multiplier: 1,
          available_deck: 1,
          upgrade_cost_multiplier: 1,
        },
				possessionInfo: {
          decks: [1,2,3],
          inventory: {
            guns: [],
            miscs: [],
            ships: [{
              table_id: 1,
              uniq_id: '',
              current_hp: 95,
              equiped_skin: -1,
              guns: [],
              miscs: [],
            }],
            ship_skins: [],
            gun_skins: [],
            cockpit_skins: [],
            map_skins: [],
            equiped_ship: 1,
            equiped_map_skin: -1,
            equiped_cockpit_skin: -1,
          },
        },
				role: 'user',
				register_type: 'game'
			}

      output = {
        success: true,
        message: 'user registeration',
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


  async totalKilled(_user: TUserId, _params: any): Promise<IOutput> {
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


  async updatePlayerResearch(_user: TUserId, _params: any): Promise<IOutput> {
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


  async deletePlayerResearch(_user: TUserId, _params: any): Promise<IOutput> {
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

  async delete(_user: TUserId): Promise<IOutput> {
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
