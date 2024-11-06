import { CanActivate, ExecutionContext, HttpException, HttpStatus, Inject, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import * as _ from 'lodash';


export interface AuthGuardBlockIntegrationToken {
  block?: boolean;
}

export const BLOCK_ACCESS_INTEGRATION_TOKEN = Symbol('BLOCK_ACCESS_INTEGRATION_TOKEN');

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
      @Inject(Reflector)
      private reflector: Reflector
    ){
        
    }

    
    async canActivate(context: ExecutionContext): Promise<any> {
        try{
          
          const request = context.switchToHttp().getRequest();
          Logger.warn('ENTROU GUARD')
          // console.log('###JwtAuthGuard......', request.integrationToken, request.onetimeToken, request.user, request.accessToken)
            const handlerConfig = this.reflector.get<AuthGuardBlockIntegrationToken>(
              BLOCK_ACCESS_INTEGRATION_TOKEN,
              context.getHandler(),
            );
            const controllerConfig = this.reflector.get<AuthGuardBlockIntegrationToken>(
              BLOCK_ACCESS_INTEGRATION_TOKEN,
              context.getClass(),
            );
            const handleBlock = _.has(handlerConfig, 'block') ? handlerConfig.block : true;
            // const controllerBlock = controllerConfig?.block ? controllerConfig.block : false;
            // if(request.integrationToken != null && _.isNil(handlerConfig) == false ){
            if(request.integrationToken != null){
              // console.log('####ENTROU 01', handlerConfig,controllerConfig)
              if (handleBlock) {
                throw new Error('Usuário não tem autorização para acessar.');
              }
            }
            
            // if(request.integrationToken){
            //   const user = await this.usersService.validateUserByIntegrationToken(request.integrationToken)
            //   if(user.success == true){
            //     request.user = { id: user.data.id, email: user.data.email}
            //     return true
            //   }else{
            //     throw new Error('Seu token de integração não está correto!');
            //   }
            // }
        }catch(error){
          throw new HttpException({ success: false, message: error.message }, HttpStatus.UNAUTHORIZED);
        }
        return true;
    }
}

