import { EntityRepository, Like, Repository } from 'typeorm';

import { Book } from '../entities/book.entity';
import { IListBooksDTO } from '../../../../dtos/IListBooksDTO';
import { ICreateBookDTO } from '../../../../dtos/ICreateBookDTO';
import { IPaginationDTO } from '../../../../dtos/IPaginationDTO';
import { IBooksRepository } from '../../../../repositories/IBooksRepository';
import { getPagination } from '../../../../../../utils';

@EntityRepository(Book)
export class BooksRepository
  extends Repository<Book>
  implements IBooksRepository
{
  async findAll({ page, amount }: IPaginationDTO): Promise<IListBooksDTO> {
    const [books, count] = await this.findAndCount({
      relations: ['category'],
      take: amount,
      skip: page === 1 ? 0 : page * amount,
    });

    return {
      books,
      ...getPagination({ page, amount, count }),
    };
  }

  async findById(id: string): Promise<Book> {
    const book = await this.findOne(id, {
      relations: ['category'],
    });

    return book;
  }

  async findByTitle(title: string): Promise<Book> {
    const book = await this.findOne({
      where: {
        title,
      },
      relations: ['category'],
    });

    return book;
  }

  async findByCategoryId(
    category_id: string,
    { page, amount }: IPaginationDTO,
  ): Promise<IListBooksDTO> {
    const [books, count] = await this.findAndCount({
      where: {
        category_id,
      },
      relations: ['category'],
      take: amount,
      skip: page === 1 ? 0 : page * amount,
    });

    return {
      books,
      ...getPagination({ page, amount, count }),
    };
  }

  async findByAuthor(
    author: string,
    { page, amount }: IPaginationDTO,
  ): Promise<IListBooksDTO> {
    const [books, count] = await this.findAndCount({
      where: {
        authors: Like(`%${author}%`),
      },
      relations: ['category'],
      take: amount,
      skip: page === 1 ? 0 : page * amount,
    });

    return {
      books,
      ...getPagination({ page, amount, count }),
    };
  }

  async createBook({
    title,
    description,
    image_url,
    authors,
    category_id,
    additional_info,
  }: ICreateBookDTO): Promise<Book> {
    const book = this.create({
      title,
      description,
      image_url,
      authors,
      category_id,
      additional_info,
    });

    await this.save(book);

    return book;
  }

  async updateBook(
    id: string,
    {
      title,
      description,
      image_url,
      authors,
      category_id,
      additional_info,
    }: ICreateBookDTO,
  ): Promise<Book> {
    const book = await this.findOne(id);

    Object.assign(book, {
      title,
      description,
      image_url,
      authors,
      category_id,
      additional_info,
    });

    await this.save(book);

    return book;
  }
}
