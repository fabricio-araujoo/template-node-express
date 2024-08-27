import { Response } from 'express';

export default class BaseError extends Error {
  code!: number;

  constructor(message: string = 'Erro no servidor', code: number = 500) {
    super();

    this.message = message;
    this.code = code;
  }

  send(res: Response) {
    res.status(this.code).send({
      message: this.message,
      code: this.code,
    });
  }
}
