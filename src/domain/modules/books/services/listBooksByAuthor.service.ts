import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IListBooksDTO } from '../dtos/IListBooksDTO';
import { IPaginationDTO } from '../dtos/IPaginationDTO';
import { IBooksRepository } from '../repositories/IBooksRepository';
import { BooksRepository } from '../infra/http/typeorm/repositories/books.repository';

@Injectable()
export class ListBooksByAuthorService {
  constructor(
    @InjectRepository(BooksRepository)
    private booksRepository: IBooksRepository,
  ) {}

  async execute(
    author: string,
    pagination: IPaginationDTO,
  ): Promise<IListBooksDTO> {
    const books = await this.booksRepository.findByAuthor(author, pagination);

    return books;
  }
}
