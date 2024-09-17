import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class MachineService {
  constructor(private dbService: PrismaService) {}

  async getMachines() {
    return this.dbService.machine.findMany();
  }

  async getMachineById(id: string) {
    return this.dbService.machine.findUnique({
      where: { id: parseInt(id) },
    });
  }
}
