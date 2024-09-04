import { IsNotEmpty } from 'class-validator';

export class CreateUrlSimple {
  @IsNotEmpty()
  url: string;
}
