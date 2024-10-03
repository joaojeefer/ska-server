import { Injectable } from '@nestjs/common';
import CreateProductionOrderDto from './dto/create-production-order.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ProductionOrderService {
  constructor(private dbService: PrismaService) {}

  async create(
    input: CreateProductionOrderDto,
  ): Promise<{ productionOrderId: number }> {
    const newPO = await this.dbService.productionOrder.create({
      data: {
        quantity: input.quantity,
        status: input.status,
        executionDate: input.executionDate,
        creationDate: input.creationDate,
        description: input.description,
        plannedTime: input.plannedTime,
        productId: input.productId,
        userId: input.userId,
      },
    });

    return { productionOrderId: newPO.id };
  }

  async findAll() {
    return this.dbService.productionOrder.findMany();
  }

  findOne(id: string) {
    return this.dbService.productionOrder.findUniqueOrThrow({
      where: { id: parseInt(id) },
    });
  }
}
