import { Injectable } from "@nestjs/common";

@Injectable()
export class MakeHidden {

    static set(obj:Object,array:any){
        for(let item of array){
          delete obj[item];
        }
    }
}

