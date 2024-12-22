import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TermekekService } from './termekek.service';
import { CreateTermekekDto } from './dto/create-termekek.dto';
import { UpdateTermekekDto } from './dto/update-termekek.dto';

@Controller('termekek')
export class TermekekController {
  constructor(private readonly termekekService: TermekekService) {}

  @Post()
  create(@Body() createTermekekDto: CreateTermekekDto) {
    return this.termekekService.create(createTermekekDto);
  }

  @Get()
  findAll() {
    return this.termekekService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.termekekService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTermekekDto: UpdateTermekekDto) {
    return this.termekekService.update(+id, updateTermekekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.termekekService.remove(+id);
  }
}
