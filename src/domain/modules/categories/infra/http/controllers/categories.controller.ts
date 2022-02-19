import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';

import { Category } from '../../typeorm/entities/category.entity';
import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';
import { CreateCategoryService } from '../../../services/createCategory.service';
import { ListCategoriesService } from '../../../services/listCategories.service';
import { ListCategoryByTitleService } from '../../../services/listCategoryByTitle.service';

@Controller('/categories')
export class CategoriesController {
  constructor(
    private createCategoryService: CreateCategoryService,
    private listCategoriesService: ListCategoriesService,
    private listCategoryByTitleService: ListCategoryByTitleService,
  ) {}

  @Post('/')
  @HttpCode(201)
  async create(@Body() data: ICreateCategoryDTO): Promise<Category> {
    const response = await this.createCategoryService.execute(data);

    return response;
  }

  @Get('/')
  @HttpCode(200)
  async list(@Query('title') title?: string): Promise<Category[] | Category> {
    if (title) {
      const response = await this.listCategoryByTitleService.execute(title);

      return response;
    }

    const response = await this.listCategoriesService.execute();

    return response;
  }
}
