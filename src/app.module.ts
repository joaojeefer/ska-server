import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { MetricsModule } from './metrics/metrics.module';
import { MachineModule } from './machine/machine.module';
import { ShiftModule } from './shift/shift.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DbModule,
    AuthModule,
    UsersModule,
    MetricsModule,
    MachineModule,
    RoleModule,
    ShiftModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
