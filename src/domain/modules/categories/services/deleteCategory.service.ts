import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ICategoriesRepository } from '../repositories/ICategoriesRepository';
import { CategoriesRepository } from '../infra/typeorm/repositories/categories.repository';

@Injectable()
export class DeleteCategoryService {
  constructor(
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.categoriesRepository.deleteCategory(id);
  }
}
