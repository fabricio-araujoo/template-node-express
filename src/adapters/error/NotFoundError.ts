import BaseError from './BaseError';

export default class NotFoundError extends BaseError {
  constructor() {
    super('Página não encontrada', 404);
  }
}
