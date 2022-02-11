import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './infra/http/controllers/users.controller';
import { User } from './infra/typeorm/entities/user.entity';
import { UsersRepository } from './infra/typeorm/repositories/users.repository';
import { CreateUserService } from './services/createUser.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UsersRepository])],
  controllers: [UsersController],
  providers: [CreateUserService],
})
export class UsersModule {}
