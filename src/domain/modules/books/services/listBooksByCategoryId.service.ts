import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../infra/http/typeorm/entities/book.entity';
import { BooksRepository } from '../infra/http/typeorm/repositories/books.repository';
import { IBooksRepository } from '../repositories/IBooksRepository';

@Injectable()
export class ListBooksByCategoryIdService {
  constructor(
    @InjectRepository(BooksRepository)
    private booksRepository: IBooksRepository,
  ) {}

  async execute(category_id: string): Promise<Book[]> {
    const books = await this.booksRepository.findByCategoryId(category_id);

    return books;
  }
}
