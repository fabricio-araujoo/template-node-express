import { ITodo } from '@/core/models/Todo';
import { TodoService } from '@/core/services/TodoService';
import { ObjectId } from 'mongoose';

export class GetTodoUseCase {
  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  async execute(id: string): Promise<ITodo | null> {
    return this.todoService.getTodoById(id as unknown as ObjectId);
  }
}
