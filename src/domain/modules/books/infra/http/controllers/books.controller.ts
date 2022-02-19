import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ICreateBookDTO } from 'domain/modules/books/dtos/ICreateBookDTO';

@Controller('books')
export class BooksController {
  constructor() {}

  @Post('/')
  @HttpCode(201)
  async create(@Body('data') data: ICreateBookDTO): Promise<void> {}
}
