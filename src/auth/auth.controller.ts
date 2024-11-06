import { Controller, HttpCode, HttpStatus, Post, Body, Req, UseGuards, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { IntegrationToken } from 'src/_helpers/integration-token.decorator';
import { TwoFactorCheckLoginDto } from './dto/check-code-login.dto';
import { IsPublic } from 'src/_helpers/is-public.decorator';
import { AppSecret } from 'src/_helpers/app-secret.decorator';
import { FormDataRequest } from 'nestjs-form-data';

@ApiTags('Authentications')
@Controller('auth')
export class AuthController {

  constructor(
    private readonly authservice: AuthService,
    ) { }

   

  @Post('login')
  @ApiBody({
    description: "User authentication.",
    type: LoginDto
  })
  @ApiOperation({ summary: 'Login' })
  @ApiResponse({
    status: 200, description: 'User authentication.', schema: {
      type: "object",
      example: {
        success: true,
        message: "Authenticated successfully",
        data: {}
      }
    }
  })
  @UseGuards(AuthGuard('local'))
  @HttpCode(HttpStatus.OK)
  async login(@Req() req, @IntegrationToken() _integration_token: string, @AppSecret('TESTE0001') _app_secret: any, @Body() _params: any) {
    // console.log('###BODY', _params) 
    return await this.authservice.login(req.user, {app_secret: _app_secret, integration_token: _integration_token});
  }
  

  @Post('login/check')
  @ApiConsumes('multipart/form-data', 'application/json')
  @ApiOperation({ summary: 'Checks if the 2FA code is valid and releases the user' })
  @ApiResponse({
    status: 200, description: 'User authentication.', schema: {
      type: "object",
      example: {
        success: true,
        message: "2FA authentication check completed successfully.",
        data: {
          is_valid: true
        }
      }
    }
  })
  @IsPublic()
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.OK)
  @FormDataRequest()
  async loginCheck(@Req() req, @Body() code: TwoFactorCheckLoginDto) {
    return await this.authservice.loginCheck(req.user, code);
  }

  @Delete()
  @ApiOperation({ summary: 'Removes the user session.' })
  @ApiResponse({
    status: 200, description: 'Removes the users active session.', schema: {
      type: "object",
      example: {
        success: true,
        message: 'User exited the system successfully.'
      }
    }
  })
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('JWT')
  @UseGuards(JwtAuthGuard)
  async removeUser(@Req() req) {
    return await this.authservice.removeSession(req.user);
  }
}
