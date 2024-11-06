import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class ApplyBoostResearchesPlayersDto {

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({
    description: 'ID of researche.',
    required: true,
    type: 'number'
  })
  research: number;
}