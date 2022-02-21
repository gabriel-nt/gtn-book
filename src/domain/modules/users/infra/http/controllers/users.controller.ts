import { Body, Controller, HttpCode, Param, Post, Put } from '@nestjs/common';

import { User } from '../../typeorm/entities/user.entity';
import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '../../../dtos/IUpdateUserDTO';
import { CreateUserService } from '../../../services/createUser.service';
import { UpdateUserService } from '../../../services/updateUser.service';

@Controller('users')
export class UsersController {
  constructor(
    private createUserService: CreateUserService,
    private updateUserService: UpdateUserService,
  ) {}

  @Post('/')
  @HttpCode(201)
  async create(@Body() data: ICreateUserDTO): Promise<void> {
    await this.createUserService.execute(data);
  }

  @Put('/:id')
  @HttpCode(200)
  async update(
    @Param('id') id: string,
    @Body() data: IUpdateUserDTO,
  ): Promise<User> {
    const response = await this.updateUserService.execute(id, data);

    return response;
  }
}
