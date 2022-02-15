import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { IAuthenticateUserDTO } from '../../../dtos/IAuthenticateUserDTO';
import { IResponse } from '../../../dtos/IResponseAuthenticate';
import { AuthenticateUserService } from '../../../services/authenticateUser.service';

@Controller('sessions')
export class AuthenticateController {
  constructor(private authenticateUserService: AuthenticateUserService) {}

  @Post('/')
  @HttpCode(200)
  async create(@Body() data: IAuthenticateUserDTO): Promise<IResponse> {
    const response = await this.authenticateUserService.execute(data);

    return response;
  }
}
