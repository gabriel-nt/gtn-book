import { EntityRepository, Repository } from 'typeorm';
import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';
import { ICategoriesRepository } from '../../../repositories/ICategoriesRepository';
import { Category } from '../entities/category.entity';

@EntityRepository(Category)
export class CategoriesRepository
  extends Repository<Category>
  implements ICategoriesRepository
{
  async findAll(): Promise<Category[]> {
    const categories = await this.find();

    return categories;
  }

  async findById(id: string): Promise<Category> {
    const category = await this.findOne(id);

    return category;
  }

  async findByTitle(title: string): Promise<Category> {
    const category = await this.findOne({
      where: {
        title,
      },
    });

    return category;
  }

  async createCategory({ title }: ICreateCategoryDTO): Promise<Category> {
    const category = this.create({
      title,
    });

    await this.save(category);

    return category;
  }

  async updateCategory(
    id: string,
    { title }: ICreateCategoryDTO,
  ): Promise<Category> {
    const category = await this.findOne(id);

    Object.assign(category, {
      title,
    });

    await this.save(category);

    return category;
  }

  async deleteCategory(id: string): Promise<void> {
    await this.delete(id);
  }
}
