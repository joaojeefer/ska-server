import { Module } from '@nestjs/common';
import { ProductionOrderService } from './production-order.service';
import { DbModule } from 'src/db/db.module';
import { ProductionOrderController } from './production-order.controller';

@Module({
  imports: [DbModule],
  controllers: [ProductionOrderController],
  providers: [ProductionOrderService],
})
export class ProductionOrderModule {}
