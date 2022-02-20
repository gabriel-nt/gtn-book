import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesController } from './infra/http/controllers/categories.controller';
import { Category } from './infra/typeorm/entities/category.entity';
import { CategoriesRepository } from './infra/typeorm/repositories/categories.repository';
import { CreateCategoryService } from './services/createCategory.service';
import { DeleteCategoryService } from './services/deleteCategory.service';
import { ListCategoriesService } from './services/listCategories.service';
import { ListCategoryByTitleService } from './services/listCategoryByTitle.service';
import { UpdateCategoryService } from './services/updateCategory.service';

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
