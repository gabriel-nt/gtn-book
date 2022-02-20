import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesRepository } from '../infra/typeorm/repositories/categories.repository';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

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
