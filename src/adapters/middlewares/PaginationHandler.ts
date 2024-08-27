import { Pagination } from '@/utils/Pagination';
import { Request, Response, NextFunction } from 'express';
import BaseError from '../error/BaseError';

export type IPagination = {
  page: string;
  limit: string;
};

export default function paginationHandler(
  req: Request<unknown, unknown, unknown, IPagination>,
  res: Response,
  next: NextFunction
) {
  try {
    const { page, limit } = req.query;

    const _page = parseInt(page as string) || 1;
    const _limit = parseInt(limit as string) || 10;

    if (_page < 0 || _limit < 0) {
      next(new BaseError());
    }

    req.pagination = new Pagination(_page, _limit);

    next();
  } catch (err) {
    next(err);
  }
}
