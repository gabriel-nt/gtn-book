import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class ICreateUserTokenDTO {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsDate()
  @IsNotEmpty()
  expires_date: Date;

  @IsString()
  @IsNotEmpty()
  refresh_token: string;
}
