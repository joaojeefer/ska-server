import { Controller, Get, Param } from '@nestjs/common';
import { MachineService } from './machine.service';

@Controller('machine')
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
}
