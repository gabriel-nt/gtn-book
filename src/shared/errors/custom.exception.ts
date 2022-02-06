import { HttpException } from '@nestjs/common';

export class CustomException extends HttpException {
  public readonly message: string;
  public readonly httpStatus: number;

  constructor(message: string, httpStatus = 400) {
    super(message, httpStatus);
  }
}
