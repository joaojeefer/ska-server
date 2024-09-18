import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { DbModule } from 'src/db/db.module';

@Module({
  exports: [RoleService],
  imports: [DbModule],
  providers: [RoleService],
})
export class RoleModule {}
