import { Module } from '@nestjs/common';
import { UsersModule } from './domain/modules/users/users.module';
import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';

@Module({
  imports: [TypeOrmConfigModule, UsersModule],
})
export class AppModule {}
