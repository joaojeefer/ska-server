import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDTO from './dto/user';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Post()
  async createUser(@Body() user: CreateUserDTO) {
    return this.usersService.createUser(user);
  }
}
