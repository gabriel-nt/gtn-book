import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './infra/http/controllers/books.controller';
import { Book } from './infra/http/typeorm/entities/book.entity';
import { BooksRepository } from './infra/http/typeorm/repositories/books.repository';
import { CreateBookService } from './services/createBook.service';
import { ListBooksService } from './services/listBooks.service';
import { ListBooksByAuthorService } from './services/listBooksByAuthor.service';
import { ListBooksByCategoryIdService } from './services/listBooksByCategoryId.service';

@Module({
  controllers: [BooksController],
  imports: [TypeOrmModule.forFeature([Book, BooksRepository])],
  providers: [
    CreateBookService,
    ListBooksService,
    ListBooksByAuthorService,
    ListBooksByCategoryIdService,
  ],
})
export class BooksModule {}
