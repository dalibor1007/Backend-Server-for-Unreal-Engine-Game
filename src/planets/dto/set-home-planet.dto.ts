import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class SetHomePlanetsDto{

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({
    description: 'ID of Planet Point.',
    required: true,
    type: 'number'
  })
  id_point: number;
}