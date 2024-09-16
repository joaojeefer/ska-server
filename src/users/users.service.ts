import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import User from './user.entity';
import CreateUserDTO from './dto/user';

@Injectable()
export class UsersService {
  constructor(private dbService: PrismaService) {}

  async findUserByUsername(username: string): Promise<User | undefined> {
    return this.dbService.user.findUnique({ where: { username } });
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
