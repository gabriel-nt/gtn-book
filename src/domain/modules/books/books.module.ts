import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './infra/http/controllers/books.controller';
import { Book } from './infra/http/typeorm/entities/book.entity';
import { BooksRepository } from './infra/http/typeorm/repositories/books.repository';

@Module({
  controllers: [BooksController],
  imports: [TypeOrmModule.forFeature([Book, BooksRepository])],
  providers: [],
})
export class BooksModule {}
