import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsObject, IsString } from 'class-validator';

class IAdditionalInfo {
  @ApiProperty()
  isbn10: string;

  @ApiProperty()
  isbn13: string;

  @ApiProperty()
  language: string;

  @ApiProperty()
  pageCount: number;

  @ApiProperty()
  publisher: string;

  @ApiProperty()
  published: number;
}

export class ICreateBookDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  image_url: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  authors: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  category_id: string;

  @IsObject()
  @IsNotEmpty()
  @ApiProperty({
    type: IAdditionalInfo,
  })
  additional_info: IAdditionalInfo;
}
