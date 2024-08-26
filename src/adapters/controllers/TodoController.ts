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
import { Request, Response } from 'express';

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
    req: Request<IListTodoRequestParams>,
    res: Response
  ): Promise<Response<ITodo[]>> {
    try {
      const { title } = req.query as IListTodoRequestParams;

      const todos = await this.listTodoUseCase.execute(title);

      return res.json(todos);
    } catch (err) {
      return res.status(500).json({ error: (err as Error).message });
    }
  }

  async getTodo(
    req: Request<IGetTodoRequestParams>,
    res: Response
  ): Promise<Response<ITodo>> {
    try {
      const { id } = req.params;

      const todo = await this.getTodoUseCase.execute(id);

      return res.json(todo);
    } catch (err) {
      console.log('errou');

      return res.status(500).json({ error: (err as Error).message });
    }
  }

  async saveTodo(
    req: Request<ISaveTodoRequestBody>,
    res: Response
  ): Promise<Response> {
    try {
      const { title } = req.body as ISaveTodoRequestBody;

      const todo = await this.saveTodoUseCase.execute(title);

      return res.json(todo);
    } catch (err) {
      return res.status(500).json({ error: (err as Error).message });
    }
  }
}
