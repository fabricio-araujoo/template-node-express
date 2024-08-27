import { ITodo } from '@/core/models/Todo';
import { TodoService } from '@/core/services/TodoService';

export class SaveTodoUseCase {
  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  async execute(title: string): Promise<ITodo> {
    return this.todoService.saveTodo(title);
  }
}
