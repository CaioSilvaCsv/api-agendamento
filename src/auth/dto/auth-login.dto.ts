import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, MinLength } from "class-validator";

export class AuthLoginDTO {
  @ApiProperty({
    example: "paulo@teste.com",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "Paulo123",
  })
  @MinLength(6)
  password: string;
}
