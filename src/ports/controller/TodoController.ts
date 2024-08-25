import { Todo } from "@/core/models/Todo";
import { Request, Response } from "express";

export interface ITodoController {
  getTodosController(
    req: Request<IGetTodosRequestParams>,
    res: Response
  ): Promise<Response<Todo[]>>;
  getTodoController(
    req: Request<IGetTodoRequestParams>,
    res: Response
  ): Promise<Response<Todo>>;
}

export type IGetTodosRequestParams = {
  title: string;
};

export type IGetTodoRequestParams = {
  id: Todo["id"];
};
