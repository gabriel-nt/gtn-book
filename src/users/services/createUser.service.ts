import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import { UsersRepository } from '../infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../repositories/IUsersRepository';

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, name, password }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }
  }
}
