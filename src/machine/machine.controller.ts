import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MachineService } from './machine.service';
import CreateMachineDTO from './dto/create-machine.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('machines')
@UseGuards(AuthGuard)
export class MachineController {
  constructor(private machineService: MachineService) {}

  @Get()
  async getMachines() {
    return this.machineService.getMachines();
  }

  @Get(':id')
  async getMachineById(@Param('id') id: string) {
    return this.machineService.getMachineById(id);
  }

  @Post()
  async createMachine(@Body() machine: CreateMachineDTO) {
    return this.machineService.createMachine(machine);
  }
}
