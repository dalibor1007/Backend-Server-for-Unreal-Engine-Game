import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IOutput } from 'src/_configs/types.config';
import * as _ from 'lodash';
import { Aws } from 'src/_services/aws.service';
import handlebars from 'handlebars';
import * as fs from 'fs';
import { join } from 'path';
import * as randomstring from 'randomstring';


export enum ETypeLogger {
  INFO,
  ATTENTION,
  DANGER
}

export type LoggerProps = {
  id_user: number,
  event: string,
  source: Prisma.JsonValue | object,
  description: string,
}

@Injectable()
export class LoggersService {

  constructor(
    private readonly prisma: PrismaService
  ) { }

  async setLogger(_event: string, _data: LoggerProps, _type: ETypeLogger): Promise<IOutput> {
    let output: IOutput;
    try {

      const event = _event ? _event : 'logger';
      const objLogger = {
        event: _data.event,
        source: _data.source,
        status: ETypeLogger[_type],
        description: _data.description,
        user: { id: _data.id_user }
      }


      output = {
        success: true,
        message: 'Logger enviado com sucesso.',
      }
    } catch (error) {
      output = {
        success: false,
        message: error.message
      }
    }
    return output;
  }

  async sendMail(_params: {to: string | string[], subject: string, message: string, template: {html: object, type: string}}): Promise<IOutput> {
    let output: IOutput;
    try{
      const emailTo = _params.to ? _params.to : null;
      const message = _params?.message ? _params.message : null;
      const templateType = _params?.template?.type ? _params.template.type : 'base';
      const templateHtml = _params?.template?.html ? _params.template.html : null;
      const templateSubject = _params?.subject ? _params.subject : null;

      if(_.isNil(emailTo)){ throw new Error('Não foi definido um e-mail.')}
      if(_.isNil(message)){ throw new Error('Não foi definido uma mensagem.')}

      const randomString  = randomstring.generate({
        length: 17,
        charset: 'alphanumeric'
      });
      const source = fs.readFileSync(join(__dirname, `../../src/templates/${templateType}.hbs`), { encoding: 'utf-8' });
      const subject = `📩 ${templateSubject}`;
      const template: any= handlebars.compile(source);
      const awsSES = new Aws.CSES();
      const body: Aws.PropsSendMail = {
        destination: {
          to: Array.isArray(emailTo) ? emailTo : [emailTo]
        },
        subject: subject,
        message: {
          html: template({
            ...(templateHtml ? templateHtml : null),
            message: message,
            copy: process.env.COPY,
            code_phishing: randomString,
            title: process.env.TITLE,
            logo: process.env.LOGO,
            favicon: process.env.FAVICON
          })
        }
      }
      const sendMail = await awsSES.sendMail(body);
      if(!sendMail){ throw new Error("Não foi possível enviar o E-mail.")}
      
      output = {
        success: true,
        message: 'E-mail enviado com sucesso.',
        data: {}
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


}
