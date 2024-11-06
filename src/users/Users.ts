import { Logger } from "@nestjs/common";

export default class Users {

  user: Partial<TUser>;


  // id: number;
  // name: string;
  // username: string;
  // email: string;
  // role: string;
  // twofactor: string;
  // Peoples: TPeoples;

  constructor(_user: Partial<TUser>) {
    this.user = _user
  }

  defineUserParameters(_parameters: string[] | undefined): Partial<TUser | TUser[]> {
    let users: Partial<TUser | TUser[]>;
    if(Array.isArray(this.user)){
      let listUser:Partial<TUser[]>=[];
      for(let user of this.user){
        if(_parameters){
          const keys = Object.keys(user);
          console.log(user)
          const params = this.findParameterByKey(user, _parameters) as TUser;
          console.log('###',_parameters,params)
          if(params){
            console.log('#### 1')
            for(let param of user){
              user[param] = params.hasOwnProperty(param) ? user[param] : null;
            }
          }else{
            console.log('#### 2')
            for(let param of _parameters){
              user[param] = null;
            }
          }
        }
        listUser.push(user);
      }
      users = listUser;
    }else{
      users = _parameters ? this.findParameterByKey(this.user, _parameters) : this.user;
    }
    return users;
  }

  getUserAuthentication(): TUserAuthenticator{
    let user: TUserAuthenticator;
    if(Array.isArray(this.user)){
      this.user = this.user[0];
    }
    user = {
      id: this.user.id,
      name: `${this.user.Peoples.first_name} ${this.user.Peoples.last_name}`,
      username: this.user.username,
      email: this.user.email,
      role: this.user.role,
      seed: this.user.seed,
      twofactor: this.user.twofactor,
    }
    
    return user;
  }

  getUserAccessToken(): TUserAccessToken {
    let user: TUserAccessToken;
    if(Array.isArray(this.user)){
      this.user = this.user[0];
    }
    user = {
      access_token: this.user.access_token,
      access_allowed: this.user.access_allowed,
      app_secret: this.user.app_secret
    }
    
    return user;
  }

  getPermissions(_permissions: TPermissionMenu[]): TUserPermissions{
    if(Array.isArray(this.user)){
      this.user = this.user[0];
    }
    const user: Partial<TUser> = this.user;
    const permissions: TPermissions[] = user.Permissions ? user.Permissions : null;
    if(!permissions) return {menu: null, pages: null};
    const indiceMenu = _permissions.filter(indice => ['MENU', 'SUBMENU', 'FUNC'].includes(indice.type));

    let output: TUserPermissions = {
      menu: null,
      pages: null
    };
    try{
      let objMenu = {};
      let objFunc = {};
      if(indiceMenu){
        indiceMenu.map(menu => {

          let enabled = false;
          permissions.map(permission => {
            if(permission.id_permission_indice == menu.id){
              enabled = permission.enabled
            }
          })
          if(menu.type == 'FUNC'){
            // console.log('##>>>###>>>',menu, objFunc)
            if(menu?.ChildOf && objFunc.hasOwnProperty(menu.ChildOf.parameter)){
              objFunc[menu.ChildOf.parameter] = Object.assign(objFunc[menu.ChildOf.parameter], {[menu.parameter]: enabled});
              // objFunc = Object.assign(objFunc, { [menu.ChildOf.parameter]: objFunc[menu.ChildOf.parameter] });
              // objFunc[menu.ChildOf.parameter] = typeof objFunc[menu.ChildOf.parameter] === 'object' ? Object.assign(objFunc[menu.ChildOf.parameter], {[menu.parameter]: enabled}) : {[menu.parameter]:  enabled};
            }else{
              objFunc = Object.assign(objFunc, {[menu.ChildOf.parameter]: {[menu.parameter]: enabled} });
            }
          }else{
            // if(menu?.ChildOf && objMenu.hasOwnProperty(menu.ChildOf.parameter)){
            //   objMenu[menu.ChildOf.parameter] = typeof objMenu[menu.ChildOf.parameter] === 'object' ? Object.assign(objMenu[menu.ChildOf.parameter], {[menu.parameter]: enabled}) : {[menu.parameter]:  enabled};
            // }else{
            //   objMenu = Object.assign(objMenu, {[menu.parameter]: enabled});
            // }
            objMenu = Object.assign(objMenu, {[menu.parameter]: enabled});
          }

        })
      }
      // console.log({
      //   menu: objMenu,
      //   pages: objFunc
      // });
      output = {
        menu: objMenu,
        pages: objFunc
      }
      // Logger.log(output)
    }catch(error){
      console.log(error)
    }
    
    return output
  }







  /**
   * Método restrito que retorna apenas os objetos necessários dentro de um conjunto de objetos.
   * 
   * @param data 
   * @param keys 
   * @param result 
   * @returns 
   */
  private findParameterByKey(data, keys, result = {}) {
    for (let k of Object.keys(data)) {
      if (keys.includes(k)) {
        result = Object.assign({}, result, {
          [k]: data[k]
        });
        continue;
      }
      if (
        data[k] &&
        typeof data[k] === "object" &&
        Object.keys(data[k]).length > 0
      )
        result = this.findParameterByKey(data[k], keys, result);
    }
    return result;
  }
}

export type TBlockUser = {
  id: number,
  observation: string,
  block: boolean
}

export type TUserId = {
  id: number
}

export type TUser  = {
  id: number,
  username: string,
  email: string,
  role: string,
  seed: string,
  twofactor: boolean,
  app_secret?: string,
  Peoples?: TPeoples,
  Permissions?: TPermissions[]
} & TUserAccessToken

export type TUserAuthenticator = {
  id: number,
  name: string,
  username: string,
  email: string,
  role: string,
  seed: string,
  twofactor: boolean,
} 

type TPeoples = {
  first_name: string,
  last_name: string,
}

type TPermissions = {
  id_permission_indice: number,
  enabled: boolean,
}

type TPermissionMenu = {
  id: number,
  name: string,
  parameter: string,
  type: string,
  standard: boolean,
  ChildOf?: TPermissionsMenuItem
}

type TPermissionsMenuItem = {
  id: number,
  name: string,
  parameter: string,
  standard: boolean,
}
export type TUserAccessToken = {
  access_token: string,
  access_allowed: boolean,
  app_secret: string
}

export type TUserPermissions = {
  menu: any,
  pages: any,
}