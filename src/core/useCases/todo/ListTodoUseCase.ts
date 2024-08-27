import { ITodo } from '@/core/models/Todo';
import { TodoService } from '@/core/services/TodoService';
import { IFindByFilterParams } from '@/ports/repository/TodoRepository';

export class ListTodoUseCase {
  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  async execute(title?: string, completed?: boolean): Promise<ITodo[]> {
    const filter = this.buildFilter(title, completed);

    const arr = await this.todoService.getTodosByFilter(filter);

    return arr || [];
  }

  private buildFilter(title?: string, completed?: boolean) {
    const filter: IFindByFilterParams = {};

    if (title) {
      filter.title = new RegExp(title, 'i');
    }

    if (completed !== null && completed !== undefined) {
      filter.completed = completed;
    }

    return filter;
  }
}
