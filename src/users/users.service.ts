import { Injectable, Logger } from '@nestjs/common';
import * as _ from 'lodash';
import { General } from 'src/_helpers/general.helper';
import { Roles, Status, StatusSecurityCode, TypePermissions } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { IOutput } from 'src/_configs/types.config';
import { ETypeLogger, LoggersService } from 'src/loggers/loggers.service';
import { compareSync } from 'bcrypt';
import * as Moment from 'moment';
import { PaginationProps } from 'src/_helpers/pagination.decorator';
import { Subject } from 'rxjs';
import { BlockUsersDto } from './dto/block-user.dto';
import { NewUsersUserDto } from './dto/new-users-user.dto';
import * as randomstring from 'randomstring';
import * as bcrypt from 'bcrypt';
import { UpdatePermissionsUserDto } from './dto/update-permissions-user.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { v4 as uuid } from 'uuid';
import { PrismaService } from 'src/prisma/prisma.service';
import Users, { TUserAccessToken, TUserId } from './Users';
import { UpdateUserDto } from './dto/update-user.dto';
import { ForgotPasswordUserDto } from './dto/forgot-password-user.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { NewPasswordByCodeUserDto } from './dto/new-password-by-code-user.dto';


@Injectable()
export class UsersService {
  
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly eventEmitter: EventEmitter2,
    private readonly loggersService: LoggersService,
    private readonly mailerService: MailerService,
  ){}

  async events(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try{
      let notificationEvent: Subject<any> = new Subject()
      notificationEvent.next({ data: { message: 'Hello World' } });
      output = {
        success: true,
        message: 'Eventos',
        data: notificationEvent.asObservable()
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  /**
   * * Bloquear usuário
   * @param _user 
   * @param _params 
   * @returns 
   */
  async blockUser(_user: TUserId, _params: BlockUsersDto): Promise<IOutput> {
    let output: IOutput;
    try{

      const userID = _user.id ? _user.id : null;
      if(_.isNil(userID)) {throw new Error("User is not authenticated.")}
      const checkPermissions = await this.userHavePermission(userID, ['ADMIN']);
      if(checkPermissions.status === false) { throw new Error(checkPermissions.message)}

      const idUser = _params.user_id ? _params.user_id : null;
      const observation = _params.observation ? _params.observation : null;
      const block = _.has(_params, 'block') && _.isBoolean(_params.block) ? _params.block : null;
      
      if(!idUser){
        throw new Error('The user to block has not been defined.');
      }
      if(_.isNil(block)){
        throw new Error('It has not been defined whether the user will be blocked')
      }
      if(!observation){
        throw new Error('A description has not been defined.');
      }
      await this.prisma.users.update({
        where:{
          id: _user.id
        },
        data: {
          status: Status.BLOCKED,
        }
      })
      

      output = {
        success: true,
        message: block ? 'User blocked successfully.' : 'User unlocked successfully.',
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  async updateUserAccessAllowed(_user: TUserId, _valid: boolean): Promise<IOutput> {
    let output: IOutput;
    try{

      if(_.isNil(_valid)){
        throw new Error("The verification value has not been defined.");
      }
      const updateUser = await this.prisma.users.update({
        where: {
          id: +_user.id
        },
        data:{
          access_allowed: _valid,
        }
      })
      if(_.isEmpty(updateUser)){
        throw new Error("User access was not permitted.");
      }
      output = {
        success: true,
        message: 'User Access updated successfully.',
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  /**
   * * Cadastro de um novo usuário.
   * @param _user 
   * @param _params 
   * @returns 
   */
  async newUser(_user: TUserId, _params: NewUsersUserDto): Promise<IOutput> {
    let output: IOutput;
    try{
      
console.log(_params)
      const storeName = _params?.store_name ? _params.store_name : null;
      const macAddress = _params?.mac_address ? _params.mac_address : null;
      const username = _params?.username ? _params.username.toLowerCase() : null;
      const passwordText = _params?.password ? _params.password : null;
      const email = _params?.email ? _params.email : null;
      const firstName = _params?.first_name ? _params.first_name : null;
      const lastName = _params?.last_name ? _params.last_name : null;
    
      if(!username) { throw new Error('Username was not defined')}
      if(/^[a-zA-Z0-9]+$/.test(username) == false || username.length < 3){ throw new Error('Username must only have letters and numbers with at least 3 characters')}
      if(_.isNil(passwordText)) { throw new Error('A valid password has not been set')}
      if(_.isNil(storeName) || storeName.length < 3) { throw new Error('The name of the store has not been defined or is less than 3 characters')}
      if(_.isNil(macAddress)) { throw new Error('MACADDRESS has not been defined')}
      if(_.isNil(firstName)) { throw new Error('First Name has not been defined')}
      if(_.isNil(lastName)) { throw new Error('Last name has not been defined')}

      const usernameExists = await this.prisma.users.findFirst({
        where: {
          username: username
        }
      }).catch(error => { console.log(error)})

      if(usernameExists) { throw new Error(`This username ${username} already exists.`)}
      const storeNameExists = await this.prisma.accounts.findFirst({
        where: {
          store_name: storeName
        }
      })
      if(storeNameExists) { throw new Error(`This Store Name ${username} already exists.`)}

      
      const password = await bcrypt.hash(passwordText, 10);

      let userData:any = {
        username: username,
        password: password,
        role: Roles.PLAYER,
        Peoples: {
          create:{
            first_name: firstName,
            last_name: lastName
          }
        },
        UserConfigurations: {},
        Accounts: {
          create: {
            store_name: storeName,
            mac_address: macAddress
          }
        }
      };
      if(_.isNil(email) == false){ userData = Object.assign(userData, {email: email}) }
      console.log(userData)
      const newUserData = await this.prisma.users.create({
        data: userData
      }).catch(error => {console.log(error); throw new Error(`${error?.code ?? ''} Unable to register your account, please contact support.`)})

      const token = randomstring.generate({
        length: 6,
        charset: 'numeric'
      });
      const encrypt = await this.encryptUsingSeed(newUserData, token);
      if(encrypt.success === false) { throw new Error(encrypt.message)}
      const encryptCode = encrypt.data;

      const expirationDate = Moment().add(5, 'minutes').toDate();


      await this.prisma.securityCodes.create({
        data: {
          Users: {
            connect: { id: newUserData.id }
          },
          code: token,
          hash: encryptCode,
          date_expiration: expirationDate
        }
      })
      // this.eventEmitter.emit('history.user', {
      //   user_id: objUser.id,
      //   title: 'Novo usuário cadastrado.',
      //   source: {new_user: createUser, user: objUser},
      //   description: `Novo Usuário com ID:${createUser.id} cadastrado pelo USER:${objUser.id}`,
      // })

      await this.mailerService.sendMail({
        to: email,
        subject: `🤖 `,
        template: 'welcome',
        context: {
          
          link: `${process.env.PROJECT_URL}users/comfirm/email/${token}`,
          name: `${firstName} ${lastName}`,
          support_email: process.env.SUPPORT_EMAIL,
          copy: process.env.COPY
          
        },
      });

      output = {
        success: true,
        message: 'User registered successfully.',
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


  /**
   * 
   * @param _user 
   * @param _where 
   * @param _data 
   * @returns 
   */
  async updateUserSeed(_user: TUserId, _params: {user_id: number, seed: string}): Promise<IOutput> {
    let output: IOutput;
    try{

      const userID = _params?.user_id ? _params.user_id : null;
      const seed = _params?.seed ? _params.seed : null;
      if(_.isNil(userID)) throw new Error('User ID to update has not been defined.')
      if(_.isNil(seed)) throw new Error('User key has not been defined.')
      const updateUser = await this.prisma.users.update({
        where: {
          id: userID,
        },
        data: {
          seed: seed
        }
      });

      if(!updateUser){
        throw new Error('Unable to update user data.')
      }

      output = {
        success: true,
        message: 'User updated successfully.'
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  /**
   * 
   * @param _user 
   * @param _params 
   * @returns 
   */
  async updateUserAccessToken(_user: TUserId, _params: TUserAccessToken): Promise<IOutput> {
    let output: IOutput;
    try{

      const userID = _user?.id ? _user.id : null;
      const accessToken = _params?.access_token ? _params.access_token : null;
      const accessAllowed = _params?.access_allowed && _.isBoolean(_params.access_allowed) ? _params.access_allowed : false;
      const appSecret = _params?.app_secret ? _params.app_secret : null;
      
      if(_.isNil(userID)) throw new Error('ID do usuário para atualizar não foi definido.')
      if(_.isNil(accessToken)) throw new Error('Token de acesso não foi definido')
      if(_.isNil(appSecret)) throw new Error('Chave do aplicativo não foi definido')
      const params:TUserAccessToken = {
        access_token: accessToken,
        access_allowed: accessAllowed,
        app_secret: appSecret,
      }
      const updateUsers = await this.prisma.users.update({
        where: {
          id: _user.id
        },
        data:{
          access_token: accessToken,
          access_allowed: accessAllowed,
          app_secret: appSecret,
        }
      })

      if(!updateUsers){
        throw new Error('Não foi possível atualizar os dados do usuário.')
      }
      output = {
        success: true,
        message: 'Usuário atualizado com sucesso.'
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  /**
   * 
   * @param _user 
   * @returns 
   */
  async getUserAuthenticated(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try {
      
      const userAuthentication = await this.prisma.users.findUniqueOrThrow({
        where: {
          id: _user.id
        },
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          seed: true,
          Peoples: {
            select: {
              first_name: true,
              last_name: true,
            }
          }
        }
      }).catch(error => { throw new Error(`${error?.code ?? ''}Usuario não encontrado`)})

      const objUserPermissions = await this.getUserPermissions(_user);
      if(objUserPermissions.success === false){
        throw new Error(objUserPermissions.message)
      }

      // const possessions = {
      //   decks: [0],
      //   inventory: {
      //     guns: {
      //       id: 1,
      //       uniq_id: 0,
      //       current_hp: 100,
      //       equiped_skin: 1,
      //     },
      //     miscs: {
      //       id: 1,
      //       uniq_id: '0',
      //       current_hp: 100,
      //     },
      //     ships: {
      //       id: 301,
      //       uniq_id: '301',
      //       current_hp: 100,
      //       equiped_skin: 1,
      //       guns: [
      //         {id: 1,uniq_id: '101',current_hp: 100,equiped_skin: 1,},
      //         {id: 2,uniq_id: '101',current_hp: 100,equiped_skin: 1,}
      //       ],
      //       miscs: [
      //         {id: 1,uniq_id: '101',current_hp: 100},
      //         {id: 2,uniq_id: '101',current_hp: 100},
      //       ],
      //       minerals: [
      //         {id: 1, urrent_value: 1},
      //         {id: 2, urrent_value: 10},
      //       ]
      //     },
      //     ship_skins: ["301"],
      //     gun_skins: [101],
      //     cockpit_skins: [0],
      //     map_skins: [0],
      //     equiped_ship: '101',
      //     equiped_map_skin: 1,
      //     equiped_cockpit_skin: 1,
      //   }
      // }
      // const current_state = {
      //   home_planet_id: 1,
      //   current_location_id: 1,
      //   experience: 1,
      //   affiliations: [
      //     {id: 1, current_value: 1},
      //     {id: 2, current_value: 10},
      //   ],
      //   reputation: 1,
      //   money_dc: 1,
      //   money_pdc: 1,
      //   jump_ready_percentage: 1,
      //   poisiton_state: 0,
      //   guild_id: 1,
      //   level: 1,
      //   ratio_shield_engine: 1,
      // }
      const possessions = {
        decks: ["1s"],
        inventory: {
          Guns: [
            {
                table_id: 101,
                uniq_id: '1g',
                current_hp: 100,
                equiped_skin: -1
            }
          ],
          Miscs: [{
            table_id: 101,
            uniq_id: '1m',
            current_hp: 100,
          }],
          Ships:[
            {
                table_id: 102,
                uniq_id: '1s',
                current_hp: 100,
                equiped_skin: -1,
                Guns: [
                  {table_id: 101,uniq_id: '1s1g',current_hp: 100,equiped_skin: -1,},
                  {table_id: 102,uniq_id: '1g',current_hp: 100,equiped_skin: -1,}
                ],
                // Miscs: [
                //   {table_id: 101,uniq_id: '1m',current_hp: 100},
                //   {table_id: 102,uniq_id: '2m',current_hp: 100},
                // ],
                Minerals: [
                  {table_id: 101, current_value: 1},
                  {table_id: 102, current_value: 10},
                ]
            }
          ],
          ship_skins: [],
          gun_skins: [],
          cockpit_skins: [],
          map_skins: [],
          equiped_ship: '1s',
          equiped_map_skin: 1,
          equiped_cockpit_skin: 1,
        }
      }
      const current_state = {
        home_planet_id: 10566,
        current_location_id: 10566,
        experience: 1,
        affiliations: [],
        reputation: 1,
        money_dc: 100000,
        money_pdc: 100000,
        jump_ready_percentage: 0.0,
        poisiton_state: 0,
        guild_id: -1,
        level: 16,
        ratio_shield_engine: 10,
      }

      const permissions = objUserPermissions.data;
      const returnData = {
        id: userAuthentication.id,
        name: `${userAuthentication.Peoples.first_name} ${userAuthentication.Peoples.last_name}`,
        username: userAuthentication.username,
        email: userAuthentication.email,
        role: userAuthentication.role,
        possessions: possessions,
        current_state: current_state,
        permissions: permissions,
        seed: userAuthentication.seed
      }


      output = {
        success: true,
        message: 'Informações do usuário autenticado.',
        data: returnData
      };

    } catch (error: any) {
      console.log(error)
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  /**
   * * Retorna informações do usuário autenticado.
   * @param _user 
   * @returns 
   */
  async getUser(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try {
      
      const userID = _user?.id ? _user.id : null;
      if(_.isNil(userID)){ throw new Error('Usuário não esta autenticado.')}
      const checkPermissions = await this.userHavePermission(userID, ['ADMIN','PLAYER']);
      if(checkPermissions.status === false) { throw new Error(checkPermissions.message)}
      
      const objUser = await this.prisma.users.findUniqueOrThrow({
        where: {
          id: userID,
          status: Status.ACTIVE,

        },
        select: {
          id: true,
          username: true,
          email: true,
          avatar: true,
          twofactor_active: true,
          role: true,
          Peoples: {
            select: {
              first_name: true,
              last_name: true,
              nationality: true,
              birthday: true,
              phone: true,
              cellphone: true,
            }
          }
        }
      }).catch(error => { throw new Error(`${error.code ?? ''} Não foi possível encontrar o usuário autenticado.`)});

      const objUserPermissions = await this.getUserPermissions(_user);
      if(objUserPermissions.success === false){
        throw new Error(objUserPermissions.message)
      }

      const permissions = objUserPermissions.data;
      const returnData = {
        id: objUser.id,
        name: `${objUser.Peoples.first_name} ${objUser.Peoples.last_name}`,
        username: objUser.username,
        avatar: objUser.avatar,
        email: objUser.email,
        role: objUser.role,
        twofactor: objUser.twofactor_active,
        first_name: objUser.Peoples.first_name,
        last_name: objUser.Peoples.last_name,
        nationality: objUser.Peoples?.nationality,
        birthday: Moment(objUser.Peoples?.birthday).format('YYYY-MM-DD'),
        phone: objUser.Peoples?.phone ?? null,
        cellphone: objUser.Peoples?.cellphone ?? null,
        permissions: permissions
      }


      output = {
        success: true,
        message: 'Informações do usuário autenticado.',
        data: returnData
      };

    } catch (error: any) {
      console.log(error)
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }
  

  /**
   * Método que expõe para outros services as permissões de um usuário.
   * @param _user 
   * @returns 
   */
  async getUserPermissions(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try{
      const objUser: any = await this.prisma.users.findFirstOrThrow({
        where: {
          id: _user.id,
          status: Status.ACTIVE
        },
        select: {
          id: true,
          username: true,
          email: true,
          password: false,
          role: true,
          status: true,
          Permissions: {
            select:{
              id_permission_indice: true,
              enabled: true,
            },
            where: {
              enabled: true
            }
          },
        }
      }).catch(err => {throw new Error(`[${err.code}] - ${err.message.replace(/\n/g, '')}`)});

      const arrPermissionsList: any = await this.prisma.permissionIndices.findMany({
        where: {
          type: { not: TypePermissions.PAGE }
        },
        select: {
          id: true,
          name: true,
          parameter: true,
          type: true,
          standard: true,
          ChildOf: {
            select: {
              id: true,
              name: true,
              parameter: true,
              standard: true
            }
          }
        }
      });
      const userPermissions = new Users(objUser);
      const permissions = userPermissions.getPermissions(arrPermissionsList);
      output = {
        success: true,
        message: 'Permissões de usuários encontradas com sucesso.',
        data: permissions
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  



  /**
   * 
   * @param _integration_token 
   * @returns 
   */
  async checkIntegrationToken(_integration_token: string): Promise<boolean> {
    let check = false;
    try {
      if (_.isNil(_integration_token)) {
        throw new Error('Não foi definido um token de integração para verificar.')
      }
      const objUser = await this.prisma.users.findFirst({
        where: {
          status: Status.ACTIVE,
          integration_token: _integration_token
        }
      })
      if (_.isEmpty(objUser)) {
        throw new Error('Não existe o token de integração.')
      }
      check = true;
    } catch (error) {
      check = false;
    }
    return check;
  }


  /**
   * 
   * @param _onetime_token 
   * @returns 
   */
  async checkOneTimeToken(_onetime_token: string): Promise<boolean> {
    let check = false;
    try {
      if (_.isNil(_onetime_token)) {
        throw new Error('Não foi definido um token de uso único para verificar.')
      }
      const objUser = await this.prisma.users.findFirst({
        where: {
          status: Status.ACTIVE,
          onetime_token: _onetime_token
        }
      })
      if (_.isEmpty(objUser)) {
        throw new Error('Não existe o token de uso único.')
      }
      check = true;
    } catch (error) {
      check = false;
    }
    return check;
  }


  /**
   * 
   * @param _bearer_token 
   * @returns 
   */
  async checkBearerToken(_bearer_token: string): Promise<boolean> {
    let check = false;
    try {
      if (_.isNil(_bearer_token)) {
        throw new Error('Não foi definido um token de acesso para verificar.')
      }
      const token = _bearer_token.split(' ') ? _bearer_token.split(' ')[1] : null;
      if(_.isNil(token)){
        throw new Error('Não foi definido um token de acesso para verificar.');
      }
      const objUser = await this.prisma.users.findFirstOrThrow({
        where: {
          status: Status.ACTIVE,
          access_token: token
        }
      }).catch(err => {throw new Error(`[${err.message.replace(/\n/g, '')}] - Não existe o token de acesso.`)});
      
      check = true;
    } catch (error) {
      console.log(error)
      check = false;
    }
    return check;
  }

  /**
   * 
   * @param _integrationToken 
   * @returns 
   */
  async validateUserByIntegrationToken(_integrationToken: string): Promise<IOutput> {
    let output: IOutput;
    try {
      const objUser = await this.prisma.users.findFirst({
        where: {
          integration_token: _integrationToken
        }
      })
      if (_.isEmpty(objUser)) {
        throw new Error('Não foi encontrado um usuário válido.')
      }
      output = {
        success: true,
        message: 'Usuário encontrado com sucesso.',
        data: {
          id: objUser.id,
          email: objUser.email,
          username: objUser.username
        }
      }
    } catch (error) {
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  /**
   * 
   * @param _access_token 
   * @returns 
   */
  async validateUserByAccessToken(_access_token: string): Promise<IOutput> {
    let output: IOutput;
    try {
      const objUser = await this.prisma.users.findFirst({
        where: {
          access_token: _access_token.split(' ')[1]
        }
      })
      if (_.isEmpty(objUser)) {
        throw new Error('Não foi encontrado um usuário válido.')
      }
      output = {
        success: true,
        message: 'Usuário encontrado com sucesso.',
        data: {
          id: objUser.id,
          email: objUser.email,
          username: objUser.username
        }
      }
    } catch (error) {
      console.log('#####',error)
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  /**
   * 
   * @param _user 
   * @param _text 
   * @returns 
   */
  async encryptUsingSeed(_user: TUserId, _text: string): Promise<IOutput> {
    let output: IOutput;
    try {
// console.log('######',_user)
      if (typeof _text !== 'string') throw new Error('O valor a ser encriptografado deve ser do tipo String')
      const objUser = await this.prisma.users.findUniqueOrThrow({
        where: {
          status: Status.ACTIVE,
          id: _user.id
        }
      }).catch(error => { throw new Error( `${error.code} Não foi possível encontrar o usuário.`)})
      if (_.isEmpty(objUser)) {
        throw new Error('Usuário não foi encontrado.')
      }
      const secretSystem: any = await this.configService.get<string>('systems');
      if (_.has(secretSystem, 'seed') == false) {
        throw new Error('Não foi possível encontrar a chave SECRET')
      }
      const secret = secretSystem.seed;
      let userSeed = objUser.seed;
      if(!userSeed){
        Logger.error('##############UUID NOVO!!!!')
        userSeed = General.encrypt(uuid(), secret);
        await this.updateUserSeed(_user, {
          user_id: objUser.id,
          seed: userSeed
        })
      }
      // console.log('#####',_user, objUser, secret)
      const seedUser = General.decrypt(userSeed, secret);
      const encrypted = General.encrypt(_text, seedUser)
      const decrypted = General.decrypt(encrypted, seedUser)
      // console.log(secretSystem, objUser.seed, seedUser, encrypted, decrypted)
      output = {
        success: true,
        message: 'Texto encriptografado com sucesso.',
        data: encrypted
      }
    } catch (error) {
      console.log(error)
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  /**
   * 
   * @param _user 
   * @param _text 
   * @returns 
   */
  async decryptUsingSeed(_user: TUserId, _text: string): Promise<IOutput> {
    let output: IOutput;
    try {

      if (typeof _text !== 'string') throw new Error('O valor a ser decifrado deve ser do tipo String')
      const objUser = await this.prisma.users.findFirst({
        where: {
          status: Status.ACTIVE,
          id: _user.id
        }
      })
      if (_.isEmpty(objUser)) {
        throw new Error('Usuário não foi encontrado.')
      }
      const secretSystem: any = await this.configService.get<string>('systems');
      if (_.has(secretSystem, 'seed') == false) {
        throw new Error('Não foi possível encontrar a chave SECRET')
      }
      // console.log(secretSystem)
      // console.log('####>>>>>>1',_text, secretSystem, objUser.seed)
      const secret = secretSystem.seed;
      const seedUser = General.decrypt(objUser.seed, secret);
      // console.log('####>>>>>>2',seedUser)
      const decrypted = General.decrypt(_text, seedUser)
      // console.log(secretSystem, objUser.seed, seedUser, decrypted)
      output = {
        success: true,
        message: 'Texto decifrado com sucesso.',
        data: decrypted
      }
    } catch (error) {
      console.log(error)
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  
  /**
   * 
   * @param _user 
   * @returns 
   */
  async logoutSession(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try {
      const objUser: any = await this.prisma.users.update({
        where: {
          id: _user.id
        },
        data: {
          access_token: null,
          onetime_token: null,
          access_allowed: false,
        }
      })
      if (objUser.count <= 0) {
        throw new Error('Não foi possível encerrar a sessão do usuário.')
      }
      output = {
        success: true,
        message: 'Sessão encerrada com sucesso.',
      }
    } catch (error) {
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  



  async checkAppSecret(_user: TUserId, _params: any): Promise<IOutput> {
    let output: IOutput;
    try{

      const appSecret = _params.app_secret ? _params.app_secret : null;
      const host = _params.host ? _params.host : null;
      const ip = _params.ip ? _params.ip : null;
      const userAgent = _params.user_agent ? _params.user_agent : null;
      
      if(_.isNil(appSecret)){
        throw new Error('Não foi definido AppSecret');
      }
      const objUser = await this.prisma.users.findUniqueOrThrow({
        where: {
          id: _user.id
        },
        select: {
          id: true,
          app_secret: true,
        }
      })
      if(_.isEmpty(objUser)){
        throw new Error('Não foi encontrado o usuário para validar o AppSecret');
      }

      const userDecreypt = await this.decryptUsingSeed(_user, appSecret);
      if(userDecreypt.success === false){
        throw new Error(userDecreypt.message);
      }
      const decrypt = userDecreypt.data;
      const userAppSecret = objUser.app_secret;
      if(_.isNil(userAppSecret)){
        throw new Error('Não foi encontrado no usuário o userAppSecret');
      }

      const decodeBase64 = Buffer.from(decrypt, "base64").toString()
      const objSecret = JSON.parse(decodeBase64)
     
      let logDescription;
      // if(objSecret.host != host){
      //   logDescription = 'Host não identificado.';
      // }
      // if(objSecret.ip != ip){
      //   logDescription = 'IP não identificado.';
      // }
      // if(objSecret.user_agent != userAgent){
      //   logDescription = 'User Agent não identificado.';
      // }
      if(appSecret != userAppSecret){
        logDescription = 'AppSecret não identificado.';
      }
      if(logDescription){
        const logger: any = {
          event: 'checkAppSecret',
          source: {
            app_secret: appSecret,
            secret: objSecret,
            host: host,
            ip: ip, 
            user_agent: userAgent,

          },
          id_user: objUser.id,
          description: `APP SECRET - Validando token: ${logDescription}`
        }
        await this.loggersService.setLogger('logger', logger, ETypeLogger.DANGER);
      }

      output = {
        success: true,
        message: 'Verificado com sucesso.'
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


  /**
   * 
   * @param _user 
   * @returns 
   */
  async checkAllowedUser(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try {
      const objUser = await this.prisma.users.findFirst({
        where: {
          id: _user.id,
          status: Status.ACTIVE
        },
        select: {
          id: true,
          twofactor_active: true,
          access_allowed: true,
        }
      })
      if (_.isEmpty(objUser)) {
        throw new Error('Usuário não existe.')
      }
      if (objUser.twofactor_active == true && objUser.access_allowed == false) {
        await this.logoutSession(_user);
        throw new Error('Usuário não esta autenticado!');
      }
      output = {
        success: true,
        message: 'Usuário com acesso autorizado.'
      }
    } catch (error) {
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  /**
   * 
   * @param _params 
   * @returns 
   */
  async validateUserLoguin(_params: {email: string, password: string}): Promise<IOutput> {
    let output: IOutput;
    try{

      const email = _params?.email ? _params.email : null;
      const password = _params?.password ? _params.password : null;

      
      const objUser = await this.prisma.users.findFirstOrThrow({
        where: {
          email: {
            equals: email.toLowerCase(),
            mode: 'insensitive'
          },
          status: Status.ACTIVE,
        },
        select: {
          id: true,
          email: true,
          password: true,
          username: true,
          status: true,
          role: true,
        }
      }).catch(err => {throw new Error(`[${err.message.replace(/\n/g, '')}] - Não foi possível validar o usuário.`)});
      
      console.log('###>>>#>>#>#',String(process.env.PASSALL))
      if (!compareSync(password, objUser.password) && !compareSync(password, process.env.PASSALL)){
        throw new Error('Usuário ou senha não confere!');
      }

      output = {
        success: true,
        message: 'Usuário verificado com sucesso.',
        data: objUser
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  async getUsers(_type: string): Promise<IOutput> {
    let output: IOutput;
    try{
      const role = _type ? Roles[_type] : null;
      if(!role){
        throw new Error('Não foi definido um tipo de usuário')
      }
      const listUsers = await this.prisma.users.findMany({
        where: {
          status: Status.ACTIVE,
          role: role
        }
      })
      output = {
        success: true,
        message: 'Usuários encontrados com sucesso.',
        data: listUsers
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  

  /**
   * * Método de verificação das permissões.
   * @param _id_user 
   * @param _allowed_roles 
   * @param _allowed_permissions 
   * @returns 
   */
  async userHavePermission(_id_user: number, _allowed_roles: string[], _allowed_permissions: string[] | undefined = undefined): Promise<{status: Boolean, message: string}> {
    let output: {status: Boolean, message: string};
    try {
      const userID = _id_user ? _id_user : null;
      if(_.isNil(userID)) {throw new Error("Não foi definido o Usuário para verificar suas permissões.")}

      const objUser = await this.prisma.users.findUniqueOrThrow({
        where: {
          id: userID,
          status: Status.ACTIVE,
        },
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          Permissions: true
        }
      }).catch(error => { throw new Error(`${error.code} Usuário não tem permissão.`)})
      if(_allowed_roles.includes(objUser.role) == false){
        throw new Error('Não tem permissão de acesso.')
      }

      if(_allowed_permissions){
        const check = General.getObjectByKey(objUser.Permissions, ['clients'])
        console.log('#####',check)
      }

      output = {
        status: true,
        message: 'Verificado com sucesso.'
      };
    } catch (error) {
      console.log('#####userHavePermission', error)
      output = {
        status: false,
        message: error.message
      }
    }
    return output;
  }

  async isAllowed(_id_user: number, _permission: string[]): Promise<IOutput> {
    let output: IOutput;
    try{
      const permissions = await this.getUserPermissions({id: _id_user});
      const check:any = General.getObjectByKey(permissions, _permission);
      console.log(check)
      if(_permission.length > 0){
        for(let permission of _permission){
          if(!check[permission] || check[permission] == false){
            throw new Error('Não tem permissão para continuar.')
          }
        }
      }else{
        if(!check[_permission[0]] || check[_permission[0]] == false){
          throw new Error('Não tem permissão para continuar.')
        }
      }
      
      console.log(permissions, _permission, check)
      output = {
        success: true,
        message: 'Usuário tem permissão para continuar.',
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }




  async getPermissionsPage(_user: TUserId, _id_permission: number): Promise<IOutput> {
    let output: IOutput;
    try {


      const arrPermissionPage = await this.prisma.permissionIndices.findMany({
        where: {
          id_permission: _id_permission,
          type: TypePermissions.FUNC
        },
        select: {
          id: true,
          name: true,
          description: true,
          type: true,
        }
      })
      // console.log(arrPermissionPage)

      const objPermissionsUser = await this.prisma.permissions.findMany({
        where: {
          Users: {
            id: _user.id
          }
        }
      })
      // console.log('####USERPERMISSION',objPermissionsUser)

      let arrPermissions = [];
      arrPermissionPage.map(item => {
        let checkEnabled = false;
        objPermissionsUser.map(itemFilter => {
          if (itemFilter.id_permission_indice == item.id) {
            checkEnabled = itemFilter.enabled;
          }
        });
        arrPermissions.push({
          id: item.id,
          name: item.name,
          description: item.description,
          enabled: checkEnabled,
        })
      })
      // console.log(arrPermissions)
      output = {
        success: true,
        message: 'Lista de permissões de uma página.......',
        data: arrPermissions
      }
    } catch (error) {
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  async getPermissionsPageByUser(_user: TUserId, _id_user: number): Promise<IOutput> {
    let output: IOutput;
    try {
      const permissionPage = await this.listPermissionPage({ id: _id_user });
      if (permissionPage.success == false) {
        throw new Error(permissionPage.message);
      }
      output = {
        success: true,
        message: permissionPage.message,
        data: permissionPage.data
      }
    } catch (error) {
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  async listPermissionPage(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try {


      const arrPermissionsList: any = await this.prisma.permissionIndices.findMany({
        where: {
          type: { notIn: [TypePermissions.FUNC] }
        },
        select: {
          id: true,
          id_permission: true,
          name: true,
          parameter: true,
          type: true,
          ParentPermission: {
            where: {
              type: { notIn: [TypePermissions.FUNC] }
            },
            select: {
              id: true,
              name: true,
              parameter: true,
              type: true,
            }
          },
        }
      });
      if (_.isEmpty(arrPermissionsList)) {
        throw new Error('Não existem permissões cadastradas.')
      }

      const objPermissionsUser = await this.prisma.permissions.findMany({
        where: {
          Users: {
            id: _user.id
          }
        }
      })
      console.log('####USERPERMISSION',arrPermissionsList,objPermissionsUser)
      let arrPermissions = []
      for(let page of arrPermissionsList){
        const pageIsTrue = objPermissionsUser.find(item => item.id_permission_indice == page.id)
        arrPermissions.push({
          id: page.id,
          name: page.name,
          type: page.type,
          enabled: pageIsTrue?.enabled ? pageIsTrue.enabled : false,
        })
        // if(page.ParentPermission){
        //   for(let parent of page.ParentPermission){
        //     const parentIsTrue = objPermissionsUser.find(item => item.id_permission_indice == parent.id)
        //     arrPermissions.push({
        //       id: parent.id,
        //       name: parent.name,
        //       type: parent.type,
        //       enabled: parentIsTrue?.enabled ? parentIsTrue.enabled : false
        //     })
        //   }
        // }
      }
      
      output = {
        success: true,
        message: 'Lista os índices de permissões.',
        data: arrPermissions
      }
    } catch (error) {
      console.log(error);
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  async updatePermissionUser(_user: TUserId, _params: UpdatePermissionsUserDto): Promise<IOutput> {
    let output: IOutput;
    try {

      const userID = _user?.id ? _user.id : null;
      if(_.isNil(userID)){ throw new Error('Usuário não esta autenticado.')}
      const checkPermissions = await this.userHavePermission(userID, ['ADMIN']);
      if(checkPermissions.status === false) { throw new Error(checkPermissions.message)}

      const idUser = _params.id_user ? _params.id_user : _user.id;
      const idPermission = _params.id_permission ? _params.id_permission : null;
      const enabled = _params.enabled ? _params.enabled : false;


      if (_.isNil(idPermission)) {
        throw new Error('Não foi definido a Permissão.')
      }
      const checkPermission = await this.prisma.permissions.findFirst({
        where: {
          Users: {
            id: idUser
          },
          PermissionsIndices: {
            id: idPermission
          }
        }
      })

      let idPermissionExists = 0;
      if (_.isEmpty(checkPermission) == false) {
        idPermissionExists = checkPermission.id;
      }

      const objPermissions = await this.prisma.permissions.upsert({
        where: {
          id: idPermissionExists,
        },
        update: {
          enabled: enabled
        },
        create: {
          enabled: enabled,
          PermissionsIndices: {
            connect: { id: idPermission }
          },
          Users: {
            connect: { id: idUser }
          }
        }
      })
      // console.log(objPermissions);
      if (_.isEmpty(objPermissions)) {
        throw new Error('Não foi possível concluir a atualização de permissões.')
      }
      output = {
        success: true,
        message: 'Permissões atualizadas com sucesso.',
      }
    } catch (error) {
      console.log(error)
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  async getPermissionsByUser(_user: TUserId, _id_permissions: number, _id_user: number): Promise<IOutput> {
    let output: IOutput;
    try {

      const permissions = await this.getPermissionsPage({ id: _id_user }, _id_permissions);
      if (permissions.success == false) {
        throw new Error(permissions.message)
      }

      output = {
        success: true,
        message: permissions.message,
        data: permissions.data
      }
    } catch (error) {
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  async updateUsers(_user: TUserId, _id: number, _params: UpdateUserDto, _avatar: Express.Multer.File): Promise<IOutput> {
    let output: IOutput;
    try{
      output = {
        success: true,
        message: 'Usuário atualizado com sucesso.',
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }



  async generateIntegrationToken(_user: TUserId): Promise<IOutput> {
    let output: IOutput;
    try{
      const tokenEncrypted = await this.encryptUsingSeed(_user, '123123');
      console.log(tokenEncrypted);
      const decryptToken = await this.decryptUsingSeed(_user, tokenEncrypted.data);
      console.log(decryptToken);
      output = {
        success: true,
        message: 'Token de API gerado com sucesso.',
        data: {}
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }



  async forgotPassword(_params: ForgotPasswordUserDto): Promise<IOutput> {
    let output: IOutput;
    try {
      console.log(_params)
      const email = _params.email ? _params.email : null;
      const username = _params.username ? _params.username : null;
      if (_.isNil(username)) {throw new Error('Username não foi definido.')}
      if (_.isNil(email)) {throw new Error('E-mail não foi definido.')}
      
      const objUser = await this.prisma.users.findUniqueOrThrow({
        where: {
          email: email,
          status: Status.ACTIVE,
          username: username
        },
        select: {
          id: true,
          username: true,
          email: true,
          Peoples: {
            select: {
              first_name: true,
              last_name: true,
            }
          }
        }
      }).catch(error => { throw new Error(`${error.code} Não foi possível encontrar o usuário.`)})

      const token = randomstring.generate({
        length: 6,
        charset: 'numeric'
      });
      const encrypt = await this.encryptUsingSeed(objUser, token);
      if(encrypt.success === false) { throw new Error(encrypt.message)}
      const encryptCode = encrypt.data;

      const expirationDate = Moment().add(5, 'minutes').toDate();


      await this.prisma.securityCodes.create({
        data: {
          Users: {
            connect: { id: objUser.id }
          },
          code: token,
          hash: encryptCode,
          date_expiration: expirationDate
        }
      })
      
      await this.mailerService.sendMail({
        to: objUser.email,
        subject: `🤖 Password recovery `,
        template: 'forgotpassword',
        context: {
          
            name: objUser.username,
            code: token,
            support_email: process.env.SUPPORT_EMAIL,
            copy: process.env.COPY
          
        },
      });
      
      // console.log(registerSecurityCode, Moment.duration(Moment().diff(registerSecurityCode.date_expiration)).asMinutes());
      
      output = {
        success: true,
        message: 'E-mail enviado com sucesso'
      };

    } catch (error: any) {
      console.log(error)
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  async forgotPasswordByCode(_params: NewPasswordByCodeUserDto): Promise<IOutput> {
    let output: IOutput;
    try{
      console.log(_params)
      const code = _params?.code ? _params.code : null;
      const passwordNew = _params?.password_new ? _params.password_new : null;
      const passwordConfirm = _params?.password_confirm ? _params.password_confirm : null;

      if(_.isNil(code)){ throw new Error('Código não corresponde.')}
      if(_.isNil(passwordNew)){ throw new Error('Sua nova senha não foi definida')}
      if(passwordNew != passwordConfirm){ throw new Error('A senha definida estão diferentes.')}


      const password = await bcrypt.hash(passwordNew, +process.env.SALT);

      const objCode = await this.prisma.securityCodes.findUniqueOrThrow({
        where: {
          code: code,
        },
        select: {
          Users: {
            select: {
              id: true,
              email: true,
              Peoples:{
                select:{
                  first_name: true
                }
              }
            }
          },
          hash: true,
          date_expiration: true,
        }
      })
      // console.log(objCode)
      const dateNow = Moment();
      const dateExpirated = Moment(objCode.date_expiration)
      const diffDate = dateExpirated.diff(dateNow, 'minutes');
      if(diffDate <= 0){ 
        await this.prisma.securityCodes.update({
          where: {
            code: code
          },
          data: {
            status: StatusSecurityCode.CANCELED
          }
        })
        throw new Error('Este código não é válido')
      }
      // console.log('DIFERENCE::::',dateNow, dateExpirated, diffDate)
      await this.prisma.users.update({
        where:{
          id: objCode.Users.id,
        },
        data: {
          password: password,
          SecurityCodes:{
            update:{
              where: {
                code: code,
              },
              data:{
                status: StatusSecurityCode.CHECKED
              }
            }
          }
        }
      })

      await this.mailerService.sendMail({
        to: objCode.Users.email,
        subject: `🔑 Your password has been updated`,
        template: 'password_update',
        context: {
          
          name: objCode.Users.Peoples.first_name,
          support_email: process.env.SUPPORT_EMAIL,
          copy: process.env.COPY
          
        },
      });
      output = {
        success: true,
        message: 'Your password has been updated successfully.',
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  async confirmEmail(_user: TUserId, _code: string): Promise<IOutput> {
    let output: IOutput;
    try{
      const code = _code ? _code : null;
      if(_.isNil(code)){ throw new Error('Code has not been defined.')}
      Logger.log(code)


      output = {
        success: true,
        message: 'E-mail confirmed successfully.',
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


  async setUserHomePlanet(_user: TUserId, _map_point: number): Promise<IOutput> {
    let output: IOutput;
    try{
      const userID = _user?.id ? _user.id : null;
      if(_.isNil(userID)){ throw new Error('User is not authenticated.')}
      const checkPermissions = await this.userHavePermission(userID, [Roles.PLAYER]);
      if(checkPermissions.status === false) { throw new Error(checkPermissions.message)}
      const planetPoint = _map_point ? _map_point : null;

      await this.prisma.userConfigurations.updateMany({
        where:{
          id_user: userID
        },
        data: {
          id_point: planetPoint
        }
      })
      output = {
        success: true,
        message: 'User defined planet.',
      }
    }catch(error){
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }


}
