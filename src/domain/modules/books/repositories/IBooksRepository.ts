import { ICreateBookDTO } from '../dtos/ICreateBookDTO';
import { IListBooksDTO } from '../dtos/IListBooksDTO';
import { IPaginationDTO } from '../dtos/IPaginationDTO';
import { Book } from '../infra/http/typeorm/entities/book.entity';

export interface IBooksRepository {
  createBook(data: ICreateBookDTO): Promise<Book>;
  findAll(pagination: IPaginationDTO): Promise<IListBooksDTO>;
  findById(id: string): Promise<Book>;
  findByTitle(title: string): Promise<Book>;
  findByCategoryId(
    category_id: string,
    pagination: IPaginationDTO,
  ): Promise<IListBooksDTO>;
  updateBook(id: string, data: ICreateBookDTO): Promise<Book>;
  findByAuthor(
    author: string,
    pagination: IPaginationDTO,
  ): Promise<IListBooksDTO>;
}
