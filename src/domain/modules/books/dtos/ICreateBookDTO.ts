import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class ICreateBookDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  image_url: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  authors: string;

  @IsString()
  @IsNotEmpty()
  category_id: string;

  @IsObject()
  @IsNotEmpty()
  additional_info: {
    isbn10: string;
    isbn13: string;
    language: string;
    pageCount: number;
    publisher: string;
    published: number;
  };
}
