import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export type PaginationProps = {
  page: number,
  limit: number
}

export const Pagination = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const page = parseInt(request.query.page, 10) || 1;
  const limit = parseInt(request.query.limit, 10) || 10;
  return {
    page: (page - 1) * limit,
    limit: limit,
  };
});