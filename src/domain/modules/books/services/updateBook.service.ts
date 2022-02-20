import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, Injectable } from '@nestjs/common';

import { ICreateBookDTO } from '../dtos/ICreateBookDTO';
import { Book } from '../infra/http/typeorm/entities/book.entity';
import { IBooksRepository } from '../repositories/IBooksRepository';
import { BooksRepository } from '../infra/http/typeorm/repositories/books.repository';

@Injectable()
export class UpdateBookService {
  constructor(
    @InjectRepository(BooksRepository)
    private booksRepository: IBooksRepository,
  ) {}

  async execute(id: string, data: ICreateBookDTO): Promise<Book> {
    const findCategory = await this.booksRepository.findById(id);

    if (!findCategory) {
      throw new HttpException('Book not found', 404);
    }

    const book = await this.booksRepository.updateBook(id, data);

    return book;
  }
}
