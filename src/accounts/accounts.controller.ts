import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards, HttpCode, HttpStatus, Query, Put, ParseIntPipe } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { ApiBearerAuth, ApiConsumes, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { FormDataRequest } from 'nestjs-form-data';

@ApiTags('Accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get('cockpit')
  @ApiOperation({
    description: `
  \n
  ** Fetches belongsTo relation cockpit. **

  \n
  
  `, summary: 'Fetches belongsTo relation cockpit.'
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'Fetches belongsTo relation cockpit.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Fetches belongsTo relation cockpit.'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  cockpit(@Req() user) {
    return this.accountsService.cockpit(user.id);
  }

  @Get('leaderboard')
  @ApiOperation({
    description: `
  \n
  ** Fetches belongsTo relation leaderboard. **

  \n
  
  `, summary: 'Fetches belongsTo relation leaderboard.'
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'Fetches belongsTo relation leaderboard.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Fetches belongsTo relation leaderboard.'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  leaderboard(@Req() user) {
    return this.accountsService.leaderboard(user.id);
  }


  @Get('player/research')
  @ApiQuery({
    description: 'filter',
    type: 'string',
    name: 'filter',
    required: true,
  })
  @ApiOperation({
    description: `
  \n
  ** Queries player_research of Accounts. **

  \n
  
  `, summary: 'Queries player_research of Accounts.'
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'Queries player_research of Accounts.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Queries player_research of Accounts.'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  playerResearchByFilters(@Req() user, @Query() filter: any) {
    return this.accountsService.playerResearchByFilters(user.id, filter);
  }


  @Get('player/research/count')
  @ApiQuery({
    description: 'Criteria to match model instances',
    type: 'string',
    name: 'where',
    required: true,
  })
  @ApiOperation({
    description: `
  \n
  ** Counts player_research of Accounts. **

  \n
  
  `, summary: 'Counts player_research of Accounts.'
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'Counts player_research of Accounts.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Counts player_research of Accounts.'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  playerResearchCount(@Req() user, @Query() filter: any) {
    return this.accountsService.playerResearchCount(user.id, filter);
  }


  @Get('player/research/:fk')
  @ApiParam({
    description: 'Foreign key for player_research',
    type: 'number',
    name: 'fk',
    required: true,
  })
  @ApiOperation({
    description: `
  \n
  ** Find a related item by id for player_research. **

  \n
  
  `, summary: 'Find a related item by id for player_research.'
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'Find a related item by id for player_research.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Find a related item by id for player_research.'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  playerResearch(@Req() user, @Param() params: any) {
    return this.accountsService.playerResearch(user.id, params);
  }


  @Post('player/research')
  @ApiOperation({
    description: `
  \n
  ** Creates a new instance in player_research of this model. **

  \n
  
  `, summary: 'Creates a new instance in player_research of this model.'
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'Creates a new instance in player_research of this model.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Creates a new instance in player_research of this model.'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  createPlayerResearch(@Req() user, @Body() params: any) {
    return this.accountsService.createPlayerResearch(user.id, params);
  }


  @Post('register/user')
  @ApiOperation({
    description: `
  \n
  ** user registeration **

  \n
  
  `, summary: 'user registeration'
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'user registeration', schema: {
      type: "object",
      example: {
        success: true,
        message: 'user registeration'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  newAccount(@Req() user, @Body() params: any) {
    return this.accountsService.newAccount(user.id, params);
  }


  @Post('total/killed')
  @ApiOperation({
    description: `
  \n
  ** total killed **

  \n
  
  `, summary: 'total killed'
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'total killed', schema: {
      type: "object",
      example: {
        success: true,
        message: 'total killed'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  totalKilled(@Req() user, @Body() params: any) {
    return this.accountsService.totalKilled(user.id, params);
  }



  @Put('player/research/:fk')
  @ApiParam({
    description: 'Foreign key for player_research',
    type: 'number',
    name: 'fk',
    required: true,
  })
  @ApiOperation({
    description: `
  \n
  ** Update a related item by id for player_research. **

  \n
  
  `, summary: 'Update a related item by id for player_research.'
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'Update a related item by id for player_research.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Update a related item by id for player_research.'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  updatePlayerResearch(@Req() user, @Param('fk', ParseIntPipe) fk: any) {
    return this.accountsService.updatePlayerResearch(user.id, fk);
  }


  @Delete('player/research/:fk')
  @ApiParam({
    description: 'Foreign key for player_research',
    type: 'number',
    name: 'fk',
    required: true,
  })
  @ApiOperation({
    description: `
  \n
  ** Delete a related item by id for player_research. **

  \n
  
  `, summary: 'Delete a related item by id for player_research.'
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'Delete a related item by id for player_research.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Delete a related item by id for player_research.'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  deletePlayerResearch(@Req() user, @Param('fk', ParseIntPipe) fk: any) {
    return this.accountsService.deletePlayerResearch(user.id, fk);
  }

  @Delete()
  @ApiOperation({
    description: `
  \n
  ** Deletes all player_research of this model. **

  \n
  
  `, summary: 'Deletes all player_research of this model.'
  })
  @ApiConsumes('multipart/form-data', 'application/json')
  @ApiResponse({
    status: 200, description: 'Deletes all player_research of this model.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Deletes all player_research of this model.'
      }
    }
  })
  @FormDataRequest()
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  delete(@Req() user) {
    return this.accountsService.delete(user.id);
  }
}
