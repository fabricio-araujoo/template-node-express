import { Todo } from "@/core/models/Todo";
import { Response } from "express";

export interface ITodoController {
  getTodosController(res: Response): Promise<Response<Todo[]>>;
}
