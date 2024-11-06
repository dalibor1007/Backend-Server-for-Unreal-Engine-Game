import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, Res, HttpStatus } from '@nestjs/common';
import { LeaderboardsService } from './leaderboards.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Leaderboards')
@Controller('leaderboards')
export class LeaderboardsController {
  constructor(private readonly leaderboardsService: LeaderboardsService) {}

  @Get()
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  findAll(@Res() user) {
    return this.leaderboardsService.findAll(user.id);
  }
}
