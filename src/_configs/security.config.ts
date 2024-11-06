import { registerAs } from "@nestjs/config";
import { Aws } from "src/_services/aws.service";

interface ISecrets {
  secret: string;
  key: string;
}

export default registerAs('systems', async (): Promise<ISecrets> => {
  let secrets;
  if(process.env?.SECRET){
    secrets = { seed: process.env.SECRET };
  }else{ 
    const aws = new Aws.CSECRET();
    const output: any = await aws.getSecret(`${process.env.SEED_SECRET}`);
    secrets = JSON.parse(output)
  }
  return secrets
});