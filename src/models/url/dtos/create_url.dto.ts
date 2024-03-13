import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUrl {
  @IsNotEmpty()
  url: string;

  @IsOptional()
  shortUrl: string;

  @IsOptional()
  visits: number;
}
