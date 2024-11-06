import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class TwoFactorCheckLoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Enter the 2FA verification code',
    required: true,
    type: 'string'
  })
  two_factor: string;
}