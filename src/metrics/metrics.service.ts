import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import CreateMetricsDTO from './dto/create-metrics.dto';

@Injectable()
export class MetricsService {
  constructor(private dbService: PrismaService) {}

  async getMetricsByMachine(machineId: string) {
    return this.dbService.metrics.findUniqueOrThrow({
      where: { machineId: parseInt(machineId) },
      include: { machine: true },
    });
  }

  async createMetricsForMachine(metrics: CreateMetricsDTO) {
    await this.dbService.machine.findUniqueOrThrow({
      where: { id: metrics.machineId },
      select: { id: true },
    });

    return this.dbService.metrics.create({
      data: {
        oee: metrics.oee,
        availability: metrics.availability,
        performance: metrics.performance,
        quality: metrics.quality,
        scheduledTime: metrics.scheduledTime,
        downtime: metrics.downtime,
        productionTime: metrics.productionTime,
        productionTheoricTIme: metrics.productionTheoricTIme,
        partsDiscarded: metrics.partsDiscarded,
        partsProduced: metrics.partsProduced,
        date: metrics.date,
        machineId: metrics.machineId,
      },
    });
  }
}
