import { EntityRepository, Repository } from 'typeorm';

import { User } from '../entities/user.entity';
import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../../repositories/IUsersRepository';

@EntityRepository(User)
export class UsersRepository
  extends Repository<User>
  implements IUsersRepository
{
  async findByEmail(email: string): Promise<User> {
    const user = await this.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.findOne(id);

    return user;
  }

  async createUser({
    email,
    name,
    password,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.create({
      name,
      email,
      password,
      id,
    });

    await this.save(user);
  }
}
