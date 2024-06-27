import { Injectable } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtModule) {}
  async createToken() {
    //return await this.jwtService.sign(payload, options);
  }

  async checkToken() {
    //return await this.jwtService.signAsync(payload, options);
  }
}
