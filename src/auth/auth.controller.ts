import { Body, Controller, Post } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthLoginDTO } from "./dto/auth-login.dto";
import { UsersService } from "src/users/users.service";
import { AuthService } from "./auth.service";
import { AuthRegisterDTO } from "./dto/auth-register.dto";
import { AuthForgotDTO } from "./dto/auth-forgot.dto";
import { AuthResetDTO } from "./dto/auth-reset.dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}
  @Post("login")
  @ApiResponse({ status: 201, description: "User logged in successfully." })
  @ApiResponse({ status: 401, description: "Invalid credentials." })
  async login(@Body() { email, password }: AuthLoginDTO) {
    return this.authService.login(email, password);
  }

  @Post("register")
  @ApiResponse({ status: 201, description: "User registered successfully." })
  @ApiResponse({ status: 400, description: "Bad request." })
  async register(@Body() body: AuthRegisterDTO) {
    return this.authService.register(body);
  }

  @Post("forgot")
  @ApiResponse({ status: 201, description: "Reset password link send." })
  @ApiResponse({ status: 404, description: "User not found." })
  async forgot(@Body() { email }: AuthForgotDTO) {
    return this.authService.forgot(email);
  }

  @Post("reset")
  @ApiResponse({ status: 201, description: "Password reset successfully." })
  @ApiResponse({ status: 400, description: "Invalid or expired token." })
  async reset(@Body() { password, token }: AuthResetDTO) {
    return this.authService.reset(password, token);
  }

  @Post("me")
  @ApiResponse({ status: 201, description: "Reset password link send." })
  @ApiResponse({ status: 404, description: "User not found." })
  async me(@Body() body) {
    return this.authService.checkToken(body.token);
  }
}
