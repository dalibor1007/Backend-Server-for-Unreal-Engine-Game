import { ExecutionContext, HttpException, HttpStatus, Inject, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { IS_PUBLIC_KEY } from "src/_helpers/is-public.decorator";
import * as _ from "lodash";
import { UsersService } from "src/users/users.service";


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private readonly usersService: UsersService,
    private reflector: Reflector,
  ) {
    super()
  }

  async canActivate(context: ExecutionContext): Promise<any> {
    try {

      const request = context.switchToHttp().getRequest();

      console.log(request)
      // Proceed with your existing logic... 
      Logger.warn('ENTROU JWT AUTH')
      // console.log('###JwtAuthGuard......', request.integrationToken, request.onetimeToken, request.user, request.accessToken, request.hasAccessToken)
      const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      let userAccessToken;
      if (request.hasAccessToken) {
        const user = await this.usersService.validateUserByAccessToken(request.accessToken)
        if (user.success == true) {
          userAccessToken = { id: user.data.id, email: user.data.email, username: user.data.username }
        }
      }
      else if (request.handshake.headers.authorization) {
        const user = await this.usersService.validateUserByAccessToken(request.handshake.headers.authorization)
        console.log(user);
        if (user.success == true) {
          userAccessToken = { id: user.data.id, email: user.data.email, username: user.data.username }
          request.user = userAccessToken;
          return true;
        }
      }
      if (isPublic) {
        if (_.isNil(userAccessToken) == false) {
          request.user = userAccessToken;
        }
        return true;
      } else {
        if (_.isNil(userAccessToken) == false) {
          const checkAllowedUser = await this.usersService.checkAllowedUser(userAccessToken);
          if (checkAllowedUser.success == false) {
            throw new HttpException({ success: false, message: checkAllowedUser.message }, HttpStatus.UNAUTHORIZED);
          }
        }
      }
      if (request.hasAccessToken == null && request.integrationToken == null) {
        throw new Error('Usuário não tem autorização para acessar!!');
      }
      if (request.integrationToken) {
        const user = await this.usersService.validateUserByIntegrationToken(request.integrationToken)
        if (user.success == true) {
          request.user = { id: user.data.id, email: user.data.email, username: user.data.username }
          return true
        } else {
          throw new Error('Seu token de integração não está correto!');
        }
      }
    } catch (error) {
      console.log(error)
      throw new HttpException({ success: false, message: error.message }, HttpStatus.UNAUTHORIZED);
    }
    return super.canActivate(context);
  }
}