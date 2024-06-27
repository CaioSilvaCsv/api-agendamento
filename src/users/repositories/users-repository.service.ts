/* eslint-disable @typescript-eslint/no-unused-vars */
import { Users } from "@prisma/client";
import { CreateUsersDTO } from "../dtos/create-usersDTO";
import { UpdateUsersDTO } from "../dtos/update-usersDTO";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepositoryService {
  create({}: CreateUsersDTO): Promise<Users> {
    throw new Error("Method not implemented.");
  }
  update(userId: string, {}: UpdateUsersDTO): Promise<Users> {
    throw new Error("Method not implemented.");
  }
  delete(userId: string): Promise<Users> {
    throw new Error("Method not implemented.");
  }
  findById(userId: string): Promise<Users> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): Promise<Users> {
    throw new Error("Method not implemented.");
  }
}
