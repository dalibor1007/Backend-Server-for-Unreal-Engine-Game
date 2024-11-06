import { Injectable } from '@nestjs/common';
import { PointType, Roles, Status } from '@prisma/client';
import { IOutput } from 'src/_configs/types.config';
import { PrismaService } from 'src/prisma/prisma.service';
import { TUserId } from 'src/users/Users';
import { UsersService } from 'src/users/users.service';
import { SetHomePlanetsDto } from './dto/set-home-planet.dto';
import * as _ from 'lodash';
import { RunResearchesPlanetDto } from './dto/run-researches-planet.dto';

@Injectable()
export class PlanetsService {
  
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ){}

  async listPlanets(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try{
      const userID = _user?.id ? _user.id : null;
      if(_.isNil(userID)){ throw new Error('User is not authenticated.')}
      const checkPermissions = await this.usersService.userHavePermission(userID, [Roles.PLAYER]);
      if(checkPermissions.status === false) { throw new Error(checkPermissions.message)}
      const objPlanets = await this.prisma.points.findMany({
        where:{
          type: PointType.PLANET,
          status: Status.ACTIVE
        },
        select: {
          id: true,
          galaxy_index: true,
          name: true,
          reference: true,
          xpos: true,
          ypos: true,
          access_level_area: true,
          ai_guild_area: true,
          type: true,
        }
      });
      output = {
        success: true,
        message: 'Planets found successfully.',
        data: objPlanets
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  async setUserHomePlanet(_user: TUserId, _params: SetHomePlanetsDto): Promise<IOutput> {
    let output: IOutput;
    try{
      const userID = _user?.id ? _user.id : null;
      if(_.isNil(userID)){ throw new Error('User is not authenticated.')}
      const checkPermissions = await this.usersService.userHavePermission(userID, [Roles.PLAYER]);
      if(checkPermissions.status === false) { throw new Error(checkPermissions.message)}
      const planetPoint = _params?.id_point ? _params.id_point : null;

     const {success, message} = await this.usersService.setUserHomePlanet(_user, planetPoint)
     if(success === false){ throw new Error(message)}
      output = {
        success: true,
        message: message,
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  async runResearches(_user: TUserId, _params: RunResearchesPlanetDto): Promise<IOutput> {
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




}
