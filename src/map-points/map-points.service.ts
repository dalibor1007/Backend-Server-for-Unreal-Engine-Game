import { Injectable, Logger } from '@nestjs/common';
import { PointType, PrismaClient, Status } from '@prisma/client';
import { IOutput } from 'src/_configs/types.config';
import { PrismaService } from 'src/prisma/prisma.service';
import { TUserId } from 'src/users/Users';
import * as _ from 'lodash';
import { TypePoints } from './MapPoints';

@Injectable()
export class MapPointsService {
  

  constructor(
    private readonly prisma: PrismaService
  ){}

  async getMap(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try{

      const objMaps = await this.prisma.maps.findMany({
        where: {
          status: Status.ACTIVE
        },
        select: {
          id: true,
          name: true,
          xpos: true,
          ypos: true,
          galaxy: true,
          access_level_area: true,
          guild_area: true,
          Points: {
            select: {
              id: true,
              name: true,
              type: true,
              reference: true,
            }
          },
          hasPoints: {
            select: {
              Points:{
                select: {
                  id: true,
                  reference: true,
                  name: true,
                  type: true
                }
              }
            }
          }
        }
      })
      if(_.isEmpty(objMaps)){ throw new Error('No active Map Points found')}
      const dataMapPoints = objMaps.map(item => {
        return {
          name: item.name,
          reference: item.Points.reference,
          xpos: item.xpos,
          ypos: item.ypos,
          point_name: item.Points.name,
          type: TypePoints[item.Points.type],
          connections: item.hasPoints.map(potins => potins.Points.reference),
          galaxy: item.galaxy,
          access_level_area: item.access_level_area,
          guild_area: item.guild_area
        }
      })
      const objGalaxies = await this.prisma.galaxies.findMany({
        where: {
          status: Status.ACTIVE
        },
        select: {
          id: true,
          name: true,
          guild_area: true,
          access_level_area: true,
          size: true,
          index: true,
        }
      })
      if(_.isNil(objGalaxies)){ throw new Error('Galaxies were not found')}
      const galaxies = objGalaxies.map(galaxy => {
        return {
          name: galaxy.name,
          guild_area: galaxy.guild_area,
          access_level_area: galaxy.access_level_area,
          galaxy_size: galaxy.size,
          galaxy_index: galaxy.index,
        }
      })
      const data = {
        points: dataMapPoints,
        cells: galaxies
      }
      output = {
        success: true,
        message: 'Request was successful',
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

  async list(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try{
      const objMaps = await this.prisma.maps.findMany({
        where: {
          status: Status.ACTIVE
        },
        select: {
          id: true,
          name: true,
          xpos: true,
          ypos: true,
          galaxy: true,
          access_level_area: true,
          guild_area: true,
          Points: {
            select: {
              id: true,
              name: true,
              type: true,
              reference: true,
            }
          },
          hasPoints: {
            select: {
              Points:{
                select: {
                  id: true,
                  reference: true,
                  name: true,
                  type: true
                }
              }
            }
          }
        }
      })
      if(_.isEmpty(objMaps)){ throw new Error('No active Map Points found')}
      const data = objMaps.map(item => {
        return {
          name: item.name,
          reference: item.Points.reference,
          xpos: item.xpos,
          ypos: item.ypos,
          point_name: item.Points.name,
          type: item.Points.type,
          connections: item.hasPoints.map(potins => potins.Points.reference),
          galaxy: item.galaxy,
          accessLevelArea: item.access_level_area,
          AIGuildArea: item.guild_area
        }
      })
      output = {
        success: true,
        message: 'Pointos de mapas encontrados com sucesso.',
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


  async getMapByPoint(_user: TUserId, _reference: number): Promise<IOutput> {
    let output: IOutput;
    try{
      const reference = _reference ? _reference : null;
      if(_.isNil(reference)){throw new Error('No Map Point ID defined')}

      const objMap = await this.prisma.maps.findFirstOrThrow({
        where: {
          status: Status.ACTIVE,
          Points:{
            reference: reference
          }
        },
        select: {
          id: true,
          name: true,
          xpos: true,
          ypos: true,
          galaxy: true,
          access_level_area: true,
          guild_area: true,
          Points: {
            select: {
              id: true,
              name: true,
              type: true,
              reference: true,
            }
          },
          hasPoints: {
            select: {
              Points:{
                select: {
                  id: true,
                  reference: true,
                  name: true,
                  type: true
                }
              }
            }
          }
        }
      }).catch(error => {throw new Error(`${error?.code ?? ''}No Map Point found.`)})

      const data = {
        name: objMap.name,
        reference: objMap.Points.reference,
        xpos: objMap.xpos,
        ypos: objMap.ypos,
        point_name: objMap.Points.name,
        type: objMap.Points.type,
        connections: objMap.hasPoints.map(potins => potins.Points.reference),
        galaxy: objMap.galaxy,
        accessLevelArea: objMap.access_level_area,
        AIGuildArea: objMap.guild_area
      }
      output = {
        success: true,
        message: 'Map point found successfully',
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


}
