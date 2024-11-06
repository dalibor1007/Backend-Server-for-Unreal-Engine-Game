import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { IsEqualTo } from "src/_helpers/equalto.decorator";


export class NewPasswordByCodeUserDto {


  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Código de confirmação.',
    type: 'string',
    format: 'string',
  })
  code: string;


  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Senha muito fraca' })
  @ApiProperty({
    description: 'Digite sua senha, deve conter números e caracteres maiúsculo e minúsculo',
    type: 'password',
    format: 'password',
  })
  password_new: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  @IsEqualTo<NewPasswordByCodeUserDto>('password_new')
  @ApiProperty({
    description: 'Confirme a nova senha.',
    type: 'password',
    format: 'password',
  })
  password_confirm: string;


}