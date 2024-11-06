import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class BlockUsersDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Enter the note to block the user.',
    required: true,
    type: 'string'
  })
  observation: string;
  
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID of the user who will be blocked.',
    required: true,
    type: 'number'
  })
  user_id: number;

  @IsBoolean()
  @Type(() => Boolean)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Define whether the user will be blocked or unblocked.',
    required: true,
    type: 'boolean',
    default: null
  })
  block: boolean;
}