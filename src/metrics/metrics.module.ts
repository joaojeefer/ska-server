import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [MetricsController],
  imports: [DbModule],
  providers: [MetricsService],
})
export class MetricsModule {}
