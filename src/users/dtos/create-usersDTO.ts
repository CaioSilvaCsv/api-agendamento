import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
  Matches,
} from "class-validator";
import { Role } from "../enums/role.enum";

export class CreateUsersDTO {
  @ApiProperty({
    example: "Paulo Souza",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "paulo@teste.com",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "Paulo123",
  })
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minNumbers: 1,
    minUppercase: 1,
    minSymbols: 0,
  })
  password: string;

  @ApiProperty({
    example: "38999887766",
  })
  @Matches(/^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/, {
    message: "Invalid phone number",
  })
  phone: string;

  @ApiProperty({
    example: "Salinas-MG",
  })
  @IsString()
  city: string;

  @ApiProperty({
    example: "[1]- Para Client, [2]- Para Employee, [3]- Para Admin",
  })
  @IsOptional()
  @IsEnum(Role)
  role: number;

  @ApiProperty({
    example: "true or false",
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
