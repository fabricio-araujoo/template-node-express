import { Request, Response } from 'express';

const errorHandlingMiddleware = (err: Error, req: Request, res: Response) => {
  res.status(500).send('Something went wrong!');
};

export default errorHandlingMiddleware;
