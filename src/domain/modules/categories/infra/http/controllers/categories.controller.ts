import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ICreateCategoryDTO } from '../../../dtos/ICreateCategoryDTO';

@Controller('/categories')
export class CategoriesController {
  constructor() {}

  @Post('/')
  @HttpCode(201)
  async create(@Body() data: ICreateCategoryDTO): Promise<void> {
    const response = await 'tr';

    // return response;
  }
}
