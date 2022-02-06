import { hash } from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { CustomException } from '../../shared/errors/custom.exception';
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
      throw new CustomException('User already exists');
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.createUser({
      email,
      name,
      password: passwordHash,
    });
  }
}
