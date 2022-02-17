import { IsNotEmpty, IsString } from 'class-validator';

export class ICreateCategoryDTO {
  @IsString()
  @IsNotEmpty()
  title: string;
}
