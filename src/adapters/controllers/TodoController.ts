import { Todo } from "@/core/models/Todo";
import { GetTodo } from "@/core/useCases/todo/GetTodo";
import { GetTodos } from "@/core/useCases/todo/GetTodos";
import {
  IGetTodoRequestParams,
  IGetTodosRequestParams,
  ITodoController,
} from "@/ports/controller/TodoController";
import { Request, Response } from "express";

export class TodoController implements ITodoController {
  private getTodos: GetTodos;
  private getTodo: GetTodo;

  constructor(getTodos: GetTodos, getTodo: GetTodo) {
    this.getTodos = getTodos;
    this.getTodo = getTodo;
  }

  async getTodosController(
    req: Request<IGetTodosRequestParams>,
    res: Response
  ): Promise<Response<Todo[]>> {
    try {
      const { title } = req.query as IGetTodosRequestParams;

      const todos = await this.getTodos.execute(title);

      return res.json(todos);
    } catch (err) {
      return res.status(500).json({ error: (err as Error).message });
    }
  }

  async getTodoController(
    req: Request<IGetTodoRequestParams>,
    res: Response
  ): Promise<Response<Todo>> {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(500).json({ error: "id param is required" });
      }

      const todo = await this.getTodo.execute(id);

      return res.json(todo);
    } catch (err) {
      return res.status(500).json({ error: (err as Error).message });
    }
  }
}
