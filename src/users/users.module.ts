import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [UsersController],
  exports: [UsersService],
  imports: [DbModule],
  providers: [UsersService],
})
export class UsersModule {}
