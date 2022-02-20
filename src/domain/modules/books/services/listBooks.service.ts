import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IListBooksDTO } from '../dtos/IListBooksDTO';
import { IPaginationDTO } from '../dtos/IPaginationDTO';
import { BooksRepository } from '../infra/http/typeorm/repositories/books.repository';
import { IBooksRepository } from '../repositories/IBooksRepository';

@Injectable()
export class ListBooksService {
  constructor(
    @InjectRepository(BooksRepository)
    private booksRepository: IBooksRepository,
  ) {}

  async execute(pagination: IPaginationDTO): Promise<IListBooksDTO> {
    const books = await this.booksRepository.findAll(pagination);

    return books;
  }
}
