import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { CockpitsService } from './cockpits.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Cockpits')
@Controller('cockpits')
export class CockpitsController {
  constructor(private readonly cockpitsService: CockpitsService) {}

  @Get()
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  findAll(@Res() user) {
    return this.cockpitsService.findAll(user.id);
  }
}
