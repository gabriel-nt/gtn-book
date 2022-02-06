import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './infra/typeorm/entities/User';
import { UsersController } from './infra/http/controllers/users.controller';
import { CreateUserService } from './services/createUser.service';
import { UsersRepository } from './infra/typeorm/repositories/UsersRepository';

@Module({
  imports: [TypeOrmModule.forFeature([User, UsersRepository])],
  controllers: [UsersController],
  providers: [CreateUserService],
})
export class UsersModule {}
