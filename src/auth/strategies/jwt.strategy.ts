import { Injectable, Logger } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey : `${process.env.JWT_SECRET_KEY}`,
        });
    }


    async validate(payload:any){
      console.log('################################################################')
      // if([3,23].includes(payload.sub))
        return {id: payload.sub, email: payload.email, username: payload.username};
      // else
      //   return false;
    }

}
