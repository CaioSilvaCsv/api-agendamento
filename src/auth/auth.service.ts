import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async createToken() {
    //return await this.jwtService.sign(payload, options);
  }

  async checkToken() {
    //return await this.jwtService.signAsync(payload, options);
  }

  async login() {}

  async register() {}

  async forgot() {}

  async reset() {}
}
