import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import * as _ from "lodash";
import { RequestWithToken } from "src/middleware/check-token.middleware";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService: AuthService){
        super({
          usernameField: 'email',
          passReqToCallback: true,
        })
    }

    async validate(req: RequestWithToken,email:string,password:string){
      try{
        const integrationToken = req.integrationToken;
        console.log(email,password)
        const user = await this.authService.validateUser(email,password, req['ip-info'], req.headers);
        if(_.isEmpty(user) || user.success == false){
          throw new Error("Usuário ou senha não estão corretos, tente novamente ou recupere sua senha.....") 
        }
        return user.data;
      }catch(error){
        console.log(error)
        throw new HttpException({ success: false, message: error.message }, HttpStatus.UNAUTHORIZED);
      }
    }

}