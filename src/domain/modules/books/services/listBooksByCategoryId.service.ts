import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IListBooksDTO } from '../dtos/IListBooksDTO';
import { IPaginationDTO } from '../dtos/IPaginationDTO';
import { BooksRepository } from '../infra/http/typeorm/repositories/books.repository';
import { IBooksRepository } from '../repositories/IBooksRepository';

@Injectable()
export class ListBooksByCategoryIdService {
  constructor(
    @InjectRepository(BooksRepository)
    private booksRepository: IBooksRepository,
  ) {}

  async execute(
    category_id: string,
    pagination: IPaginationDTO,
  ): Promise<IListBooksDTO> {
    const books = await this.booksRepository.findByCategoryId(
      category_id,
      pagination,
    );

    return books;
  }
}
