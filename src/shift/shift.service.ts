import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import CreateShiftDTO from './dto/shift';

@Injectable()
export class ShiftService {
  constructor(private dbService: PrismaService) {}

  async getShifts() {
    return this.dbService.shift.findMany();
  }

  async createShift(data: CreateShiftDTO) {
    return this.dbService.shift.create({
      data: {
        description: data.description,
        start: data.start,
        end: data.end,
      },
    });
  }
}
