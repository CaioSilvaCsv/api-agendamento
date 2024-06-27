import { Module } from "@nestjs/common";
import { UsersRepositoryService } from "./users-repository.service";

@Module({
  providers: [UsersRepositoryService],
  exports: [UsersRepositoryService],
})
export class UsersRepositoryModule {}
