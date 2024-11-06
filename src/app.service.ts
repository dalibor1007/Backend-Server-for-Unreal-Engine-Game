import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `[${process.env.ENVIRONMENT.toUpperCase()}] API - ${process.env.PROJECT_NAME}`;
  }
}
