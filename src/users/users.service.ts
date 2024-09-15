import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  username: string;
  password: string;
};

const users: User[] = [
  {
    id: 1,
    username: '12345678900',
    password: 'changeme', // use a hash instead of a plain text password
  },
  {
    id: 2,
    username: '12345678901',
    password: 'secret',
  },
];

@Injectable()
export class UsersService {
  async findUserByName(username: string): Promise<User | undefined> {
    return users.find((user) => user.username === username);
  }
}
