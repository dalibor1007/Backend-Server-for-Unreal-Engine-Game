import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

  constructor() {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
      ],
    });
    this.$use(async (params, next) => {
      const result = await next(params);

      // Verifica se o resultado é uma lista ou um objeto e converte BigInt para Number
      if (Array.isArray(result)) {
        return result.map(row => this.convertBigIntToNumber(row));
      } else if (typeof result === 'object') {
        return this.convertBigIntToNumber(result);
      }

      return result;
    });
  }

  private convertBigIntToNumber(obj: any) {
    if(obj){
      Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'bigint') {
          obj[key] = Number(obj[key]);
        }
      });
    }
    return obj;
  }


  async onModuleInit(): Promise<void> {
    let retries = 5;
    while (retries > 0) {
      try {
        await this.$connect();

        // @ts-ignore
        this.$on('query', async (e: any) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // console.log(`${e.query} ${e.params}`);
        });
        Logger.log('PRISMA: Successfully connected to postgres database');

        break;
      } catch (err) {
        Logger.error(err);

        Logger.error(
          `ERROR CONNECT DATABASE: there was an error connecting to database, retrying .... (${retries})`,
        );

        // retries -= 1;

        // await new Promise((res) => setTimeout(res, 3_000)); // wait for three seconds
      }
    }
  }
}