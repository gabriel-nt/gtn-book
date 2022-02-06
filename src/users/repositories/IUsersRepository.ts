import ICreateUserDTO from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';

interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  createUser(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
