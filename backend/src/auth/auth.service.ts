import { ImATeapotException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    if (!username || !pass) {
      throw new ImATeapotException('Nem adtál meg felhasználónevet vagy jelszót.');
    }
    const user = await this.usersService.findOne(username);
    if (await !argon2.verify(user.password, pass)) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(username: string, password: string) {
    if(!username || !password) {
        throw new ImATeapotException("Nem adtál meg felhasználónevet vagy jelszót");
        }
    const user =  this.usersService.create(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
