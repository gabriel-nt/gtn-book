import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './infra/http/controllers/categories.controller';
import { Category } from './infra/typeorm/entities/category.entity';
import { CategoriesRepository } from './infra/typeorm/repositories/categories.repository';
import { CreateCategoryService } from './services/createCategory.service';
import { ListCategoriesService } from './services/listCategories.service';
import { ListCategoryByTitleService } from './services/listCategoryByTitle.service';

@Module({
  controllers: [CategoriesController],
  imports: [TypeOrmModule.forFeature([Category, CategoriesRepository])],
  providers: [
    CreateCategoryService,
    ListCategoriesService,
    ListCategoryByTitleService,
  ],
})
export class CategoriesModule {}
