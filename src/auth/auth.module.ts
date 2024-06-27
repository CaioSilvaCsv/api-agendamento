import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      secret: "95eb73e4d15d9fc5c0ac68e18b834fe9e8329420",
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AuthModule {}
