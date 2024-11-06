import { HttpException, HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as _ from 'lodash';
import { General } from 'src/_helpers/general.helper';
import { UsersService } from 'src/users/users.service';


export interface RequestWithToken extends Request {
  integrationToken: string;
  onetimeToken: string;
  accessToken: string;
  hasAccessToken: boolean;
  user?: number;
 }
@Injectable()
export class CheckTokenMiddleware implements NestMiddleware {
   constructor(
       private readonly usersService: UsersService
       ){}

   async use(req: RequestWithToken, res: Response, next: NextFunction) {

       const integrationToken = req.headers['integration-token'] ?  req.headers['integration-token'].toString() : null;
       const oneTimeToken = req.headers['onetime-token'] ? req.headers['onetime-token'].toString() : null;
       const bearerToken = req.headers.authorization ?? null;
      //  console.log('#####VERIFYTOKEN',integrationToken,oneTimeToken,bearerToken)
      //  console.log('#####VERIFYTOKEN',req.headers, bearerToken)
      //  console.log('#####1',integrationToken)
      //  console.log('#####2',oneTimeToken)
      //  console.log('#####3',bearerToken)
      const ipInfo = await General.getIPInfo(String(req.headers['x-forwarded-for']));
      req['ip-info'] = ipInfo;
       if(_.isNil(integrationToken) === false){
         Logger.warn('#####INTEGRATION TOKEN');
         const checkIntegrationToken = await this.usersService.checkIntegrationToken(integrationToken);
         //  Logger.error('INTEGRATION',[integrationToken,checkIntegrationToken])
         req.integrationToken = checkIntegrationToken ? integrationToken : null;
         req.user = 0
        }
        if(_.isNil(oneTimeToken) === false){
          Logger.warn('#####ONE TIME TOKEN');
          const checkOneTimeToken = await this.usersService.checkOneTimeToken(oneTimeToken);
          //  Logger.error('ONE-TIME',[oneTimeToken,checkOneTimeToken])
          req.onetimeToken = checkOneTimeToken ? oneTimeToken : null;
        }
        if(_.isNil(bearerToken) === false){
         Logger.warn('#####ONE BEARER TOKEN');
           const checkBearerToken = await this.usersService.checkBearerToken(bearerToken);
           if(checkBearerToken === false){
            throw new HttpException({ success: false, message: 'Não autorizado...' }, HttpStatus.UNAUTHORIZED);
           }
          //  Logger.error('BEARER',[bearerToken,checkBearerToken])
           req.accessToken = checkBearerToken ? bearerToken : null;
           req.hasAccessToken = checkBearerToken ? checkBearerToken : null;
       }

       next();
   }
}

