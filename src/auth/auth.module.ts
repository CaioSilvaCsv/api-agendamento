import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UsersRepositoryModule } from "src/users/repositories/users-repository.module";
import { UsersModule } from "src/users/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [
    JwtModule.register({
      secret: "95eb73e4d15d9fc5c0ac68e18b834fe9e8329420",
    }),
    UsersModule,
    UsersRepositoryModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [],
})
export class AuthModule {}
