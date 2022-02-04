import { Body, Controller, Post } from '@nestjs/common';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserService:  ) {}

  @Post('/')
  create(@Body() data: ICreateUserDTO): string {
    return 's';
  }
}
