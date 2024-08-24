import { Todo, TodoModel } from "@/core/models/Todo";
import { GetTodos } from "@/core/useCases/todo/GetTodos";
import { ITodoController } from "@/ports/controller/TodoController";
import { Response } from "express";

export class TodoController implements ITodoController {
  private getTodos: GetTodos;

  constructor(getTodos: GetTodos) {
    this.getTodos = getTodos;
  }

  async getTodosController(res: Response): Promise<Response<Todo[]>> {
    try {
      const todos = await this.getTodos.execute();
      const response = res.json(todos);

      return response;
    } catch (err) {
      return res.status(500).json({ error: (err as Error).message });
    }
  }
}
