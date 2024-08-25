import { Todo } from "@/core/models/Todo";
import { Request, Response } from "express";
import { ObjectId } from "mongoose";

export interface ITodoController {
  listTodo(
    req: Request<IListTodoRequestParams>,
    res: Response
  ): Promise<Response<Todo[]>>;
  getTodo(
    req: Request<IGetTodoRequestParams>,
    res: Response
  ): Promise<Response<Todo>>;
  saveTodo(
    req: Request<ISaveTodoRequestBody>,
    res: Response
  ): Promise<Response<Todo>>;
}

export type IListTodoRequestParams = {
  title: string;
};

export type IGetTodoRequestParams = {
  id: string;
};

export type ISaveTodoRequestBody = {
  title: Todo["title"];
};
