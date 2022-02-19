import { ICreateBookDTO } from 'domain/modules/books/dtos/ICreateBookDTO';
import { IBooksRepository } from 'domain/modules/books/repositories/IBooksRepository';
import { EntityRepository, Like, Repository } from 'typeorm';
import { Book } from '../entities/book.entity';

@EntityRepository(Book)
export class BooksRepository
  extends Repository<Book>
  implements IBooksRepository
{
  async findAll(): Promise<Book[]> {
    const books = await this.find({
      relations: ['category'],
    });

    return books;
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

  async findByCategoryId(category_id: string): Promise<Book[]> {
    const books = await this.find({
      where: {
        category_id,
      },
      relations: ['category'],
    });

    return books;
  }

  async findByAuthor(author: string): Promise<Book[]> {
    const books = await this.find({
      where: {
        authors: Like(`%${author}%`),
      },
      relations: ['category'],
    });

    return books;
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
