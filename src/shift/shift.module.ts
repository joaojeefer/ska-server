import { Module } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { DbModule } from 'src/db/db.module';
import { ShiftController } from './shift.controller';

@Module({
  imports: [DbModule],
  providers: [ShiftService],
  controllers: [ShiftController],
})
export class ShiftModule {}
