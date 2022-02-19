import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../infra/typeorm/entities/category.entity';
import { CategoriesRepository } from '../infra/typeorm/repositories/categories.repository';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

@Injectable()
export class UpdateCategoryService {
  constructor(
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(id: string, data: ICreateCategoryDTO): Promise<Category> {
    const findCategory = await this.categoriesRepository.findById(id);

    if (!findCategory) {
      throw new HttpException('Category not found', 404);
    }

    const category = await this.categoriesRepository.updateCategory(id, data);

    return category;
  }
}
