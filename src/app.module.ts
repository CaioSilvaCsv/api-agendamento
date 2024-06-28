import { Module, forwardRef } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [UsersModule, forwardRef(() => AuthModule)], //Resolvendo dependencia circular. "Nessa Ponta"
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
