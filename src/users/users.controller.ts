/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { ParamId } from "./decorators/param-id.decorator";
import { CreateUsersDTO } from "./dtos/create-usersDTO";
import { UpdateUsersDTO } from "./dtos/update-usersDTO";
import { UsersService } from "./users.service";
import { ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({ status: 201, description: "User created successfully" })
  @ApiResponse({ status: 400, description: "Invalid input" })
  async createProfile(@Body() createUserDTO: CreateUsersDTO) {
    return this.usersService.create(createUserDTO);
  }

  @Get()
  @ApiResponse({ status: 200, description: "Return all users" })
  async getAllProfiles() {
    return this.usersService.getAll();
  }

  @Get(":id")
  @ApiParam({ name: "id", description: "User ID", type: Number })
  @ApiResponse({ status: 200, description: "User found" })
  @ApiResponse({ status: 404, description: "User not found" })
  async showProfile(@ParamId() id: number) {
    return this.usersService.show(id);
  }

  @Patch(":id")
  @ApiParam({ name: "id", description: "User ID", type: Number })
  @ApiResponse({ status: 200, description: "User updated successfully" })
  @ApiResponse({ status: 404, description: "User not found" })
  async updateProfile(
    @ParamId() id: number,
    @Body() updateData: UpdateUsersDTO,
  ) {
    return this.usersService.update(id, updateData);
  }

  @Delete(":id")
  @ApiParam({ name: "id", description: "User ID", type: Number })
  @ApiResponse({ status: 200, description: "User deleted successfully" })
  @ApiResponse({ status: 404, description: "User not found" })
  async deleteProfile(@ParamId() id: number) {
    return this.usersService.delete(id);
  }
}
