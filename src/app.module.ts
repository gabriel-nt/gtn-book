import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksModule } from './domain/modules/books/books.module';
import { CategoriesModule } from './domain/modules/categories/categories.module';
import { UsersModule } from './domain/modules/users/users.module';
import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';
import { AuthMiddleware } from './infrastructure/middleware/auth.middleware';

@Module({
  imports: [TypeOrmConfigModule, UsersModule, CategoriesModule, BooksModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('/books', '/categories');
  }
}
