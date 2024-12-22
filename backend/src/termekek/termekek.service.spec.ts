import { Test, TestingModule } from '@nestjs/testing';
import { TermekekService } from './termekek.service';

describe('TermekekService', () => {
  let service: TermekekService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TermekekService],
    }).compile();

    service = module.get<TermekekService>(TermekekService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
