import axios from 'axios';
import * as crypto from 'crypto';


interface IParseName {
  first_name: string,
  last_name: string,
}

type TConfigQRCode = {
  icon: string;
  width: number;
  image_width: number;
  color: { dark: string; light: string; }
}

export class General {

  static parseDate(_date: string, config?: {utc?: boolean}): Date {
    const date = new Date(String(_date));
    const isUTC = config.utc ? true : false;
    let utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDay()))
    const newDate = isUTC ? utcDate.toUTCString() : utcDate.toISOString();
    
    return new Date(newDate);
  }


  static async getIPInfo(_ip: string): Promise<any> {
    // const responseIP = await this.httpService.axiosRef.get(`http://ip-api.com/json/${objAppSecret.ip}`);
    const responseIP = await axios.get(`http://ip-api.com/json/${_ip}`);
    const dataIP = responseIP.data;
    const formattedData = {
        Country: `${dataIP.country} (${dataIP.countryCode})`,
        City: dataIP?.city,
        Continent: `${dataIP.country})`,
        Zip: dataIP?.zip,
        RegionName: dataIP?.regionName,
        ISP: dataIP?.isp,
        Coordinates: `${dataIP.lat} (lat) / ${dataIP.lon} (long)`,
        Time: `${dataIP.timezone}`,
        CountryCode: dataIP.countryCode,
        ipAddress: _ip,
        hostname: _ip,
        provider: dataIP.org,
        ASN: dataIP.as,
        lat: String(dataIP.lat),
        lon: String(dataIP.lon)
    };
    return formattedData;
  }


  static isIP(_ip: string): boolean{
    const word = '[a-fA-F\\d:]';
    const boundry = options => options && options.includeBoundaries
        ? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))`
        : '';
    const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
    const v6segment = '[a-fA-F\\d]{1,4}';
    const v6 = `
    (?:
    (?:${v6segment}:){7}(?:${v6segment}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    (?:${v6segment}:){6}(?:${v4}|:${v6segment}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
    (?:${v6segment}:){5}(?::${v4}|(?::${v6segment}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
    (?:${v6segment}:){4}(?:(?::${v6segment}){0,1}:${v4}|(?::${v6segment}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
    (?:${v6segment}:){3}(?:(?::${v6segment}){0,2}:${v4}|(?::${v6segment}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
    (?:${v6segment}:){2}(?:(?::${v6segment}){0,3}:${v4}|(?::${v6segment}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
    (?:${v6segment}:){1}(?:(?::${v6segment}){0,4}:${v4}|(?::${v6segment}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
    (?::(?:(?::${v6segment}){0,5}:${v4}|(?::${v6segment}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
    )(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
    `.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

    return new RegExp(`(?:^${v4}$)|(?:^${v6}$)`).test(_ip);
    // const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
    // const v4exact = new RegExp(`^${v4}$`);
    // const v6exact = new RegExp(`^${v6}$`);

    // const ipChecker = options => options && options.exact
    //     ? v46Exact
    //     : new RegExp(`(?:${boundry(options)}${v4}${boundry(options)})|(?:${boundry(options)}${v6}${boundry(options)})`, 'g');

    // ipChecker.v4 = options => options && options.exact ? v4exact : new RegExp(`${boundry(options)}${v4}${boundry(options)}`, 'g');
    // ipChecker.v6 = options => options && options.exact ? v6exact : new RegExp(`${boundry(options)}${v6}${boundry(options)}`, 'g');
  }

  static isURL(_url: string): boolean {
    const regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(regex .test(_url)) {
      return true;
    }else{
      return false;
    }
  }
  static createObjectByString(string, valor) {
    let keys = string.split("__"); // Divide a string em um array usando o separador underline
    let objeto = {};
    let tempObjeto = objeto;
  
    for (let i = 0; i < keys.length - 1; i++) {
      let chave = keys[i];
      tempObjeto[chave] = {};
      tempObjeto = tempObjeto[chave];
    }
  
    tempObjeto[keys[keys.length - 1]] = valor;
  
    return objeto;
  }


  static async generatePeople(){
    let config = {
      method: 'POST',
      url: 'https://www.4devs.com.br/ferramentas_online.php',
      headers:  {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data:{
        acao: 'gerar_pessoa',
        sexo: 'I',
        pontuacao: 'S',
        idade: 0,
        cep_estado: '',
        txt_qtde: 1,
        cep_cidade: ''
      }
    };
    let output = await axios(config)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        throw new Error(error);
    });
    return output;
  }

  
  static isValidDocument(_document: string) {
    if (typeof _document !== 'string') return false
    _document = _document.replace(/[^\d]+/g, '')
    if(_document.length != 11 && _document.length != 14)
      return false
    if(_document.length == 11){
      if(/0{11}/.test(_document))
        return false
      const documentNumber = _document.split('').map(el => +el)
      const rest = (count) => (documentNumber.slice(0, count - 12)
        .reduce((soma, el, index) => (soma + el * (count - index)), 0) * 10) % 11 % 10
      return rest(10) === documentNumber[9] && rest(11) === documentNumber[10]  
    }else if(_document.length == 14){
      if(/0{14}/.test(_document))
        return false
      const documentNumber = _document.split('').map(el => +el)
      const b = [ 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 ]

      for (var i = 0, n = 0; i < 12; n += documentNumber[i] * b[++i]);
      if(documentNumber[12] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false

      for (var i = 0, n = 0; i <= 12; n += documentNumber[i] * b[i++]);
      if(documentNumber[13] != (((n %= 11) < 2) ? 0 : 11 - n))
        return false

    return true
    }else{
      return false;
    }
  }

  static existValueInEnum(type: any, value: any): boolean {
    return Object.keys(type).filter(k => isNaN(Number(k))).filter(k => type[k] === value).length > 0;
  }
  /**
   * Filtra um Enum para retornar apenas os valores necessários.
   *
   * @static
   * @template T
   * @param {T} _enum
   * @param {*} _value
   * @param {boolean} [_remove=true]
   * @return {*} 
   * @memberof General
   */
  static listEnum<T>(_enum: T, _value: any, _remove: boolean = true): any {
    return Object.keys(_enum).filter((k: any) => {
      if (_remove == true && !_value.includes(k)) {
        return _enum[k]
      } else if (_remove == false && _value.includes(k)) {
        return _enum[k]
      }
    });
  }

  static getObjectByKey(data, keys, result = {}) {
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
        result = this.getObjectByKey(data[k], keys, result);
    }
    return result;
  }


  static maskString(_value: string, _mask: string) {
    if (!_value || !_mask) return '--';
    let i = 0;
    const text = _value.toString();
    return _mask.replace(/#/g, (_) => text[i++]).replace(/undefined/g, '')
  }

  static generateUnique(_size: number = 12) {
    var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   

    if (_size > max) {
      return this.generateUnique(max) + this.generateUnique(_size - max);
    }

    max = Math.pow(10, _size + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    const result = String(number).substring(add);
    return result == '00' ? '0' : result;
  }

  locateByCurreny(_currency: string) {
    const locales = {
      pt_BR: ['BRL'],
      pt: ['']
    }
  }
  
  static parseMoney(_amount: number, _currency: string = 'USD', _min_digits: number = 2, _max_digits: number = 2, _locales: string = 'en_US', _style: string|any = 'currency'): string {
    let output: string;
    try {
      const locales = {
        pt_BR: { currency: '' }
      }
      const formatter = new Intl.NumberFormat(_locales, {
        style: _style,
        currency: _currency,
        currencyDisplay: 'symbol',
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: _min_digits, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: _max_digits, // (causes 2500.99 to be printed as $2,501)
      });
      output = formatter.format(_amount);
    } catch (error: any) {
      output = error.message;
    }
    return output;
  }


  static encrypt(_text: string, _seed: string) {
    const iv = crypto.randomBytes(16);
    const salt = crypto.randomBytes(64);
    const key = crypto.pbkdf2Sync(_seed, salt, 2145, 32, 'sha512');
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);

    const encrypted = Buffer.concat([
      cipher.update(_text, 'utf-8'),
      cipher.final(),
    ])
    const tag = cipher.getAuthTag();

    return Buffer.concat([salt, iv, tag, encrypted]).toString('base64');
  }

  static decrypt(_text: string, _seed: string){
    const bData = Buffer.from(_text, 'base64')

    const salt = bData.slice(0, 64);
    const iv = bData.slice(64, 80);
    const tag = bData.slice(80, 96);
    const text = bData.slice(96);
    const key = crypto.pbkdf2Sync(_seed, salt, 2145, 32, 'sha512');

    const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
    decipher.setAuthTag(tag);

    const decryptedText = decipher.update(text) + decipher.final('utf-8')
    return decryptedText;
  }

  static parseNumber(number: number, decimal: number): number{
    const og = Math.pow(10, decimal);
    return Math.trunc(number * og) / og;
  }

  static parseName(_name: string): IParseName {
    let output: IParseName = { first_name: '', last_name: '' };
    try {
      if (_name) {
        const arrName: any = _name.split(" ");
        const totalName = arrName.length;
        let nameBeforeLast = '';
        let lastName = '';
        let firstName = '';
        if (totalName >= 3) {
          nameBeforeLast = arrName[totalName - 2];
          if (nameBeforeLast.length <= 3) {
            lastName = `${nameBeforeLast} ${arrName[totalName - 1]}`;
            arrName.pop();
            arrName.pop();
          } else {
            lastName = arrName[totalName - 1];
            arrName.pop();
          }
          arrName.forEach((name) => {
            if (firstName == '')
              firstName = `${name}`;
            else
              firstName = `${firstName} ${name}`;
          })
          output = {
            first_name: firstName.trim(),
            last_name: lastName.trim()
          }
        } else {
          output = {
            first_name: (arrName[0] ? arrName[0].trim() : arrName[0]),
            last_name: (arrName[1] ? arrName[1].trim() : null)
          }
        }

      }
      return output;

    } catch (error: any) {
      console.log('####GENERAL#### parseName:', error);
    }
    return output;
  }
}