import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './infra/typeorm/entities/user.entity';
import { CreateUserService } from './services/createUser.service';
import { RefreshTokenService } from './services/refreshToken.service';
import { UsersController } from './infra/http/controllers/users.controller';
import { AuthenticateUserService } from './services/authenticateUser.service';
import { UsersRepository } from './infra/typeorm/repositories/users.repository';
import { DateProviderModule } from '../../../infrastructure/provider/DateProvider';
import { AuthenticateController } from './infra/http/controllers/authenticate.controller';
import { UsersTokensRepository } from './infra/typeorm/repositories/usersTokens.repository';

@Module({
  imports: [
    DateProviderModule,
    TypeOrmModule.forFeature([User, UsersRepository, UsersTokensRepository]),
  ],
  controllers: [UsersController, AuthenticateController],
  providers: [CreateUserService, AuthenticateUserService, RefreshTokenService],
})
export class UsersModule {}
