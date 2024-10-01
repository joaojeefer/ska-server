import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import CreateRoleDTO from './dto/create-role.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('roles')
@UseGuards(AuthGuard)
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Get()
  async getRoles() {
    return this.roleService.getRoles();
  }

  @Post()
  async createRole(@Body() role: CreateRoleDTO) {
    return this.roleService.createRole(role);
  }
}
