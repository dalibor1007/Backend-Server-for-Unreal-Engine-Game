import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TUserId } from 'src/users/Users';
import { IOutput } from 'src/_configs/types.config';
import { Roles, Status, StatusPlayerResearchs } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import * as _ from 'lodash';
import { ApplyBoostResearchesPlayersDto } from './dto/apply-boost-researches-player.dto';
import { RunResearchesPlayersDto } from './dto/run-researches-player.dto';

@Injectable()
export class PlayersService {
  

  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ){}
  
  async listTypesResearchs(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try{
      const userID = _user?.id ? _user.id : null;
      if(_.isNil(userID)){ throw new Error('Usuário não esta autenticado.')}
      const checkPermissions = await this.usersService.userHavePermission(userID, [Roles.ADMIN, Roles.PLAYER]);
      if(checkPermissions.status === false) { throw new Error(checkPermissions.message)}
      const objPlayerResearchTypes = await this.prisma.playerResearchTypes.findMany({
        where: {
          status: Status.ACTIVE
        },
        select:{
          id: true,
          reference: true,
          name: true,
          upgrade_time: true,
          time_boosted: true,
          boost_percents: true,
          cost: true,
          boost_cost: true,
          increase: true
        }
      })
      
      output = {
        success: true,
        message: 'Players researches Types found successfully.',
        data: objPlayerResearchTypes
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


  async listPlayerResearchs(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try{
      const userID = _user?.id ? _user.id : null;
      if(_.isNil(userID)){ throw new Error('User is not authenticated.')}
      const checkPermissions = await this.usersService.userHavePermission(userID, [Roles.PLAYER]);
      if(checkPermissions.status === false) { throw new Error(checkPermissions.message)}

      const objPlayerResearches = await this.prisma.playerResearches.findMany({
        where:{
          Users: {id: userID},
          status: StatusPlayerResearchs.IN_PROGESS,
        },
        select:{
          id: true,
          time_end: true,
          increase: true,
          level: true,
          with_boots: true,
        }
      })
      console.log(objPlayerResearches)
      output = {
        success: true,
        message: 'Players researches found successfully.',
        data: objPlayerResearches
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  async runResearches(_user: TUserId, _params: RunResearchesPlayersDto): Promise<IOutput> {
    let output: IOutput;
    try{
      const userID = _user?.id ? _user.id : null;
      if(_.isNil(userID)){ throw new Error('User is not authenticated.')}
      const checkPermissions = await this.usersService.userHavePermission(userID, [Roles.PLAYER]);
      if(checkPermissions.status === false) { throw new Error(checkPermissions.message)}
      const researchTYype = _params?.research_type ? _params.research_type : null;
      console.log(_params)
      await this.prisma.playerResearchTypes.findUniqueOrThrow({
        where:{ 
          reference: researchTYype
        }
      }).catch(error => { throw new Error(`${error?.code ?? ''} Unable to find Type.`)})
      const run = await this.prisma.playerResearches.create({
        data:{
          Users:{connect: {id: userID}},
          PlayerResearchTypes: {connect: {reference: researchTYype}},
          time_end: new Date(),
          increase: 1,
          level: 1,
          with_boots: false,
        }
      })
      output = {
        success: true,
        message: 'Search started successfully.',
        data: run
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


  async applyBoostResearches(_user: TUserId, _params: ApplyBoostResearchesPlayersDto): Promise<IOutput> {
    let output: IOutput;
    try{
      const userID = _user?.id ? _user.id : null;
      if(_.isNil(userID)){ throw new Error('User is not authenticated.')}
      const checkPermissions = await this.usersService.userHavePermission(userID, [Roles.PLAYER]);
      if(checkPermissions.status === false) { throw new Error(checkPermissions.message)}
      const research = _params?.research ? _params.research : null;
      console.log(_params)
      const objResearch = await this.prisma.playerResearches.findFirstOrThrow({
        where:{ 
          id: research,
          Users: {id: userID}
        }
      }).catch(error => { throw new Error(`${error?.code ?? ''} Unable to find Type.`)})
      if(objResearch.with_boots){ throw new Error('This search has already been Boost activated')}
      const newDate = this.applyBoost(objResearch.time_end);
      await this.prisma.playerResearches.update({
        where:{
          id: objResearch.id,
        },
        data:{
          with_boots: true,
          time_end: newDate,
        }
      })
      output = {
        success: true,
        message: 'Boost applied successfully'
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

  async removeResearches(_user: TUserId, id_research: number): Promise<IOutput> {
    let output: IOutput;
    try{
      const userID = _user?.id ? _user.id : null;
      if(_.isNil(userID)){ throw new Error('User is not authenticated.')}
      const checkPermissions = await this.usersService.userHavePermission(userID, [Roles.PLAYER]);
      if(checkPermissions.status === false) { throw new Error(checkPermissions.message)}
      const research = id_research ? id_research : null;
      const objResearch = await this.prisma.playerResearches.findFirstOrThrow({
        where:{ 
          id: research,
          Users: {id: userID}
        }
      }).catch(error => { throw new Error(`${error?.code ?? ''} Research not found.`)})
      output = {
        success: true,
        message: 'Research successfully removed.',
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }





  applyBoost(_date: Date): Date {
    const now = new Date(); // Data atual
  
    // Certifique-se de que a data passada é um objeto Date
    const future = _date;
  
    // Verifique se a data futura é maior que a data atual
    if (future > now) {
      // Calcula a diferença em milissegundos
      const differenceInMs = future.getTime() - now.getTime();
  
      // Converta a diferença para minutos (1 minuto = 60.000 milissegundos)
      const differenceInMinutes = Math.floor(differenceInMs / 1000 / 60);
  
      // Calcula 30% da diferença em minutos
      const percentage = differenceInMinutes * 0.30;
  
      console.log(`Data atual: ${now}`);
      console.log(`Data Futura: ${future}`);
      console.log(`Diferença em minutos: ${differenceInMinutes}`);
      console.log(`30% da diferença: ${percentage}`);
  
      return  new Date(future.setMinutes(future.getMinutes() - percentage));
    } else {
      console.log("A data futura não é maior que a data atual.");
      return null;
    }
  }
}
