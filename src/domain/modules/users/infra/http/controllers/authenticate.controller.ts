import { Request } from 'express';
import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';

import { IResponse } from '../../../dtos/IResponseAuthenticate';
import { IAuthenticateUserDTO } from '../../../dtos/IAuthenticateUserDTO';
import { RefreshTokenService } from '../../../services/refreshToken.service';
import { AuthenticateUserService } from '../../../services/authenticateUser.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('sessions')
export class AuthenticateController {
  constructor(
    private authenticateUserService: AuthenticateUserService,
    private refreshTokenService: RefreshTokenService,
  ) {}

  @Post('/')
  @HttpCode(200)
  @ApiTags('sessions')
  async create(@Body() data: IAuthenticateUserDTO): Promise<IResponse> {
    const response = await this.authenticateUserService.execute(data);

    return response;
  }

  @Post('/refresh-token')
  @HttpCode(200)
  @ApiTags('sessions')
  async generateRefreshToken(@Req() request: Request): Promise<IResponse> {
    const token =
      request.body.token ||
      request.query.token ||
      request.headers['x-access-token'];

    const response = await this.refreshTokenService.execute(token);

    return response;
  }
}
