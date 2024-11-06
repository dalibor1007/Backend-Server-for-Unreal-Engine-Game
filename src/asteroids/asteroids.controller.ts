import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpStatus, HttpCode, Req } from '@nestjs/common';
import { AsteroidsService } from './asteroids.service';
import { ApiBearerAuth, ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@ApiTags('Asteroids')
@Controller('asteroids')
export class AsteroidsController {
  constructor(private readonly asteroidsService: AsteroidsService) {}
  
  
  @Get()
  @ApiOperation({
    description: `
  \n
  ** List of asteroids **

  \n
  
  `, summary: 'List of asteroids'
  })
  @ApiResponse({
    status: 200, description: 'List of available asteroids.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Asteroids successfully found.'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async findAll(@Req() user) {
    return this.asteroidsService.findAll(user.id);
  }
}
