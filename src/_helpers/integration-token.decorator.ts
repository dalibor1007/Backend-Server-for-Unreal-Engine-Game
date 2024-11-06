import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as _ from 'lodash';

export const IntegrationToken = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const integrationToken = request.integrationToken ?? null;
    return integrationToken;
  },
);