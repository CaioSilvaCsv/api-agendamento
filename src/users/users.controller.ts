/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { ParamId } from "./decorators/param-id.decorator";
import { CreateUsersDTO } from "./dtos/create-usersDTO";
import { UpdateUsersDTO } from "./dtos/update-usersDTO";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createProfile(@Body() createUserDTO: CreateUsersDTO) {
    return this.usersService.create(createUserDTO);
  }

  @Get()
  async getAllProfiles() {
    return this.usersService.getAll();
  }

  @Get(":id")
  async showProfile(@ParamId() id: number) {
    return this.usersService.show(id);
  }

  @Patch(":id")
  async updateProfile(
    @ParamId() id: number,
    @Body() updateData: UpdateUsersDTO,
  ) {
    return this.usersService.update(id, updateData);
  }

  @Delete(":id")
  async deleteProfile(@ParamId() id: number) {
    return this.usersService.delete(id);
  }
}
