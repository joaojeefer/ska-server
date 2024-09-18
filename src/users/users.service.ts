import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import User from './user.entity';
import CreateUserDTO from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private dbService: PrismaService) {}

  async findUserByUsername(username: string): Promise<User | undefined> {
    return this.dbService.user.findUnique({ where: { username } });
  }

  async getUsers(): Promise<User[]> {
    return this.dbService.user.findMany({
      include: { role: true, shift: true, userInfo: true },
    });
  }

  async getUserById(id: string): Promise<User | null> {
    return this.dbService.user.findUnique({
      where: { id: parseInt(id) },
      include: { role: true, shift: true, userInfo: true },
    });
  }

  async createUser(user: CreateUserDTO): Promise<{ username: string }> {
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

    return { username: newUser.username };
  }
}
