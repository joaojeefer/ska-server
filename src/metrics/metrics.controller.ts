import { Controller, Get, Param } from '@nestjs/common';
import { MetricsService } from './metrics.service';

@Controller('metrics')
export class MetricsController {
  constructor(private metricsService: MetricsService) {}

  @Get(':machineId')
  async getMetricsByMachine(@Param('machineId') machineId: string) {
    return this.metricsService.getMetricsByMachine(machineId);
  }
}
