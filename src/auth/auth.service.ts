import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

type AuthInput = { username: string; password: string };
type SignInData = { userId: number; username: string; name: string };
type AuthResult = {
  accessToken: string;
  userId: number;
  username: string;
  name: string;
};

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateToken(authorization?: string) {
    try {
      const token = authorization?.split(' ')[1];

      if (!token) {
        throw new UnauthorizedException();
      }

      const tokenPayload = await this.jwtService.verifyAsync(token);

      return {
        userId: tokenPayload.sub,
        username: tokenPayload.username,
      };
    } catch {
      throw new UnauthorizedException();
    }
  }

  async validateUser(input: AuthInput): Promise<SignInData | null> {
    const user = await this.usersService.findUserByUsername(input.username);

    if (user && user.password === input.password) {
      return { userId: user.id, username: user.username, name: user.name };
    }

    return null;
  }

  async signIn(input: AuthInput): Promise<AuthResult> {
    const user = await this.validateUser(input);

    if (!user) {
      throw new UnauthorizedException();
    }

    const tokenPayload = { sub: user.userId, username: user.username };

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    return {
      accessToken,
      userId: user.userId,
      username: user.username,
      name: user.name,
    };
  }
}
