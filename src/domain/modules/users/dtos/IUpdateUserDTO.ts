import { IsNotEmpty, IsString } from 'class-validator';

export class IUpdateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}
