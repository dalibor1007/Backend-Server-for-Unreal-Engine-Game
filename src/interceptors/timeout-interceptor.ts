import { Injectable, NestInterceptor, ExecutionContext, CallHandler,RequestTimeoutException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  constructor(
    private readonly reflector: Reflector,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // const response = context.switchToHttp().getResponse();
    // const timeout = this.reflector.get<number>('request-timeout', context.getHandler()) || 60000;
    // console.log('INTER:::', timeout)
    // response.setTimeout(1000000)

    return next.handle().pipe(
      timeout(500000),
      catchError(err => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException());
        }
        return throwError(() => err);
      }),
    );;
  };
}