import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import CreateMetricsDTO from './dto/create-metrics.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('metrics')
@UseGuards(AuthGuard)
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
