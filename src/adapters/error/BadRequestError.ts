import BaseError from './BaseError';

export default class BadRequestError extends BaseError {
  constructor(
    message: string = 'Request inválida: valores incorretos',
    code: number = 400
  ) {
    super(message, code);
  }
}
