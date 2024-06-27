/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { ParamId } from "./decorators/param-id.decorator";
import { CreateUsersDTO } from "./dtos/create-usersDTO";
import { UpdateUsersDTO } from "./dtos/update-usersDTO";

@Controller("users")
export class UsersController {
  @Post()
  async createProfile(@Body() createUserDTO: CreateUsersDTO) {
    //return this.userService.create(createUserDTO);
  }

  @Get()
  async getAllProfiles() {
    //return this.userService.getAll();
  }

  @Get(":id")
  async showProfile(@ParamId() id: number) {
    //return this.userService.getById(id);
  }

  @Patch(":id")
  async updateProfile(
    @ParamId() id: number,
    @Body() updateData: UpdateUsersDTO,
  ) {
    //return this.userService.update(id, updateData);
  }

  @Delete(":id")
  async deleteProfile(@ParamId() id: number) {
    //return this.userService.delete(id);
  }
}
