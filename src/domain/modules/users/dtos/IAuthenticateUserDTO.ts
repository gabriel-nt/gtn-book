import { IsNotEmpty, IsString } from 'class-validator';

export class IAuthenticateUserDTO {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
