import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDTO from './dto/user';
import { RoleService } from 'src/role/role.service';
import CreateRoleDTO from 'src/role/dto/role';
import { ShiftService } from 'src/shift/shift.service';
import CreateShiftDTO from 'src/shift/dto/shift';

@Controller('users')
export class UsersController {
  constructor(
    private roleService: RoleService,
    private shiftService: ShiftService,
    private usersService: UsersService,
  ) {}

  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Post()
  async createUser(@Body() user: CreateUserDTO) {
    return this.usersService.createUser(user);
  }

  // Role feature
  @Get()
  async getRoles() {
    return this.roleService.getRoles();
  }

  @Post()
  async createRole(@Body() role: CreateRoleDTO) {
    return this.roleService.createRole(role);
  }

  // Shift feature
  @Get()
  async getShifts() {
    return this.shiftService.getShifts();
  }

  @Post()
  async createShift(@Body() shift: CreateShiftDTO) {
    return this.shiftService.createShift(shift);
  }
}
