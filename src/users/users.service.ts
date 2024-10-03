import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import CreateUserDTO from './dto/create-user.dto';
import { GetUserDTO } from './dto/get-user.dto';
import User from './user.entity';

@Injectable()
export class UsersService {
  constructor(private dbService: PrismaService) {}

  async findUserByUsername(username: string): Promise<User | undefined> {
    return this.dbService.user.findUnique({
      include: { role: true, shift: true, userInfo: true },
      where: { username },
    });
  }

  async getUsers(): Promise<GetUserDTO[] | undefined> {
    return this.dbService.user.findMany({
      select: { id: true, name: true, username: true },
    });
  }

  async getUserById(id: string): Promise<GetUserDTO | undefined> {
    return this.dbService.user.findUnique({
      select: { id: true, name: true, username: true },
      where: { id: parseInt(id) },
    });
  }

  async createUser(user: CreateUserDTO): Promise<GetUserDTO | undefined> {
    const newUser = await this.dbService.user.create({
      data: {
        name: user.name,
        username: user.username,
        password: user.password,
        birth: user.birth,
        role: {
          connect: { id: user.roleId },
        },
        shift: {
          connect: { id: user.shiftId },
        },
        userInfo: {
          create: {
            phone: user.phone,
            email: user.email,
            street: user.street,
            number: user.number,
            complement: user.complement,
            zipCode: user.zipCode,
            city: user.city,
            state: user.state,
          },
        },
      },
    });

    return { id: newUser.id, name: newUser.name, username: newUser.username };
  }
}
