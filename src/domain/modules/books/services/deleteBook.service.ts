import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, Injectable } from '@nestjs/common';

import { IBooksRepository } from '../repositories/IBooksRepository';
import { BooksRepository } from '../infra/http/typeorm/repositories/books.repository';

@Injectable()
export class DeleteBookService {
  constructor(
    @InjectRepository(BooksRepository)
    private booksRepository: IBooksRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const findCategory = await this.booksRepository.findById(id);

    if (!findCategory) {
      throw new HttpException('Book not found', 404);
    }

    await this.booksRepository.deleteBook(id);
  }
}
