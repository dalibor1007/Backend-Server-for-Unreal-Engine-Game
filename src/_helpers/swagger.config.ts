import { Transform } from "class-transformer";
import * as Moment from "moment";

export const getSwaggerSetupConfig = () => {
    return {
      customSiteTitle: 'USDM - UsersAPI Documentation',
      swaggerOptions: {
        tagsSorter: 'alpha',
        operationsSorter: function (methodA: any, methodB: any) {
          const order = { post: '0', get: '1', patch: '2', put: '3', delete: '4' };
          return order[methodA._root.entries[1][1]].localeCompare(order[methodB._root.entries[1][1]]);
        },
        docExpansion: 'none',
        displayRequestDuration: true,
        filter: true,
        syntaxHighlight: { theme: 'monokai' },
        tryItOutEnabled: true,
        requestSnippetsEnabled: true,
        persistAuthorization: true,
      },
    };
  };
  
  export const getSwaggerDocumentConfig = () => {
    return {
      operationIdFactory: (_controllerKey: string, methodKey: string) => methodKey,
      deepScanRoutes: true,
    };
  };

export function ToBoolean(): (target: any, key: string) => void {
    return Transform((_item: any) => ((/^(true|1)$/i).test((_item.value).toString()) === true || _item.value === true ? true : false));
}
export function ToArray(_split: string = ','): (target: any, key: string) => void {
    return Transform((_item: any) => {
      // console.log('#######',_split,_item.value.indexOf(_split))
      if(typeof _item.value === 'string' && _item.value.indexOf(_split) === -1) {
        return _item.value.split(',').map(item => +item)
      }else{
        return _item.value;
      }
    });
}
export function ToDecimal(_decimal: number = 2): (target: any, key: string) => void {
    return Transform((_item: any) => parseFloat(Number(+_item.value).toFixed(_decimal)));
}
export function ToDate(_format: string = 'YYYY-MM-DD'): (target: any, key: string) => void {
    return Transform((_item: any) => Moment(_item.value).format(_format));
}
