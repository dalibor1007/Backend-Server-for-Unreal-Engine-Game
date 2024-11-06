import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class RunResearchesPlayersDto {

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({
    description: 'ID of researche type.',
    required: true,
    type: 'number'
  })
  research_type: number;
}