import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import CreateMetricsDTO from './dto/create-metrics.dto';

@Controller('metrics')
export class MetricsController {
  constructor(private metricsService: MetricsService) {}

  @Get('machine/:machineId')
  async getMetricsByMachine(@Param('machineId') machineId: string) {
    return this.metricsService.getMetricsByMachine(machineId);
  }

  @Post('machine')
  async createMetricsForMachine(@Body() metrics: CreateMetricsDTO) {
    return this.metricsService.createMetricsForMachine(metrics);
  }
}
