import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { DbModule } from 'src/db/db.module';
import { RoleController } from './role.controller';

@Module({
  imports: [DbModule],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule {}
