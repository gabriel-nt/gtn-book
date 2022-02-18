import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../infra/typeorm/entities/category.entity';
import { CategoriesRepository } from '../infra/typeorm/repositories/categories.repository';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

@Injectable()
export class ListCategoriesService {
  constructor(
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.findAll();

    return categories;
  }
}
