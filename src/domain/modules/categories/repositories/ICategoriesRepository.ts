import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../infra/typeorm/entities/category.entity';

interface ICategoriesRepository {
  findById(id: string): Promise<Category>;
  findByTitle(title: string): Promise<Category>;
  createCategory(data: ICreateCategoryDTO): Promise<Category>;
  updateCategory(id: string, data: ICreateCategoryDTO): Promise<Category>;
}

export { ICategoriesRepository };
