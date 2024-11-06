import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus, Request, ParseIntPipe } from '@nestjs/common';
import { PlayersService } from './players.service';
import { ApiBearerAuth, ApiConsumes, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FormDataRequest } from 'nestjs-form-data';
import { RunResearchesPlayersDto } from './dto/run-researches-player.dto';
import { ApplyBoostResearchesPlayersDto } from './dto/apply-boost-researches-player.dto';

@ApiTags('Players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('reseraches-types')
  @ApiOperation({ summary: 'List the types of searches' })
  @ApiResponse({
    status: 200, description: 'List of search types', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Players researches Types found successfully.',
        data:{}
      }
    }
  })
  @ApiBearerAuth('JWT')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async listTypesResearchs(@Request() req) {
    return await this.playersService.listTypesResearchs(req.user);
  }
  

  @Get('researches')
  @ApiOperation({ summary: 'List the of researches' })
  @ApiResponse({
    status: 200, description: 'List of researches', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Players researches found successfully.',
        data:{}
      }
    }
  })
  @ApiBearerAuth('JWT')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async listPlayerResearchs(@Request() req) {
    return await this.playersService.listPlayerResearchs(req.user);
  }


  @Post('start-research')
  @ApiOperation({ summary: 'Start searching for a player' })
  @ApiResponse({
    status: 200, description: 'Start searching for a player', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Search started successfully.',
        data:{}
      }
    }
  })
  @ApiConsumes('multipart/form-data','application/json')
  @FormDataRequest()
  @ApiBearerAuth('JWT')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async runResearches(@Request() req, @Body() params: RunResearchesPlayersDto) {
    return await this.playersService.runResearches(req.user, params);
  }
  
  @Post('apply-boost-research')
  @ApiOperation({ summary: 'Boost an already started search' })
  @ApiResponse({
    status: 200, description: 'Boost an already started search', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Search started successfully.',
        data:{}
      }
    }
  })
  @ApiConsumes('multipart/form-data','application/json')
  @FormDataRequest()
  @ApiBearerAuth('JWT')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async applyBoostResearches(@Request() req, @Body() params: ApplyBoostResearchesPlayersDto) {
    return await this.playersService.applyBoostResearches(req.user, params);
  }


  @Delete(':id/researches')
  @ApiParam({
    description: 'ID Research',
    required: true,
    type: 'number',
    name: 'id'
  })
  @ApiOperation({
    description: `
  \n
  **remove currently loading research and research from queue. ** 
  \n
 
  
  `, summary: 'Remove Research'
  })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 200, description: 'Remove research.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Research successfully removed.'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async removeResearches(@Request() req, @Param('id', ParseIntPipe) id_research: number) {
    return await this.playersService.removeResearches(req.user, id_research);
  }

}
