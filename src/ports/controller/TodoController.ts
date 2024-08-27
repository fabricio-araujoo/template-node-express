import { ITodo } from '@/core/models/Todo';
import { NextFunction, Request, Response } from 'express';

export interface ITodoController {
  listTodo(
    req: Request<unknown, unknown, unknown, IListTodoRequestParams>,
    res: Response<ITodo[]>,
    next: NextFunction
  ): Promise<Response<ITodo[]> | void>;
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
  title: string;
};

export type IGetTodoRequestParams = {
  id: string;
};

export type ISaveTodoRequestBody = {
  title: string;
};
