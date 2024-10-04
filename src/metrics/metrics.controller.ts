import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { MetricsService } from './metrics.service';
import CreateMetricsDTO from './dto/create-metrics.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('metrics')
@UseGuards(AuthGuard)
export class MetricsController {
  constructor(private metricsService: MetricsService) {}

  @Get('machine/:machineId')
  async getMetricsByMachineAndDays(
    @Param('machineId') machineId: string,
    @Query('days') days?: string,
  ) {
    const numberOfDays = parseInt(days) || 7;
    return this.metricsService.getMetricsByMachineAndDays(
      machineId,
      numberOfDays,
    );
  }

  @Post('machine')
  async createMetricsForMachine(@Body() metrics: CreateMetricsDTO) {
    return this.metricsService.createMetricsForMachine(metrics);
  }
}
