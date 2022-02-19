import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from '../infra/http/typeorm/entities/book.entity';
import { BooksRepository } from '../infra/http/typeorm/repositories/books.repository';
import { IBooksRepository } from '../repositories/IBooksRepository';

@Injectable()
export class ListBooksByAuthorService {
  constructor(
    @InjectRepository(BooksRepository)
    private booksRepository: IBooksRepository,
  ) {}

  async execute(author: string): Promise<Book[]> {
    const books = await this.booksRepository.findByAuthor(author);

    return books;
  }
}
