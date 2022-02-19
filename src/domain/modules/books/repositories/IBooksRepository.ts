import { ICreateBookDTO } from '../dtos/ICreateBookDTO';
import { Book } from '../infra/http/typeorm/entities/book.entity';

export interface IBooksRepository {
  createBook(data: ICreateBookDTO): Promise<Book>;
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book>;
  findByTitle(title: string): Promise<Book>;
  findByAuthor(author: string): Promise<Book[]>;
  findByCategoryId(category_id: string): Promise<Book[]>;
  updateBook(id: string, data: ICreateBookDTO): Promise<Book>;
}
