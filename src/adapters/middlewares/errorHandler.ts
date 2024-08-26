import { Request, Response } from "express";

const errorHandlingMiddleware = (err: Error, req: Request, res: Response) => {
  console.error("Error: ", err.stack);

  res.status(500).send("Something went wrong!");
};

export default errorHandlingMiddleware;
