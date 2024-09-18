import { Body, Controller, Get, Post } from '@nestjs/common';
import { ShiftService } from './shift.service';
import CreateShiftDTO from './dto/create-shift.dto';

@Controller('shifts')
export class ShiftController {
  constructor(private shiftService: ShiftService) {}

  @Get()
  async getShifts() {
    return this.shiftService.getShifts();
  }

  @Post()
  async createShift(@Body() shift: CreateShiftDTO) {
    return this.shiftService.createShift(shift);
  }
}
