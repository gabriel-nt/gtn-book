import { Module } from '@nestjs/common';
import { DateProviderModule } from '../../../infrastructure/provider/DateProvider';

@Module({
  controllers: [],
  imports: [DateProviderModule],
  providers: [],
})
export class CategoriesModule {}
