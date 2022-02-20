import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { Category } from '../../typeorm/entities/category.entity';
import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';
import { CreateCategoryService } from '../../../services/createCategory.service';
import { ListCategoriesService } from '../../../services/listCategories.service';
import { UpdateCategoryService } from '../../../services/updateCategory.service';
import { ListCategoryByTitleService } from '../../../services/listCategoryByTitle.service';
import { DeleteCategoryService } from '../../../services/deleteCategory.service';

@Controller('/categories')
export class CategoriesController {
  constructor(
    private createCategoryService: CreateCategoryService,
    private updateCategoryService: UpdateCategoryService,
    private listCategoriesService: ListCategoriesService,
    private deleteCategoryService: DeleteCategoryService,
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

  @Put('/:id')
  @HttpCode(200)
  async update(
    @Param('id') id: string,
    @Body() data: ICreateCategoryDTO,
  ): Promise<Category> {
    const response = await this.updateCategoryService.execute(id, data);

    return response;
  }

  @Delete('/:id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<void> {
    await this.deleteCategoryService.execute(id);
  }
}
