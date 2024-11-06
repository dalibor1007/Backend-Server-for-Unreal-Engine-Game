import { createParamDecorator, ExecutionContext, Inject } from '@nestjs/common';
import * as _ from 'lodash';


export const AppSecret = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    console.log('DECORATOR>:::::::',data)
    // const secret: any = await configService.get<string>('systems');
    // const decrypt = General.decrypt(req.headers['x-app-secret'], secret.seed);
    // console.log(req.headers, _ip, Buffer.from(decrypt, "base64").toString(), appSecret)

    const request = ctx.switchToHttp().getRequest();
    const appSecret = request.appSecret ?? null;
    return appSecret;
  },
);