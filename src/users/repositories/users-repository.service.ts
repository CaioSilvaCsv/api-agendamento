/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient, Users } from "@prisma/client";
import { CreateUsersDTO } from "../dtos/create-usersDTO";
import { UpdateUsersDTO } from "../dtos/update-usersDTO";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersRepositoryService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    name,
    email,
    password,
    phone,
    city,
  }: CreateUsersDTO): Promise<Users> {
    const user = await this.prisma.users.create({
      data: {
        email,
        name,
        password,
        phone,
        city,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        city: true,
        createdAt: true,
        updateAt: true,
        password: false,
      },
    });

    return user as Users;
  }

  async findAll(): Promise<Users[] | null> {
    const users = await this.prisma.users.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        city: true,
        createdAt: true,
        updateAt: true,
        password: false,
      },
    });
    return users as Users[];
  }

  async update(
    userId: number,
    { name, phone, city }: UpdateUsersDTO,
  ): Promise<Users> {
    const user = await this.prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        name,
        phone,
        city,
      },
    });

    return user as Users;
  }

  async delete(userId: number): Promise<Users | null> {
    const user = await this.prisma.users.delete({
      where: {
        id: userId,
      },
    });

    return user;
  }
  async findById(userId: number): Promise<Users | null> {
    const user = await this.prisma.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        city: true,
        createdAt: true,
        updateAt: true,
        password: false,
      },
    });
    return user as Users;
  }
  async findByEmail(email: string): Promise<Users | null> {
    const user = await this.prisma.users.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        city: true,
        createdAt: true,
        updateAt: true,
        password: false,
      },
    });
    return user as Users;
  }

  async findByPhone(phone: string, id: number): Promise<Users | null> {
    const user = await this.prisma.users.findFirst({
      where: {
        phone: phone,
        id: { not: id }, // Isso exclui o proprio usuario da busca, Garantia
      },
    });
    return user as Users;
  }

  async findEmailAndPassword(
    email: string,
    password: string,
  ): Promise<Users | null> {
    const user = await this.prisma.users.findFirst({
      where: {
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        city: true,
        createdAt: true,
        updateAt: true,
        password: false,
      },
    });

    return user as Users;
  }

  async updatePassword(userId: number, password: string): Promise<Users> {
    const user = await this.prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        password,
      },
    });

    return user as Users;
  }
}
