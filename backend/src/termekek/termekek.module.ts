import { Module } from '@nestjs/common';
import { TermekekService } from './termekek.service';
import { TermekekController } from './termekek.controller';

@Module({
  controllers: [TermekekController],
  providers: [TermekekService],
})
export class TermekekModule {}
