import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import CreateRoleDTO from './dto/role';

@Injectable()
export class RoleService {
  constructor(private dbService: PrismaService) {}

  async getRoles() {
    return this.dbService.role.findMany();
  }

  async createRole(data: CreateRoleDTO): Promise<{ roleId: number }> {
    const newRole = await this.dbService.role.create({
      data: {
        description: data.description,
      },
    });

    return { roleId: newRole.id };
  }
}
