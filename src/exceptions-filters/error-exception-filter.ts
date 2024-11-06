import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'; 
import { Request, Response } from 'express'; 



export class ErrorCode extends Error {
  constructor(message: string, errorCode?: number) {
    super(message);
    this.name = 'CustomException';
    this.code = errorCode;
  }

  code: number;
}

@Catch(ErrorCode)
export class ErrorExceptionFilter implements ExceptionFilter { 
  catch(exception: ErrorCode, host: ArgumentsHost) { 
    const ctx = host.switchToHttp(); 
    const response = ctx.getResponse<Response>(); 
    const request = ctx.getRequest<Request>(); 
    // const status = exception.getStatus(); 
 
    console.log('#####EXCEPTION-FILTER:',response, exception);
    // response 
    //   .status(status) 
    //   .json({ 
    //     statusCode: status, 
    //     timestamp: new Date().toISOString(), 
    //     path: request.url, 
    //   }); 
    
  } 
} 