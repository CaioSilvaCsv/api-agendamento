import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, MinLength } from "class-validator";

export class AuthResetDTO {
  @ApiProperty({
    example: "Paulo123",
  })
  @MinLength(6)
  password: string;

  @IsUUID()
  token: string;
}
