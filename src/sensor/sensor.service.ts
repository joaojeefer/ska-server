import { Injectable } from '@nestjs/common';
import CreateSensorDto from './dto/create-sensor.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class SensorService {
  constructor(private dbService: PrismaService) {}

  async create(
    createSensorDto: CreateSensorDto,
  ): Promise<{ sensorId: number }> {
    const newSensor = await this.dbService.sensor.create({
      data: {
        description: createSensorDto.description,
        machineId: createSensorDto.machineId,
      },
    });
    return { sensorId: newSensor.id };
  }

  findAll() {
    return this.dbService.sensor.findMany();
  }

  findOne(id: number) {
    return this.dbService.sensor.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
  }

  async remove(id: number) {
    await this.dbService.sensor.delete({
      where: {
        id: id,
      },
    });
  }
}
