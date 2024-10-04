import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import CreateMetricsDTO from './dto/create-metrics.dto';

@Injectable()
export class MetricsService {
  constructor(private dbService: PrismaService) {}

  async getMetricsByMachineAndDays(machineId: string, numberOfDays: number) {
    const daysAgo = new Date();
    daysAgo.setDate(daysAgo.getDate() - numberOfDays);

    return this.dbService.metrics.findMany({
      where: { machineId: parseInt(machineId), date: { gte: daysAgo } },
      include: { machine: true },
      orderBy: { date: 'desc' },
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
        realProductionTime: metrics.realProductionTime,
        partsDiscarded: metrics.partsDiscarded,
        partsProduced: metrics.partsProduced,
        date: metrics.date,
        machineId: metrics.machineId,
      },
    });
  }
}
