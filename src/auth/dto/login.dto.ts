import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export class LoginDto {

    @IsString()
    @IsNotEmpty() 
    @ApiProperty({
      description: 'E-mail',
      required: true,
      type: 'string',
    })
    email: string;

    @IsString()
    @IsNotEmpty() 
    @ApiProperty({
      description: 'Password',
      required: true,
      type: 'string',
      format: 'password',
    })
    password: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
      description: 'Network MAC ADDRESS',
      required: true,
      type: 'string',
    })
    mac_address: string;

}