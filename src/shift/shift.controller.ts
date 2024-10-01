import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ShiftService } from './shift.service';
import CreateShiftDTO from './dto/create-shift.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('shifts')
@UseGuards(AuthGuard)
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
