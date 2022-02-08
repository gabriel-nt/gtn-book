import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { CreateUserService } from '../../../services/createUser.service';

@Controller('users')
export class UsersController {
  constructor(private createUserService: CreateUserService) {}

  @Post('/')
  @HttpCode(201)
  create(@Body() data: ICreateUserDTO): void {
    this.createUserService.execute(data);
  }
}
