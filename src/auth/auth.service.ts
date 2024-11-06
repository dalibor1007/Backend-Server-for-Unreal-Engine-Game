import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Roles, Status } from '@prisma/client';
import { UsersService } from '../users/users.service';
import * as _ from 'lodash';
import { General } from 'src/_helpers/general.helper';
import { v4 as uuid } from 'uuid';
import { TwoFactorCheckLoginDto } from './dto/check-code-login.dto';
import { ConfigService } from '@nestjs/config';
import { IOutput } from 'src/_configs/types.config';
import * as bcrypt from 'bcrypt';
import * as randomstring from 'randomstring';
import { PrismaService } from 'src/prisma/prisma.service';
import { TUserId } from 'src/users/Users';
import { MailerService } from '@nestjs-modules/mailer';
import * as Moment from 'moment';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService,
  private readonly usersService: UsersService,
  private readonly configService: ConfigService,
  private readonly mailerService: MailerService,
  private readonly jwtservice: JwtService) { }

  async login(_user: TUserId, _params: {app_secret: string, integration_token: string}): Promise<IOutput> {
    let output: IOutput;
    try{
      console.log('###LOGIN ###', _params);
      
      const integrationToken = _params.integration_token ?? null;
      const appSecret = _params.app_secret ?? null;
      
      const objUserLogin = await this.usersService.getUserAuthenticated(_user);
      if(objUserLogin.success == false){
        throw new Error(objUserLogin.message)
      }
      // Logger.log(objUserLogin)
      const objUser = objUserLogin.data;
      const secret:any =  await this.configService.get<string>('systems');
      const decryptAppSecret = General.decrypt(appSecret, secret.seed);
      const decodeBase64 = Buffer.from(decryptAppSecret, "base64").toString()
      const objAppSecret = JSON.parse(decodeBase64)
      // console.log(objAppSecret)
      
      let seedUser, seed;
      // console.log('#####>>>>>>>>>>>', objUser,objUserLogin, _.isNil(objUser.seed) , objUser.seed)
      if(_.isNil(objUser.seed)){
        seedUser = uuid();
        seed = General.encrypt(uuid(), secret.seed);
        const updateUserSeed = await this.usersService.updateUserSeed(_user, {user_id: objUser.id, seed: seed});
        if(updateUserSeed.success == false){
          throw new Error(updateUserSeed.message)
        }
      }
      const objEncrypt = await this.usersService.encryptUsingSeed(_user, decryptAppSecret);
      if(objEncrypt.success == false){
        throw new Error(`Não foi possível codificar: ${objEncrypt.message}`)
      }
      const encrypt = objEncrypt.data;
      const payload = { sub: objUser.id, email: objUser.email, username: objUser.username, app_secret:  encrypt}
      const token = this.jwtservice.sign(payload);

      const updateUserToken = await this.usersService.updateUserAccessToken(_user, {
        access_token: token, 
        access_allowed: false,
        app_secret: encrypt
      })
      if(updateUserToken.success == false){
        throw new UnauthorizedException(updateUserToken.message);
      }


      const data = {
        access_token: token,
        ...objUser
      }

      const ipDetails = await General.getIPInfo(objAppSecret.ip);
      
      let location;
      if(_.isEmpty(ipDetails) == false) {
        location = `Country: ${ipDetails.Country} - ${ipDetails.Region} - ${ipDetails.City}.`;
      }

      // this.eventEmitter.emit('history.user', {
      //   user_id: objUser.id,
      //   title: 'Autenticação!!!',
      //   source: {app_secret: objAppSecret, user: data, ip_info: ipDetails},
      //   description: `Autenticação realizada com sucesso pelo usuário ${objUser.username}: IP[${objAppSecret.ip}] - ${location}`,
      // })

      output = {
        success: true,
        message: 'Autenticação realizada com sucesso.',
        data: data
      }
    }catch(error){
      console.log(error)
      output = {
        success: false,
        message: error.message
      }
    }
    return output
  }



  async validateUser(email: string, password: string, _ip_info: any, _headers: any): Promise<IOutput> {
    let output: IOutput;
    try{
      const pass  = randomstring.generate({
        length: 7,
        charset: 'numeric'
      });
      // {
      //   "username": "knox",
      //   "password": "7742811",
      //   "mac_address": "string"
      // }
      console.log('#####PASS',email, pass,await bcrypt.hash(pass, 10));
      const validUser = await this.usersService.validateUserLoguin({
        email: email,
        password: password
      })
      // console.log(validUser)
      if(validUser.success == false){
        throw new UnauthorizedException(validUser.message);
      }
      const objUser = validUser.data;

      await this.mailerService.sendMail({
        to: objUser.email,
        subject: `🤖 Login Notification `,
        template: 'login_notification',
        context: {
          
            name: objUser.username,
            server: _headers['user-agent'],
            ip: _headers['x-forwarded-for'],
            date: Moment().format('YYYY-MM-DD HH:mm:ss'),
            isp: `${_ip_info.ISP}`,
            provider: `${_ip_info.provider}`,
            country: `${_ip_info.City}, ${_ip_info.RegionName} - ${_ip_info.Country}`,
            support_email: process.env.SUPPORT_EMAIL,
            copy: process.env.COPY
          
        },
      });
      

      output = {
        success: true,
        message: 'Authentication completed successfully.',
        data: {
          id: objUser.id,
          username: objUser.username,
          email: objUser.email,
          status: objUser.status,
        }
      }
    }catch(error){
      console.log(error)
      output = {
        success: false,
        message: error.message
      }
    }
    return output;

  }

  async removeSession(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try{

      const closeSeccion = await this.usersService.logoutSession(_user)
      if(closeSeccion.success == false){
        throw new Error(closeSeccion.message)
      }

      output = {
        success: true,
        message: 'Usuário saiu do sistema com sucesso.'
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  async loginCheck(_user: TUserId, _params: TwoFactorCheckLoginDto): Promise<IOutput> {
    let output: IOutput;
    try{

      if(_.has(_user ,'id') == false){ throw new Error('Não foi identificado o usuário.') }
      const objUser = await this.prisma.users.findFirst({
        where: {
          status: Status.ACTIVE,
          id: _user.id,
          role: {notIn: [Roles.PLAYER]}
        },
        select: {
          id: true,
          role: true,
        }
      })
      if(_.isEmpty(objUser)){
        throw new Error('Usuário ou senha não estão corretos.')
      }

      // console.log('####CODE', _params,_user)
      if(_.isNil(_user)){
        throw new Error('Não foi possível validar o acesso do usuário.')
      }

      const updateUserAccessAllowed:any = await this.usersService.updateUserAccessAllowed(_user, true);
      if(updateUserAccessAllowed.sucess == false){
        throw new Error(updateUserAccessAllowed.message);
      }
      
      output = {
        success: true,
        message: 'Verificação 2FA de autenticação realizada com sucesso.',
        data:{
          role: objUser.role 
        }
      }
    }catch(error){
      console.log(error)
      await this.usersService.logoutSession(_user);
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }
}
