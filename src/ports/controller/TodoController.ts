import { ITodo } from "@/core/models/Todo";
import { Request, Response } from "express";

export interface ITodoController {
  listTodo(
    req: Request<IListTodoRequestParams>,
    res: Response
  ): Promise<Response<ITodo[]>>;
  getTodo(
    req: Request<IGetTodoRequestParams>,
    res: Response
  ): Promise<Response<ITodo>>;
  saveTodo(
    req: Request<ISaveTodoRequestBody>,
    res: Response
  ): Promise<Response<ITodo>>;
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
