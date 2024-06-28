/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Users } from "@prisma/client";
import { UsersRepositoryService } from "src/users/repositories/users-repository.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersRepository: UsersRepositoryService,
  ) {}
  async createToken(user: Users) {
    return this.jwtService.sign(
      {
        sub: user.id,
      },
      {
        expiresIn: "1 days",
        subject: String(user.id),
        issuer: "Api nest js",
      },
    );
  }

  async checkToken() {
    //return await this.jwtService.signAsync(payload, options);
  }

  async login(email: string, password: string) {
    const userExits = await this.usersRepository.findEmailAndPassword(
      email,
      password,
    );

    if (!userExits) {
      throw new UnauthorizedException("Incorrect email and/or password");
    }

    return this.createToken(userExits);
  }

  async forgot(email: string) {
    const userExists = await this.usersRepository.findByEmail(email);

    if (!userExists) {
      throw new UnauthorizedException("Incorrect email and/or password");
    }

    // TO DO: send email...
    return true;
  }

  async reset(password: string, token: string) {
    // TO DO: validar o token e depois trocar a senha.

    const id = 0;
    const user = await this.usersRepository.updatePassword(id, password);

    return this.createToken(user);
  }
}
