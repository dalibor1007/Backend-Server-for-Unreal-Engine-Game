import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Request, UseGuards } from '@nestjs/common';
import { MapPointsService } from './map-points.service';
import { ApiBearerAuth, ApiConsumes, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@ApiTags('MapPoints')
@Controller('map-points')
export class MapPointsController {
  constructor(private readonly mapPointsService: MapPointsService) {}


  @Get()
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async list(@Request() user){
    return await this.mapPointsService.list(user);
  }

  @Get('map')
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'Map Search by Point Reference', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Map point found successfully',
        data: {
          points: [
            {
              name: "30000",
              reference: 30000,
              xpos: 0,
              ypos: 0,
              point_name: "Gen Grayl",
              type: 3,
              connections: [30000,30001,30002],
              galaxy: 2,
              accessLevelArea: 0,
              AIGuildArea: 0
            }
          ],
          cells: [
            {
              name: "2",
              guild_area: "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
              access_level_area: "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
              galaxy_size: {
                "X": 10,
                "Y": 10
              },
              galaxy_index: 2
            }
          ]
        }
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async getMap(@Request() user){
    return await this.mapPointsService.getMap(user);
  }
  
  @Get('maps/:reference')
  @ApiParam({
    description: 'Reference Points',
    type: 'string',
    name: 'reference',
    required: true,
  })
  @ApiOperation({
    description: `
  \n
  ** Map Search by Point Reference **

  \n
  
  `, summary: 'Map Search by Point Reference'
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'Map Search by Point Reference', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Map point found successfully'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  getMapByPoint(@Request() user, @Param('reference', ParseIntPipe) reference: number) {
    return this.mapPointsService.getMapByPoint(user, reference);
  }

}
