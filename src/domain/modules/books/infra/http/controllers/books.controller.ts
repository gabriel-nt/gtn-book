import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import {
  ApiTags,
  ApiBearerAuth,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
} from '@nestjs/swagger';

import { Book } from '../typeorm/entities/book.entity';
import { IListBooksDTO } from '../../../dtos/IListBooksDTO';
import { ICreateBookDTO } from '../../../dtos/ICreateBookDTO';
import { IQueryListBooksDTO } from '../../../dtos/IQueryListBooksDTO';
import { ListBooksService } from '../../../services/listBooks.service';
import { CreateBookService } from '../../../services/createBook.service';
import { UpdateBookService } from '../../../services/updateBook.service';
import { DeleteBookService } from '../../../services/deleteBook.service';
import { ListBooksByAuthorService } from '../../../services/listBooksByAuthor.service';
import { ListBooksByCategoryIdService } from '../../../services/listBooksByCategoryId.service';

@ApiBearerAuth()
@Controller('books')
export class BooksController {
  constructor(
    private createBookService: CreateBookService,
    private listBooksService: ListBooksService,
    private updateBookService: UpdateBookService,
    private deleteBookService: DeleteBookService,
    private listBooksByAuthorService: ListBooksByAuthorService,
    private listBooksByCategoryService: ListBooksByCategoryIdService,
  ) {}

  @Post('/')
  @HttpCode(201)
  @ApiTags('books')
  @ApiCreatedResponse({
    description: 'The book has been successfully created.',
    type: Book,
  })
  async create(@Body() data: ICreateBookDTO): Promise<Book> {
    const response = await this.createBookService.execute(data);

    return response;
  }

  @Put('/:id')
  @HttpCode(200)
  @ApiTags('books')
  @ApiOkResponse({
    description: 'The book has been successfully updated.',
    type: Book,
  })
  async update(
    @Param('id') id: string,
    @Body() data: ICreateBookDTO,
  ): Promise<Book> {
    const response = await this.updateBookService.execute(id, data);
    return response;
  }

  @Get('/')
  @HttpCode(200)
  @ApiTags('books')
  @ApiOkResponse({
    type: IListBooksDTO,
  })
  async list(@Query() params: IQueryListBooksDTO): Promise<IListBooksDTO> {
    const { category_id, amount, author, page } = params;

    if (category_id) {
      const response = await this.listBooksByCategoryService.execute(
        category_id,
        {
          page: Number(page),
          amount: Number(amount),
        },
      );

      return response;
    }

    if (author) {
      const response = await this.listBooksByAuthorService.execute(author, {
        page: Number(page),
        amount: Number(amount),
      });

      return response;
    }

    const response = await this.listBooksService.execute({
      page: Number(page),
      amount: Number(amount),
    });

    return response;
  }

  @Delete('/:id')
  @HttpCode(204)
  @ApiTags('books')
  @ApiNoContentResponse({
    description: 'The book has been successfully deleted.',
  })
  async delete(@Param('id') id: string): Promise<void> {
    await this.deleteBookService.execute(id);
  }
}
