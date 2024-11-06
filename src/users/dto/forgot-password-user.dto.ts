import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ForgotPasswordUserDto {

    @IsEmail()
    @IsNotEmpty() 
    @ApiProperty({
      description: 'E-mail do usuário',
      required: true,
      type: 'string'
    })  
    email: string;

    @IsString()
    @IsNotEmpty() 
    @ApiProperty({
      description: 'Username do usuário.',
      required: true,
      type: 'string',
    })  
    username: string;
}