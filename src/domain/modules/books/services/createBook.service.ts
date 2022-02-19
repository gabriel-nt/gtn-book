import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateBookDTO } from '../dtos/ICreateBookDTO';
import { Book } from '../infra/http/typeorm/entities/book.entity';
import { BooksRepository } from '../infra/http/typeorm/repositories/books.repository';
import { IBooksRepository } from '../repositories/IBooksRepository';

@Injectable()
export class CreateBookService {
  constructor(
    @InjectRepository(BooksRepository)
    private booksRepository: IBooksRepository,
  ) {}

  async execute(data: ICreateBookDTO): Promise<Book> {
    const findBook = await this.booksRepository.findByTitle(data.title);

    if (findBook) {
      throw new HttpException('Book already exists', 400);
    }

    const book = await this.booksRepository.createBook(data);

    return book;
  }
}
