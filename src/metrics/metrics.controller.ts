import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('metrics')
export class MetricsController {
  constructor(private metricsService: MetricsService) {}

  @Get(':machineId')
  @UseGuards(AuthGuard)
  async getMetricsByMachine(@Param('machineId') machineId: string) {
    return this.metricsService.getMetricsByMachine(machineId);
  }
}
