import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateUrlSimple } from './create_url_simple';

export class CreateUrl extends CreateUrlSimple {
  @IsNotEmpty()
  shortUrl: string;

  @IsNotEmpty()
  visits: number;
}
