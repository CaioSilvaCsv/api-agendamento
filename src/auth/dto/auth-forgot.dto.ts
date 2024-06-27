import { IsEmail, IsUUID } from "class-validator";

export class AuthForgotDTO {
  @IsEmail()
  email: string;
  @IsUUID()
  token: string;
}
