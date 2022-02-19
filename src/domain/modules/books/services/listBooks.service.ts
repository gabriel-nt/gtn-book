import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../infra/http/typeorm/entities/book.entity';
import { BooksRepository } from '../infra/http/typeorm/repositories/books.repository';
import { IBooksRepository } from '../repositories/IBooksRepository';

@Injectable()
export class ListBooksService {
  constructor(
    @InjectRepository(BooksRepository)
    private booksRepository: IBooksRepository,
  ) {}

  async execute(): Promise<Book[]> {
    const books = await this.booksRepository.findAll();

    return books;
  }
}
