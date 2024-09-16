import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDTO from './dto/user';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() user: CreateUserDTO) {
    return this.usersService.createUser(user);
  }
}
