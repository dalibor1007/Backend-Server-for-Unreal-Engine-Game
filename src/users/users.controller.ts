import { Controller, Get, HttpCode, HttpStatus, UseGuards, Request, Query, Param, ParseIntPipe, Res, Post, Req, Body, Patch, SetMetadata, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiConsumes, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Pagination, PaginationProps } from 'src/_helpers/pagination.decorator';
import { FormDataRequest } from 'nestjs-form-data';
import { BlockUsersDto } from './dto/block-user.dto';
import { NewUsersUserDto } from './dto/new-users-user.dto';
import { UpdatePermissionsUserDto } from './dto/update-permissions-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ForgotPasswordUserDto } from './dto/forgot-password-user.dto';
import { IsPublic } from 'src/_helpers/is-public.decorator';
import { NewPasswordByCodeUserDto } from './dto/new-password-by-code-user.dto';


@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    ) {}

  @Get()
  @ApiOperation({ summary: 'Get User Data' })
  @ApiResponse({
    status: 200, description: 'Get User Data', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Authenticated user information.',
        data:{}
      }
    }
  })
  @ApiBearerAuth('JWT')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  async show(@Request() req) {
    return await this.usersService.getUser(req.user);
  }



  

  @Get('permissions')
  @ApiOperation({ summary: 'Access permissions' })
  @ApiResponse({
    status: 200, description: 'Returns permissions.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Permissions found successfully.',
        data: {}
      }
    }
  })
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('JWT')
  async listPermissionPage(@Req() req) {
    return await this.usersService.listPermissionPage(req.user);
  }

  @Get('comfirm/email/:code')
  @ApiParam({
    description: 'Code validade email',
      type: 'string',
      name: 'code',
      required: true,
    })
  @ApiOperation({ summary: 'Confirm E-mail' })
  @ApiResponse({
    status: 200, description: 'Confirm E-mail', schema: {
      type: "object",
      example: {
        success: true,
        message: 'E-mail confirmed successfully.',
        data: {}
      }
    }
  })
  @HttpCode(HttpStatus.OK)
  async confirmEmail(@Req() req, @Param('code') code: string) {
    return await this.usersService.confirmEmail(req.user, code);
  }

  

  @Post('new')
  @ApiOperation({
    description: `
  \n
  ** Register a new user ** 
  \n
  
  `, summary: 'User registration'
  })
  @ApiConsumes('multipart/form-data', 'application/json')
  @ApiResponse({
    status: 200, description: 'Register a new user', schema: {
      type: "object",
      example: {
        success: true,
        message: 'User registered successfully.'
      }
    }
  })
  @IsPublic()
  @FormDataRequest()
  @HttpCode(HttpStatus.OK)
  newUser(@Request() req, @Body() params: NewUsersUserDto) {
    return this.usersService.newUser(req.user, params);
  }


  @Post('integration/token')
  @ApiOperation({
    description: `
  \n
  ** Gera um novo token de integração cancelando o token anterior ativo. ** 
  \n
  
  `, summary: 'Gera um token de integração'
  })
  @ApiConsumes('multipart/form-data', 'application/json')
  @ApiResponse({
    status: 200, description: 'Novo token de integração', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Integration Token generated successfully.'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @FormDataRequest()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  newIntegrationToken(@Request() req) {
    return this.usersService.generateIntegrationToken(req.user);
  }
  

  @Post('forgot-password')
  @ApiOperation({ summary: 'Recuperar senha do usuário' })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'Solicitação de recuperação de senha do usuário.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Recuperação de senha solicitada com sucesso.'
      }
    }
  })
  @FormDataRequest()
  @HttpCode(HttpStatus.OK)
  async forgotPassword(@Body() body: ForgotPasswordUserDto) {
    return await this.usersService.forgotPassword(body);
  }

  @Post('forgot-password/code')
  @ApiOperation({ summary: 'Definir uma nova senha usando código de segurança' })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'Definir uma nova senha usando código de segurança', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Sua senha foi atualizada com sucesso.'
      }
    }
  })
  @FormDataRequest()
  @HttpCode(HttpStatus.OK)
  async forgotPasswordByCode(@Body() body: NewPasswordByCodeUserDto) {
    return await this.usersService.forgotPasswordByCode(body);
  }

  @Patch('permission')
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Edit user permissions.' })
  @ApiResponse({
    status: 200, description: 'Edit user permissions.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Permissions updated successfully.'
      }
    }
  })
  @FormDataRequest()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('JWT')
  async updatePermissionUser(@Request() req, @Body() _params: UpdatePermissionsUserDto) {
    return await this.usersService.updatePermissionUser(req.user, _params);
  }


  @Patch(':id')
  @ApiParam({
  description: 'Id user',
    type: 'number',
    name: 'id',
    required: true,
  })
  @ApiOperation({
    description: `
  \n
  ** Update user information **

  \n
  
  `, summary: 'Update user information'
  })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200, description: 'Update user information', schema: {
      type: "object",
      example: {
        success: true,
        message: 'Information updated successfully.'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(FileInterceptor('avatar'))
  async updateUsers(@Req() req, @Param('id', ParseIntPipe) id: number, @Body() params: UpdateUserDto,
  @UploadedFile() avatar?: Express.Multer.File) {
    return await this.usersService.updateUsers(req.user, id, params, avatar);
  }
  

  


  @Delete('block')
  @ApiOperation({
    description: `
  \n
  **To block or unlock a user must send the BLOCK param defined as TRUE or FALSE** 
  \n
 
  
  `, summary: 'Block user'
  })
  @ApiConsumes('application/json')
  @ApiResponse({
    status: 200, description: 'Block users.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'User blocked successfully.'
      }
    }
  })
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  async blockUser(@Req() req, @Body() params: BlockUsersDto) {
    return await this.usersService.blockUser(req.user, params);
  }
  
  
}
