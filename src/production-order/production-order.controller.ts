import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ProductionOrderService } from './production-order.service';
import CreateProductionOrderDto from './dto/create-production-order.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('production-order')
@UseGuards(AuthGuard)
export class ProductionOrderController {
  constructor(
    private readonly productionOrderService: ProductionOrderService,
  ) {}

  @Post()
  create(@Body() createProductionOrderDto: CreateProductionOrderDto) {
    return this.productionOrderService.create(createProductionOrderDto);
  }

  @Get()
  findAll() {
    return this.productionOrderService.findAll();
  }

  @Get(':id')
  async getProductionOrderById(@Param('id') id: string) {
    return this.productionOrderService.findOne(id);
  }
}
