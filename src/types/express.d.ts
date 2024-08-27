import { Pagination } from '@/utils/Pagination';

declare global {
  namespace Express {
    interface Request {
      pagination?: Pagination;
    }
  }
}
