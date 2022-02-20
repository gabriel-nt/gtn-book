import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class IQueryListBooksDTO {
  @IsString()
  @IsOptional()
  category_id: string;

  @IsString()
  @IsOptional()
  author: string;

  @IsString()
  @IsNotEmpty()
  page: string;

  @IsString()
  @IsNotEmpty()
  amount: string;
}
