import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DateProviderModule } from '../../../infrastructure/provider/DateProvider';
import { AuthenticateController } from './infra/http/controllers/authenticate.controller';
import { UsersController } from './infra/http/controllers/users.controller';
import { User } from './infra/typeorm/entities/user.entity';
import { UsersRepository } from './infra/typeorm/repositories/users.repository';
import { UsersTokensRepository } from './infra/typeorm/repositories/usersTokens.repository';
import { AuthenticateUserService } from './services/authenticateUser.service';
import { CreateUserService } from './services/createUser.service';
import { RefreshTokenService } from './services/refreshToken.service';

@Module({
  imports: [
    DateProviderModule,
    TypeOrmModule.forFeature([User, UsersRepository, UsersTokensRepository]),
  ],
  controllers: [UsersController, AuthenticateController],
  providers: [CreateUserService, AuthenticateUserService, RefreshTokenService],
})
export class UsersModule {}
