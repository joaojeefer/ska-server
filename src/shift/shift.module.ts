import { Module } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { DbModule } from 'src/db/db.module';

@Module({
  exports: [ShiftService],
  imports: [DbModule],
  providers: [ShiftService],
})
export class ShiftModule {}
