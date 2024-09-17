import { Module } from '@nestjs/common';
import { MachineController } from './machine.controller';
import { MachineService } from './machine.service';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [MachineController],
  imports: [DbModule],
  providers: [MachineService],
})
export class MachineModule {}
