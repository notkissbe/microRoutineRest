import { ImATeapotException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { P } from '@faker-js/faker/dist/airline-BnpeTvY9';

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
    console.log(username, pass);
    if (!username || !pass) {
      throw new ImATeapotException('Nem adtál meg felhasználónevet vagy jelszót.');
    }
    if(await this.usersService.testIfUsersEmpty()) {
      throw new UnauthorizedException("Nincs még egyetlen felhasználó sem az adatbázisban");
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

  async testIfUsersEmpty():Promise<Boolean> {
    return this.usersService.testIfUsersEmpty();
  }
}
