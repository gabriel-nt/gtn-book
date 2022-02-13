import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { IAuthenticateUserDTO } from '../../../dtos/IAuthenticateUserDTO';
import { AuthenticateUserService } from '../../../services/authenticateUser.service';

@Controller('sessions')
export class AuthenticateController {
  constructor(private authenticateUserService: AuthenticateUserService) {}

  @Post('/')
  @HttpCode(200)
  async create(@Body() data: IAuthenticateUserDTO): Promise<void> {
    await this.authenticateUserService.execute(data);
  }
}
