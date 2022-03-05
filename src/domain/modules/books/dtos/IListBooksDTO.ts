import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Book } from '../infra/http/typeorm/entities/book.entity';

export class IListBooksDTO {
  @ApiProperty({
    type: 'array',
    items: {
      items: { $ref: getSchemaPath(Book) },
    },
  })
  books: Book[];

  @ApiProperty()
  page: number;

  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  totalPages: number;
}
