import { PartialType } from '@nestjs/swagger';
import { CreateTermekekDto } from './create-termekek.dto';

export class UpdateTermekekDto extends PartialType(CreateTermekekDto) {}
