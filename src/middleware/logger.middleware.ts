/* eslint-disable @typescript-eslint/ban-types */
import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new Logger("HTTP");
    use(req: Request, res: Response, next: () => any) {
        const { ip, method, originalUrl } = req;
        const userAgent = req.get("user-agent") || "";
        console.log('Request', req.method, req.originalUrl);
        res.on("finish", () => {
            const { statusCode } = res;
            const contentLength = res.get("content-length");
      
            this.logger.log(
              `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
            );
          });
        next();
        console.log('Response', res.statusCode, res.statusMessage, /*...*/);
      }
}
