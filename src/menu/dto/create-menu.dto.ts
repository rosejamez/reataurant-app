import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMenuDto {
  @IsNotEmpty()
  @IsString()
  dishName: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  category: string;
}
