import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import CreateShiftDTO from './dto/create-shift.dto';

@Injectable()
export class ShiftService {
  constructor(private dbService: PrismaService) {}

  async getShifts() {
    return this.dbService.shift.findMany();
  }

  async createShift(data: CreateShiftDTO): Promise<{ shiftId: number }> {
    const newShift = await this.dbService.shift.create({
      data: {
        description: data.description,
        start: data.start,
        end: data.end,
      },
    });

    return { shiftId: newShift.id };
  }
}
