import { Module } from "@nestjs/common";
import { UploadsService } from "./uploads.service";
import { UsersRepositoryModule } from "src/users/repositories/users-repository.module";

@Module({
  imports: [UsersRepositoryModule],
  controllers: [],
  providers: [UploadsService],
  exports: [UploadsService],
})
export class UploadsModule {}
