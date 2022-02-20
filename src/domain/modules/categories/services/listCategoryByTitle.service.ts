import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Category } from '../infra/typeorm/entities/category.entity';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';
import { CategoriesRepository } from '../infra/typeorm/repositories/categories.repository';

@Injectable()
export class ListCategoryByTitleService {
  constructor(
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(title: string): Promise<Category> {
    const categories = await this.categoriesRepository.findByTitle(title);

    return categories;
  }
}
