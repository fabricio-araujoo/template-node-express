import { NextFunction, Request, Response } from 'express';
import NotFoundError from '../error/NotFoundError';

export default function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  new NotFoundError().send(res);
}
