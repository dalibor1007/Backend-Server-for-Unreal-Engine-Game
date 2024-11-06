import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, Res, HttpStatus } from '@nestjs/common';
import { HangarsService } from './hangars.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Hangars')
@Controller('hangars')
export class HangarsController {
  constructor(private readonly hangarsService: HangarsService) {}

  @Get()
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  findAll(@Res() user) {
    return this.hangarsService.findAll(user.id);
  }
}
