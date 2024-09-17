import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class MetricsService {
  constructor(private dbService: PrismaService) {}

  async getMetricsByMachine(machineId: string) {
    return this.dbService.metrics.findUnique({
      where: { machineId: parseInt(machineId) },
      include: { machine: true },
    });
  }
}
