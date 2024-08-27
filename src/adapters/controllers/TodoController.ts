import { ITodo } from '@/core/models/Todo';
import { TodoService } from '@/core/services/TodoService';
import { GetTodoUseCase } from '@/core/useCases/todo/GetTodoUseCase';
import { ListTodoUseCase } from '@/core/useCases/todo/ListTodoUseCase';
import { SaveTodoUseCase } from '@/core/useCases/todo/SaveTodoUseCase';
import {
  IGetTodoRequestParams,
  IListTodoRequestParams,
  ISaveTodoRequestBody,
  ITodoController,
} from '@/ports/controller/TodoController';
import { NextFunction, Request, Response } from 'express';

export class TodoController implements ITodoController {
  private listTodoUseCase: ListTodoUseCase;
  private getTodoUseCase: GetTodoUseCase;
  private saveTodoUseCase: SaveTodoUseCase;

  constructor(todoService: TodoService) {
    this.listTodoUseCase = new ListTodoUseCase(todoService);
    this.getTodoUseCase = new GetTodoUseCase(todoService);
    this.saveTodoUseCase = new SaveTodoUseCase(todoService);
  }

  async listTodo(
    req: Request<unknown, unknown, unknown, IListTodoRequestParams>,
    res: Response<ITodo[]>,
    next: NextFunction
  ): Promise<Response<ITodo[]> | void> {
    try {
      const { title, completed } = req.query;

      const todos = await this.listTodoUseCase.execute(title, completed);

      return res.json(todos);
    } catch (err) {
      next(err);
    }
  }

  async getTodo(
    req: Request<IGetTodoRequestParams>,
    res: Response<ITodo | null>,
    next: NextFunction
  ): Promise<Response<ITodo> | void> {
    try {
      const { id } = req.params;

      const todo = await this.getTodoUseCase.execute(id);

      return res.json(todo);
    } catch (err) {
      next(err);
    }
  }

  async saveTodo(
    req: Request<unknown, unknown, ISaveTodoRequestBody>,
    res: Response<ITodo>,
    next: NextFunction
  ): Promise<Response<ITodo> | void> {
    try {
      const { title } = req.body;

      const todo = await this.saveTodoUseCase.execute(title);

      return res.json(todo);
    } catch (err) {
      next(err);
    }
  }
}
