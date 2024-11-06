import { CopyObjectCommand, GetObjectCommand, PutObjectCommand, S3 } from '@aws-sdk/client-s3';
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { SES } from '@aws-sdk/client-ses';
import * as _ from 'lodash';
import { randomUUID as uuid } from 'crypto';
import * as utf8 from 'utf8';
import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export namespace Aws {
  
 type PropsDestination = {
    BccAddresses?: Array<string>;
    CcAddresses?: Array<string>;
    ToAddresses: Array<string>;
 }

 export type PropsSendMail = {
  destination: {
    bcc?: Array<string>,
    cc?: Array<string>,
    to: Array<string>,
  },
  subject: string,
  message: { 
    html: string,
    text?: string,
  }
}


  export class CS3 {
    private bucket = process.env.AWS_BUCKET;
    private _region = process.env.AWS_REGION;
    private _key?: string =  process.env.AWS_ACCESS_KEY;
    private _secret?: string = process.env.AWS_KEY_SECRET;
    private s3 = null;

    constructor() {
        this.s3 = new S3({
          credentials: {
            accessKeyId: this._key,
            secretAccessKey: this._secret,
          },
          region: this._region,
        });
    }

    public async uploadLessonFiles(files: Array<Express.Multer.File>, folder: string) {
        try {
            const filesFolder: string = uuid();

            files.forEach(async element => {
                let file: any = element;
                let extension: string;

                if (file.originalName) {
                    extension = file.originalName.split(".").pop();
                } else {
                    extension = file.originalname.split(".").pop();
                }

                let originalName = file.originalName.split(".")[0] ?? file.originalname.split(".")[0];

                this.s3.upload({
                    Bucket: `${this.bucket}/${folder}/${filesFolder}`,
                    Key: `${originalName}.${extension}`,
                    Body: element.buffer,
                    ContentType: element.mimetype,
                    ContentDisposition: "inline",
                }).promise();
            });

            return filesFolder;
        } catch (error) {
            throw error;
        }
    }


    public async uploadFiles(file: Express.Multer.File, folder: string): Promise<any> {
        try {
            const { ...data }: any = file;
            let extension: string;

            if (data.originalName) {
                extension = data.originalName.split(".").pop();
            } else {
                extension = file.originalname.split(".").pop();
            }

            const { ...s3Response } = await this.s3.upload({
                Bucket: this.bucket + '/' + folder,
                Key: `${uuid()}.${extension}`,
                Body: file.buffer,
                ContentType: file.mimetype,
                ContentDisposition: "inline"
            }).promise();

            return s3Response;
        } catch (error) {
            throw error;
        }
    }

    async copyObject(params: {source_key: string, destination_key: string}){
      let obj;
      try{
        const sourceKey = params?.source_key ? params.source_key : null;
        const destinationKey = params?.destination_key ? params.destination_key : null;
        const command = new CopyObjectCommand({
          Bucket: this.bucket,
          CopySource: `${this.bucket}/${sourceKey}`,
          Key: destinationKey
        });
        obj = await this.s3.send(command);
        
      }catch(error){
        console.log(error)
      }
      return obj
    }

    async deleteFile(params: {folder?: string, key: string}) {
        try {
          const folder = params?.folder ? params.folder : null;
          const key = params?.key ? params.key : null;
          if(!key) throw new Error('Não foi possível apagar o arquivo.')

          const s3Response = await this.s3.deleteObject({
              Bucket: folder ? `${this.bucket}/${folder}` : this.bucket,
              Key: key
          });

          return s3Response;
        } catch (error) {
            throw error;
        }
    }

    public async getFile(file: string): Promise<any> {
      let output;
      try{
        // console.log('######>>>>>>>>>>>>>>>.........',{
        //   Bucket: this.bucket,
        //   Key: `${file}`,
        // });
        const cmd = new GetObjectCommand({
          Bucket: this.bucket,
          Key: `${file}`,
        });
        const data:any = await this.s3.send(cmd);
    
        output = data;
      }catch(error){
        console.log('######GETFILEAWS>>>>>',error)
      }
      return output;
    }

    public parseURL(_file: string): string{
      try{
        return `https://${this.bucket}.s3.amazonaws.com/${_file}`;
      }catch(error){
        console.log('####parseUDL', error)
      }
    }


    public async putObject(file: string): Promise<string> {
        try {
          const command = new PutObjectCommand({
            Bucket: this.bucket,
            Key: file,
            Body: "BODY"
          });
          const signedUrl = await getSignedUrl(this.s3, command);
          
          return signedUrl.split('?')[0];
        } catch (error) {
          console.log('######ERRORGETFILE>>>>',error)
          throw error;
        }
    }

    public async uploadBase64(name: string, base64: string, folder: string, mime_type: string): Promise<any> {
        try {
            const buffer = Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ""),'base64')
            const { ...s3Response } = await this.s3.putObject({
                Bucket: this.bucket,
                Key: `${folder}/${name}`,
                Body: buffer,
                ContentType: mime_type,                
                ContentEncoding: 'base64',
            });

            return s3Response;
        } catch (error) {
            throw error;
        }
    }


    public async uploadFile(params: {name: string, folder?: string | undefined, mimetype: string, buffer: any}): Promise<any> {
        try {
          const name = params?.name ? params.name : null; 
          const folder = params?.folder ? params.folder : null; 
          const mimetype = params?.mimetype ? params.mimetype : null; 
          const buffer = params?.buffer ? params.buffer : null; 
          if(!name) throw new Error('Não foi definido o nome do arquivo.')
          if(!mimetype) throw new Error('Não foi definido o tipo do arquivo.')
          if(!buffer) throw new Error('Não foi definido o arquivo.')
          const key = folder ? `${folder}/${name}` : `${name}`;
      //   console.log('#####AWS>>>>>',{
      //     Bucket: this.bucket,
      //     Key: key,
      //     Body: buffer,
      //     ContentType: mimetype,                
      // })
          const s3Response = await this.s3.putObject({
              Bucket: this.bucket,
              Key: key,
              Body: buffer,
              ContentType: mimetype,                
          });

          return {...s3Response, name: key};
        } catch (error) {
          console.log(error)
        }
    }
}
  export class CSES {
    
    private _region = process.env.AWS_REGION;
    private _key?: string =  process.env.AWS_ACCESS_KEY;
    private _secret?: string = process.env.AWS_KEY_SECRET;
    private _config_set = 'ConfigAll';
    private _reply = process.env.NOREPLY;
    private _charset = 'UTF-8';
    private _source = process.env.NOREPLY;
    private _contact: string;
    private _contact_email: string;
    private _ses: any;
    private _messageId: string;

    constructor() {
      this._ses = new SES({
        apiVersion: '2010-12-01',
        region: this._region, 
        credentials: { 
          accessKeyId: this._key, 
          secretAccessKey: this._secret
        } 
      });
      this._source = this._reply;
    }

    getMessageId(): string{
      return this._messageId;
    }
    setContact(_contact: string, _email: string): boolean{
      this._contact = _contact;
      this._contact_email = _email;
      return true;
    }

    setFrom(_name: string, _email: string): boolean {
      this._source = `${_name} <${_email}>`;
      return true;
    }


    async sendMail(_data: PropsSendMail): Promise<Boolean> {
      let output = false;
      try {
        
        let objDestination: PropsDestination = {ToAddresses: [""]};
        if (_.isEmpty(_data) === false) {
          if (_data.destination.hasOwnProperty('bcc')) {
            objDestination.BccAddresses = _data.destination.bcc;
          }
          if (_data.destination.hasOwnProperty('cc')) {
            objDestination.CcAddresses = _data.destination.cc;
          }
          if (_data.destination.hasOwnProperty('to')) {
            objDestination.ToAddresses = _data.destination.to;
          }
        }
        let source: string;
        if(_.isEmpty(this._contact) === false && _.isEmpty(this._contact_email) === false ){

          source = `${utf8.encode(this._contact)} <${this._contact_email}>`;
        }else{
          source = this._source;
        }
        const dataEmail: any = {
          Destination: objDestination,
          Message: {
            Body: {
              Html: {
                Charset: this._charset,
                Data: _data.message.html
              },
              ...(_data.message.text ? { Text: {
                Charset: this._charset,
                Data: _data.message.text
              }} : null)
            },
            Subject: {
              Charset: this._charset,
              Data: _data.subject
            }
          },
          Source: source,
          ConfigurationSetName: this._config_set,
          ReplyToAddresses: [this._reply]
        };
        console.log(dataEmail)
        const outSendMail: any = await this._ses.sendEmail(dataEmail,(data) => {
          console.log('#####AWSSESS:::::, ',data)
          this._messageId = data.MessageId ?? null;
          
        });
        output = true;

      } catch (e) {
        console.log('###AWS SES:::::', e);
      }
      return output;
    }

  }

  export class CSECRET {
    
    private _region = process.env.AWS_REGION;
    private _key?: string =  process.env.AWS_ACCESS_KEY;
    private _secret?: string = process.env.AWS_KEY_SECRET;
    private _secret_manager_client: any;
    
    constructor() {
      this._secret_manager_client = new SecretsManagerClient({
        region: this._region, 
        credentials: { 
          accessKeyId: this._key, 
          secretAccessKey: this._secret
        } 
      });
    }

    async getSecret<T>(_secret_name: string): Promise<T>{
      let response;

      try {
        response = await this._secret_manager_client.send(
          new GetSecretValueCommand({
            SecretId: _secret_name,
            VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
          })
        );
      } catch (error) {
        console.log(error)
      }

      return response.SecretString;
    }

  }
}