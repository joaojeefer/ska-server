import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import CreateRoleDTO from './dto/create-role.dto';

@Controller('roles')
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
