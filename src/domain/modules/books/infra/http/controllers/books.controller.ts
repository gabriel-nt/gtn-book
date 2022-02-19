import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { CreateBookService } from '../../../services/createBook.service';
import { ICreateBookDTO } from '../../../dtos/ICreateBookDTO';
import { Book } from '../typeorm/entities/book.entity';
import { ListBooksService } from '../../../services/listBooks.service';
import { ListBooksByCategoryIdService } from '../../../services/listBooksByCategoryId.service';
import { ListBooksByAuthorService } from '../../../services/listBooksByAuthor.service';

@Controller('books')
export class BooksController {
  constructor(
    private createBookService: CreateBookService,
    private listBooksService: ListBooksService,
    private listBooksByAuthorService: ListBooksByAuthorService,
    private listBooksByCategoryService: ListBooksByCategoryIdService,
  ) {}

  @Post('/')
  @HttpCode(201)
  async create(@Body() data: ICreateBookDTO): Promise<Book> {
    const response = await this.createBookService.execute(data);

    return response;
  }

  @Get('/')
  @HttpCode(200)
  async list(
    @Query('category_id') category_id?: string,
    @Query('author') author?: string,
  ): Promise<Book[]> {
    if (category_id) {
      const response = await this.listBooksByCategoryService.execute(
        category_id,
      );

      return response;
    }

    if (author) {
      const response = await this.listBooksByAuthorService.execute(author);

      return response;
    }

    const response = await this.listBooksService.execute();

    return response;
  }
}
