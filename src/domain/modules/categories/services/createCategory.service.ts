import { InjectRepository } from '@nestjs/typeorm';
import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../infra/typeorm/entities/category.entity';
import { CategoriesRepository } from '../infra/typeorm/repositories/categories.repository';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

export class CreateCategoryService {
  constructor(
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ title }: ICreateCategoryDTO): Promise<Category> {
    const category = await this.categoriesRepository.createCategory({
      title,
    });

    return category;
  }
}
