import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, Injectable } from '@nestjs/common';

import { IResponse } from '../dtos/IResponseAuthenticate';
import auth from '../../../../infrastructure/config/auth/auth';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { IAuthenticateUserDTO } from '../dtos/IAuthenticateUserDTO';
import { IUsersTokensRepository } from '../repositories/IUsersTokensRepository';
import { UsersRepository } from '../infra/typeorm/repositories/users.repository';
import { UsersTokensRepository } from '../infra/typeorm/repositories/usersTokens.repository';
import { DayjsDateProvider } from '../../../../infrastructure/provider/DateProvider/implementations/DayjsDateProvider';

@Injectable()
class AuthenticateUserService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: IUsersRepository,

    @InjectRepository(UsersTokensRepository)
    private usersTokensRepository: IUsersTokensRepository,

    private dateProvider: DayjsDateProvider,
  ) {}

  async execute({ email, password }: IAuthenticateUserDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    const {
      secret_token,
      expires_in_token,
      secret_refresh_token,
      expires_in_refresh_token,
      expires_refresh_token_days,
    } = auth;

    if (!user) {
      throw new HttpException('Email or password incorrect', 400);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new HttpException('Email or password incorrect', 400);
    }

    const refresh_token = sign({ email }, secret_refresh_token, {
      subject: user.id,
      expiresIn: expires_in_refresh_token,
    });

    const refresh_token_expires_date = this.dateProvider.addDays(
      expires_refresh_token_days,
    );

    await this.usersTokensRepository.createToken({
      user_id: user.id,
      refresh_token,
      expires_date: refresh_token_expires_date,
    });

    const token = sign({}, secret_token, {
      subject: user.id,
      expiresIn: expires_in_token,
    });

    return {
      token,
      refresh_token,
      user: {
        name: user.name,
        email: user.email,
      },
    };
  }
}

export { AuthenticateUserService };
