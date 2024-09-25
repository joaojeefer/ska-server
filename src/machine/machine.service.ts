import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import CreateMachineDTO from './dto/create-machine.dto';

@Injectable()
export class MachineService {
  constructor(private dbService: PrismaService) {}

  async getMachines() {
    return this.dbService.machine.findMany();
  }

  async getMachineById(id: string) {
    return this.dbService.machine.findUniqueOrThrow({
      where: { id: parseInt(id) },
    });
  }

  async createMachine(
    machine: CreateMachineDTO,
  ): Promise<{ machineId: number }> {
    const newMachine = await this.dbService.machine.create({
      data: {
        description: machine.description,
        localization: machine.localization,
      },
    });

    return { machineId: newMachine.id };
  }
}
