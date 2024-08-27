import { IPagination } from '@/adapters/middlewares/PaginationHandler';
import { ITodo } from '@/core/models/Todo';
import { IPaginationData } from '@/utils/Pagination';
import { NextFunction, Request, Response } from 'express';

export interface ITodoController {
  listTodo(
    req: Request<unknown, unknown, unknown, IListTodoRequestParams>,
    res: Response<IListTodoResponse & IPaginationData>,
    next: NextFunction
  ): Promise<Response<IListTodoResponse & IPaginationData> | void>;
  getTodo(
    req: Request<IGetTodoRequestParams>,
    res: Response<ITodo | null>,
    next: NextFunction
  ): Promise<Response<ITodo> | void>;
  saveTodo(
    req: Request<unknown, unknown, ISaveTodoRequestBody>,
    res: Response<ITodo>,
    next: NextFunction
  ): Promise<Response<ITodo> | void>;
}

export type IListTodoRequestParams = {
  title?: string;
  completed?: boolean;
} & IPagination;

export type IListTodoResponse = {
  results: ITodo[];
};

export type IGetTodoRequestParams = {
  id: string;
};

export type ISaveTodoRequestBody = {
  title: string;
};
