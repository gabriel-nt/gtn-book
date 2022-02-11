import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersModule } from './domain/modules/users/users.module';
import config from './infrastructure/config/typeorm/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config,
    }),
    UsersModule,
  ],
})
export class AppModule {}
