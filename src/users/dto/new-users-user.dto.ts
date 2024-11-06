import { ApiProperty } from "@nestjs/swagger";
import { Roles } from "@prisma/client";
import { Type } from "class-transformer";
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, NotEquals } from "class-validator";
import { General } from "src/_helpers/general.helper";

export class NewUsersUserDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'First Name',
    type: 'string',
    required: true,
  })
  first_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Last Name',
    type: 'string',
    required: true,
  })
  last_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Username.',
    type: 'string',
    required: true,
  })
  username: string;
  
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Password.',
    type: 'number',
    required: true,
    format: 'password'
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'E-mail do usuário.',
    required: true,
    type: 'string'
  })
  email: string;


  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Username.',
    type: 'string',
    required: true,
  })
  store_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Username.',
    type: 'string',
    required: true,
  })
  mac_address: string;
  

}