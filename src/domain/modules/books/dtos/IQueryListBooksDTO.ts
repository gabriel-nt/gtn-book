import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class IQueryListBooksDTO {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  category_id: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  author: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional()
  page: string;

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional()
  amount: string;
}
