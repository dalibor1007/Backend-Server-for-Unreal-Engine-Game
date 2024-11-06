import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional } from "class-validator";

export class UpdatePermissionsUserDto {


  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({
    description: "ID user",
    type: "number",
    format: "number",
    required: false
  })
  id_user?: number;


  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    type: 'number',
    description: 'ID permission.',
    required: true,
  })
  id_permission: number;


  @IsBoolean()
  @IsNotEmpty()
  @Type(() => Boolean)
  @ApiProperty({
    description: 'Define whether the permission will be released.',
    type: 'boolean',
    required: true,
    format:'boolean'
  })
  enabled: boolean;



}