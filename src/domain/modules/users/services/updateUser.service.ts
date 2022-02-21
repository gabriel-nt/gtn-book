import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, Injectable } from '@nestjs/common';

import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';
import { User } from '../infra/typeorm/entities/user.entity';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { UsersRepository } from '../infra/typeorm/repositories/users.repository';

@Injectable()
export class UpdateUserService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string, data: IUpdateUserDTO): Promise<User> {
    const findUser = await this.usersRepository.findById(id);

    if (!findUser) {
      throw new HttpException('Profile not found', 404);
    }

    const category = await this.usersRepository.updateUser(id, data);

    return category;
  }
}
