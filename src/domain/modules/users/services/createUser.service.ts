import { hash } from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, Injectable } from '@nestjs/common';

import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { UsersRepository } from '../infra/typeorm/repositories/users.repository';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, name, password }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new HttpException('User already exists', 409);
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.createUser({
      email,
      name,
      password: passwordHash,
    });
  }
}
