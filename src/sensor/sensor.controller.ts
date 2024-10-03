import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SensorService } from './sensor.service';
import CreateSensorDto from './dto/create-sensor.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('sensor')
@UseGuards(AuthGuard)
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Post()
  create(@Body() createSensorDto: CreateSensorDto) {
    return this.sensorService.create(createSensorDto);
  }

  @Get()
  findAll() {
    return this.sensorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sensorService.findOne(parseInt(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sensorService.remove(parseInt(id));
  }
}
