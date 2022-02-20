import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category } from './infra/typeorm/entities/category.entity';
import { UpdateCategoryService } from './services/updateCategory.service';
import { CreateCategoryService } from './services/createCategory.service';
import { ListCategoriesService } from './services/listCategories.service';
import { DeleteCategoryService } from './services/deleteCategory.service';
import { ListCategoryByTitleService } from './services/listCategoryByTitle.service';
import { CategoriesController } from './infra/http/controllers/categories.controller';
import { CategoriesRepository } from './infra/typeorm/repositories/categories.repository';

@Module({
  controllers: [CategoriesController],
  imports: [TypeOrmModule.forFeature([Category, CategoriesRepository])],
  providers: [
    CreateCategoryService,
    ListCategoriesService,
    UpdateCategoryService,
    DeleteCategoryService,
    ListCategoryByTitleService,
  ],
})
export class CategoriesModule {}
