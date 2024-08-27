import { ITodo } from '@/core/models/Todo';
import { TodoService } from '@/core/services/TodoService';

export class ListTodoUseCase {
  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  async execute(title?: string, completed?: boolean): Promise<ITodo[]> {
    if (!title && !completed) {
      return this.getTodos();
    }

    return this.getFilteredTodos(title);
  }

  private async getTodos() {
    const arr = await this.todoService.getTodos();

    return arr || [];
  }

  private async getFilteredTodos(title?: string, completed?: boolean) {
    const byTitle = await this.todoService.getTodosByTitle(title || '');

    return byTitle || [];
  }
}
