import { Test, TestingModule } from '@nestjs/testing';
import { TermekekController } from './termekek.controller';
import { TermekekService } from './termekek.service';

describe('TermekekController', () => {
  let controller: TermekekController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TermekekController],
      providers: [TermekekService],
    }).compile();

    controller = module.get<TermekekController>(TermekekController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
