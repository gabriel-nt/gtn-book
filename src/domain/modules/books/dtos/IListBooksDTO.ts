import { Book } from '../infra/http/typeorm/entities/book.entity';

export interface IListBooksDTO {
  books: Book[];
  page: number;
  totalItems: number;
  totalPages: number;
}
