import { HttpException, HttpStatus, Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';
import * as _ from 'lodash';
import { General } from 'src/_helpers/general.helper';
import { UsersService } from 'src/users/users.service';
import { ETypeLogger, LoggerProps, LoggersService } from 'src/loggers/loggers.service';

export interface RequestWithAppSecret extends Request {
    appSecret: string;
   }

@Injectable()
export class AppSecretMiddleware implements NestMiddleware {
    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
        private readonly loggersService: LoggersService,
    ) { }

    async use(req: RequestWithAppSecret, res: Response, next: NextFunction) {

        // Logger.log(req.body)
        const ipAddress = _.toString(req.headers['x-forwarded-for'] ?? null);
        const host = _.toString(req.headers['host'] ?? null);
        const originHost = _.toString(req.headers['origin'] ?? null);
        // const refererHost = _.toString(req.headers['referer'] ?? null);
        const userAgent = _.toString(req.headers['user-agent'] ?? null);
        const authorization = req.headers.authorization ?? null;
        // console.log('$$$$$######$$$',req.headers);
        const jwt: any = authorization ? authorization.split(' ')[1] : null;
        // console.log(jwt)
        if(['117.53.45.235','201.16.165.128','188.166.218.145','188.166.218.145','15.237.181.6','170.64.210.61','78.153.140.224','78.153.140.177','103.187.190.74','23.239.9.113','45.79.187.182','159.65.111.64','68.183.193.242','103.133.107.41','45.79.75.5','194.233.95.141','50.116.3.165','20.221.204.54','91.92.245.105','66.249.66.86','185.180.143.141','198.199.111.205','107.170.252.62','165.154.182.53','137.184.222.94','194.233.65.81','18.171.171.100','165.154.163.113','47.128.222.128','85.239.33.6','52.81.239.40','185.142.236.41','45.141.215.142','45.141.215.142','185.180.143.11','91.92.249.130','147.182.249.174','35.216.181.8','185.134.22.149','159.223.138.47','71.6.199.23','20.39.184.116','172.104.4.17','167.99.148.129','152.32.247.22','185.180.143.140','185.180.143.81','170.130.204.114','165.154.118.215','185.180.143.49','52.203.60.83','185.180.140.6','34.76.96.55','198.199.108.7','47.90.254.226','104.234.204.32','45.32.156.104','103.241.67.159','103.187.190.4','5.188.86.130','184.105.139.70','64.62.197.219','167.94.138.124','195.170.172.128','167.94.145.58','167.99.187.73','107.170.248.45','91.92.253.77','159.196.68.222','124.221.235.112','35.174.153.89','34.227.178.191','44.212.31.230','162.142.125.216','5.196.102.68','20.90.183.247','192.241.222.97','173.199.118.12','20.51.227.173','195.140.227.163','18.236.216.39','161.35.190.31','219.92.246.53','162.243.128.43','192.241.233.50','107.170.229.48','107.170.231.23','65.49.1.83','65.49.1.81','65.49.1.88','74.82.47.2','65.49.1.80','162.142.125.221','162.243.141.14','109.237.96.124','107.170.243.29','167.94.146.52','172.203.241.128','78.153.140.30','52.38.104.126','3.67.95.169','167.248.133.183','104.156.155.31','198.199.110.78','107.170.248.44','47.90.166.158','47.74.90.127','167.248.133.36','45.129.14.100','34.212.27.121','18.206.224.134','87.236.176.37','192.241.223.4','77.90.185.222','91.92.249.164','78.153.140.219','78.153.140.221','8.209.68.21','207.244.241.167','207.244.241.167','162.243.145.46','192.241.201.73','52.229.89.153','185.179.218.164','34.219.86.124','134.122.6.34','68.178.222.173','5.196.102.67','192.241.207.87','138.246.253.24','3.236.210.238','161.35.176.95','179.43.170.218','4.233.218.55','35.177.175.249','34.239.45.142','185.216.71.116','162.243.131.14','162.142.125.11','165.154.49.137','123.254.109.89','45.77.238.52','2.59.254.135','159.65.176.48','18.130.224.8','18.135.100.99','45.55.39.174','198.199.101.72','192.241.195.40','109.237.98.197','152.32.128.214','47.89.137.11','51.210.223.79','167.94.138.51','198.199.94.11','63.251.232.92','3.77.43.241','157.245.44.208','198.199.106.120','167.94.146.53','192.227.173.18','162.243.152.5','162.142.125.226','185.180.143.188','54.190.52.194','167.94.138.33','103.102.231.4','167.248.133.125','83.97.73.87','167.94.138.36','128.14.239.217','65.49.1.104','65.49.1.103','167.248.133.38','180.149.125.168','185.180.143.48','209.38.228.206','45.33.55.190','162.243.132.15','167.94.146.60','31.172.80.202','192.241.224.28','198.199.107.20','20.218.81.171','167.248.133.185','174.138.88.106','74.82.47.5','111.7.96.174','141.98.10.96','54.36.112.44','54.235.20.33','64.176.193.192','51.89.5.185','195.62.14.94','109.237.98.226','51.89.5.185','141.95.74.78','109.237.97.180','135.125.218.67','3.99.135.196'].includes(ipAddress)){
          Logger.error('################################ VAZAAAAAAAAA!!!!!')
          const statusCode = [200,301,500,502,504,401,400,403,404]
          res.redirect(statusCode[Math.floor((Math.random()*statusCode.length))],`http://www.dpgraph.com`);
        }else{
          // const checkIP = await ipInfo.getIPInfo.isIP(ipAddress);
          Logger.error('################################1')
          const checkIP = General.isIP(ipAddress);
          
          // console.log('####IIPPPPP:::', checkIP, ipAddress, userAgent, jwt);
          // if(userAgent != 'ELB-HealthChecker/2.0' && checkIP == false){
          //   Logger.error('################################2')
          //   throw new HttpException({ success: false, message: 'Sua conexão não é válida.' }, HttpStatus.UNAUTHORIZED);
          // }
          // if(checkIP){
          //   const findIP = await General.getIPInfo(ipAddress);
          //   console.log('####', findIP);
          // }
          if(_.isNil(jwt) == false){
            Logger.error('################################3')
            // console.log('######@#@#@#@#@#@', _.isNil(jwt), jwt)
            const jwtDecode:any = await this.jwtService.decode(jwt);
            const params = {
              app_secret: jwtDecode.app_secret,
              host: originHost ? originHost : host,
              ip: ipAddress,
              user_agent: userAgent,
              ipInfo: req['ip-info']
            }
            // console.log(req)
            const verifyAppSecret = await this.usersService.checkAppSecret({id: jwtDecode.sub}, params);
            // console.log(verifyAppSecret)
            if(verifyAppSecret.success == false){
              Logger.error('################################4')
              const logger: LoggerProps = {
                event: 'RequestWithAppSecret',
                source: {
                  headers: req.headers,
                  jwt: jwt,
                  app_secret: jwtDecode.app_secret,
                  host: host,
                  ip: ipAddress, 
                  user_agent: userAgent,
                  ipInfo: req['ip-info']
                },
                id_user: jwtDecode.sub,
                description: `MIDDLEWARE APP SECRET - ${verifyAppSecret.message}`
              }
              await this.loggersService.setLogger('logger',logger, ETypeLogger.DANGER);
              throw new HttpException({ success: false, message: verifyAppSecret.message }, HttpStatus.UNAUTHORIZED);
            }
            // console.log('.........',jwtDecode ,verifyAppSecret)
          }

          const secret: any = await this.configService.get<string>('systems');
          // console.log(">>>>>", secret)
          const objJsonStr = JSON.stringify({
              ip: ipAddress,
              host: originHost ? originHost : host,
              user_agent: userAgent,
              ipInfo: req['ip-info']
          });
          const objJsonB64 = Buffer.from(objJsonStr).toString("base64");
          // console.log(':::::::',objJsonStr, objJsonB64)
          const encrypt = General.encrypt(objJsonB64, secret.seed);
          // console.log('>>>>>>>>',encrypt)
          req.appSecret = encrypt;

          // console.log(req.headers)

          Logger.error('################################FIM')
          next();
        }

    }
}

