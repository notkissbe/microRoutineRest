import { ConflictException, Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as argon2 from 'argon2';

import { User } from '@prisma/client';
import { th } from '@faker-js/faker/.';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(username: string): Promise<User | undefined> {
    let user: User;
    try{ user = await this.prisma.user.findUnique({
      where: { username: username },
    })}
    catch (e) {
      console.error(e);
    }
    return user;
  }

  async create(username: string, password: string): Promise<User> {
    if (await this.findOne(username)){
      throw new ConflictException("Már létezik ilyen felhasználó");
    } 
    const hashedPassword = await argon2.hash(password);
    try{ await this.prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });}
    catch (e) {
      console.error(e);
      throw new NotAcceptableException("Hiba történt a felhasználó létrehozása során");
    }
    return this.findOne(username);
  }
  
  async testIfUsersEmpty():Promise<Boolean> {
    let users = await this.prisma.user.findMany();
    return users.length == 0;
  }

}
