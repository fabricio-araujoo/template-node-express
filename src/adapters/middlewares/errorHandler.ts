import BadRequestError from '@/adapters/error/BadRequestError';
import BaseError from '@/adapters/error/BaseError';
import ValidationError from '@/adapters/error/ValidationError';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import NotFoundError from '../error/NotFoundError';

export default function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof mongoose.Error.CastError) {
    new BadRequestError().send(res);
  }

  if (err instanceof mongoose.Error.ValidationError) {
    new ValidationError(err).send(res);
  }

  if (err instanceof NotFoundError) {
    err.send(res);
  }

  new BaseError((err as Error).message, 500).send(res);
}
