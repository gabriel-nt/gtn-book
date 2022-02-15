import { EntityRepository, Repository } from 'typeorm';
import { ICreateUserTokenDTO } from '../../../dtos/ICreateUserTokenDTO';
import { IUsersTokensRepository } from '../../../repositories/IUsersTokensRepository';
import { UserTokens } from '../entities/usersTokens.entity';

@EntityRepository(UserTokens)
class UsersTokensRepository
  extends Repository<UserTokens>
  implements IUsersTokensRepository
{
  async createToken({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.create({
      expires_date,
      refresh_token,
      user_id,
    });

    await this.save(userToken);

    return userToken;
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UserTokens> {
    const userToken = await this.findOne({
      user_id,
      refresh_token,
    });

    return userToken;
  }

  async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
    const userToken = await this.findOne({
      refresh_token,
    });

    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    await this.delete(id);
  }
}

export { UsersTokensRepository };
