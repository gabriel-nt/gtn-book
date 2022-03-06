import { Request } from 'express';
import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';

import { IAuthenticateUserResponse } from '../../../dtos/IAuthenticateUserResponse';
import { IAuthenticateUserDTO } from '../../../dtos/IAuthenticateUserDTO';
import { RefreshTokenService } from '../../../services/refreshToken.service';
import { AuthenticateUserService } from '../../../services/authenticateUser.service';
import { ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller('sessions')
export class AuthenticateController {
  constructor(
    private authenticateUserService: AuthenticateUserService,
    private refreshTokenService: RefreshTokenService,
  ) {}

  @Post('/')
  @HttpCode(200)
  @ApiTags('sessions')
  @ApiOkResponse({
    type: IAuthenticateUserResponse,
  })
  async create(
    @Body() data: IAuthenticateUserDTO,
  ): Promise<IAuthenticateUserResponse> {
    const response = await this.authenticateUserService.execute(data);

    return response;
  }

  @Post('/refresh-token')
  @HttpCode(200)
  @ApiTags('sessions')
  @ApiOkResponse({
    type: IAuthenticateUserResponse,
  })
  @ApiHeader({
    name: 'x-access-token',
    description: 'Access token',
    required: false,
  })
  async generateRefreshToken(
    @Req() request: Request,
  ): Promise<IAuthenticateUserResponse> {
    const token =
      request.body.token ||
      request.query.token ||
      request.headers['x-access-token'];

    const response = await this.refreshTokenService.execute(token);

    return response;
  }
}
