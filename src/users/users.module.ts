import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DbModule } from 'src/db/db.module';
import { RoleModule } from 'src/role/role.module';
import { ShiftModule } from 'src/shift/shift.module';

@Module({
  controllers: [UsersController],
  exports: [UsersService],
  imports: [DbModule, RoleModule, ShiftModule],
  providers: [UsersService],
})
export class UsersModule {}
