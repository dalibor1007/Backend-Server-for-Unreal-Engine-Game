import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Request, Response } from 'express';
import { IncomingMessage } from 'http';
import * as _ from 'lodash';

interface IErrorMessage {
  success: boolean,
  message: string,
  data?: any
}

export const getStatusCode = <T>(exception: T): number => {
  return exception instanceof HttpException
    ? exception.getStatus()
    : HttpStatus.INTERNAL_SERVER_ERROR;
};

export const getErrorMessage = <T>(exception: T): IErrorMessage => {

  let output: IErrorMessage = {
    success: false,
    message: ''
  }
  if(exception instanceof HttpException){
    let response: any = exception.getResponse();
    let message:any = response?.message ? response.message : '';
    if(_.has(response, 'success')){
      output = response;
    }else{
      if(message){
        message = _.isArray(message) ? message.join(' - ') : message;
      }
      output = {
        success: false,
        message: message
      }
    }
  }else{
    output = {
      success: false,
      message: exception.constructor.name,
      data: exception["applicationRef"]
    }
  }

  return output;
};

@Catch()
export class CatchAllErrorsExceptionFilter<T> extends BaseExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<IncomingMessage>();
    const req = ctx.getRequest<Request>();
    const errorMessage = getErrorMessage<T>(exception);
    let statusCode = getStatusCode<T>(exception);
    if(errorMessage?.message && errorMessage.message.indexOf('Cannot ')){
      Logger.warn('>>>>>>>>>>>>>>>>AEWWWWWW BOTS ABENÇOADO!!!!')
    }
    // console.log("#:::#::#:::",errorMessage)
    Logger.error('####### GLOBAL #######')
    console.log('#######GLOBAL', request.headers, statusCode, errorMessage)
    statusCode = statusCode == 401 || String(errorMessage.message) == 'Unauthorized' ? statusCode : 200;

    let message = String(errorMessage.message) == 'Unauthorized' ? 'Não autorizado!' : errorMessage.message;
    // let msgCode = message.split('|');
    // console.log(msgCode)
    // let code = null;
    // if(_.isNil(msgCode) == false){
    //   code = msgCode;
    //   message = msgCode[1];
    // }
    // Logger.debug('###GLOBAL EXCEPTION',message)
    response.status(statusCode).json({
      // error: {
      //   timestamp: new Date().toISOString(),
      //   path: request.url,
      //   statusCode,
      //   message,
      // },
      success: errorMessage?.success ?? false,
      message: message,
      // ...(code ? {code: code} : null),
      ...(errorMessage.data ? {data:  errorMessage.data ?? null} : null)
    });
  }
}