import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { ApiBearerAuth, ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FormDataRequest } from 'nestjs-form-data';
import { SetHomePlanetsDto } from './dto/set-home-planet.dto';
import { RunResearchesPlanetDto } from './dto/run-researches-planet.dto';

@ApiTags('Planets')
@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get()
  @ApiOperation({ summary: 'List the planets' })
  @ApiResponse({
    status: 200, description: 'List planets', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Planets found successfully.',
        data:{}
      }
    }
  })
  @ApiBearerAuth('JWT')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async listPlanets(@Request() req) {
    return await this.planetsService.listPlanets(req.user);
  }

  @Post('start-research')
  @ApiOperation({ summary: 'Start searching for a planet' })
  @ApiResponse({
    status: 200, description: 'Start searching for a planet', schema: {
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
  async runResearches(@Request() req, @Body() params: RunResearchesPlanetDto) {
    return await this.planetsService.runResearches(req.user, params);
  }

  @Patch('set-home-planet')
  @ApiOperation({ summary: "Sets the player's planet" })
  @ApiResponse({
    status: 200, description: "Sets the player's planet", schema: {
      type: "object",
      example: {
        success: true,
        message: 'User defined planet.',
      }
    }
  })
  @ApiConsumes('multipart/form-data','application/json')
  @FormDataRequest()
  @ApiBearerAuth('JWT')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async setUserHomePlanet(@Request() req, @Body() params: SetHomePlanetsDto) {
    return await this.planetsService.setUserHomePlanet(req.user, params);
  }
}
