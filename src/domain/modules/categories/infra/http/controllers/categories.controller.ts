import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';
import { CreateCategoryService } from '../../../services/createCategory.service';
import { ListCategoriesService } from '../../../services/listCategories.service';
import { Category } from '../../typeorm/entities/category.entity';

@Controller('/categories')
export class CategoriesController {
  constructor(
    private createCategoryService: CreateCategoryService,
    private listCategoriesService: ListCategoriesService,
  ) {}

  @Post('/')
  @HttpCode(201)
  async create(@Body() data: ICreateCategoryDTO): Promise<Category> {
    const response = await this.createCategoryService.execute(data);

    return response;
  }

  @Get('/')
  @HttpCode(200)
  async list(): Promise<Category[]> {
    const response = await this.listCategoriesService.execute();

    return response;
  }
}
