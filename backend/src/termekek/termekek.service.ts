import { Injectable } from '@nestjs/common';
import { CreateTermekekDto } from './dto/create-termekek.dto';
import { UpdateTermekekDto } from './dto/update-termekek.dto';
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

@Injectable()
export class TermekekService {

  create(createTermekekDto: CreateTermekekDto) {
    createTermekekDto.keplink = "http://picsum.photos/" + Math.floor(Math.random()*100)+ "200/300";
    return prisma.termek.create({
      data: createTermekekDto
      });
  }

  async findAll() {
    return prisma.termek.findMany();
  }

  async findOne(id: number) {
    return prisma.termek.findUnique({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateTermekekDto: UpdateTermekekDto) {
    return await prisma.termek.update({
      where: {
        id: id
        },
        data: updateTermekekDto
        });
  }

  async remove(id: number) {
    return await prisma.termek.delete({
      where: {
        id: id
      }
      });
  }
}
