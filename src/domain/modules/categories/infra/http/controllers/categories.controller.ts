import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Query,
  Delete,
  HttpCode,
  Controller,
} from '@nestjs/common';

import {
  ApiTags,
  ApiQuery,
  getSchemaPath,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

import { Category } from '../../typeorm/entities/category.entity';
import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';
import { CreateCategoryService } from '../../../services/createCategory.service';
import { ListCategoriesService } from '../../../services/listCategories.service';
import { UpdateCategoryService } from '../../../services/updateCategory.service';
import { DeleteCategoryService } from '../../../services/deleteCategory.service';
import { ListCategoryByTitleService } from '../../../services/listCategoryByTitle.service';

@ApiBearerAuth()
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
  @ApiTags('categories')
  @ApiCreatedResponse({
    description: 'The category has been successfully created.',
    type: Category,
  })
  async create(@Body() data: ICreateCategoryDTO): Promise<Category> {
    const response = await this.createCategoryService.execute(data);

    return response;
  }

  @Get('/')
  @HttpCode(200)
  @ApiTags('categories')
  @ApiOkResponse({
    schema: {
      items: { $ref: getSchemaPath(Category) },
    },
  })
  @ApiQuery({
    name: 'title',
    required: false,
    type: String,
  })
  async list(
    @Query('title')
    title?: string,
  ): Promise<Category[] | Category> {
    if (title) {
      const response = await this.listCategoryByTitleService.execute(title);

      return response;
    }

    const response = await this.listCategoriesService.execute();

    return response;
  }

  @Put('/:id')
  @HttpCode(200)
  @ApiTags('categories')
  @ApiOkResponse({
    description: 'The category has been successfully updated.',
    type: Category,
  })
  async update(
    @Param('id') id: string,
    @Body() data: ICreateCategoryDTO,
  ): Promise<Category> {
    const response = await this.updateCategoryService.execute(id, data);

    return response;
  }

  @Delete('/:id')
  @HttpCode(204)
  @ApiTags('categories')
  @ApiNoContentResponse({
    description: 'The category has been successfully deleted.',
  })
  async delete(@Param('id') id: string): Promise<void> {
    await this.deleteCategoryService.execute(id);
  }
}
