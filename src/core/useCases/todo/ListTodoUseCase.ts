import { ITodo } from '@/core/models/Todo';
import { TodoService } from '@/core/services/TodoService';
import { IListTodoResponse } from '@/ports/controller/TodoController';
import { IFindByFilterParams } from '@/ports/repository/TodoRepository';
import { IPaginationData, Pagination } from '@/utils/Pagination';

export class ListTodoUseCase {
  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  async execute(
    pagination: Pagination,
    title?: string,
    completed?: boolean
  ): Promise<IListTodoResponse & IPaginationData> {
    const filter = this.buildFilter(title, completed);

    const count = await this.todoService.countDocuments(filter);

    const paginationData = pagination.getPaginationData(count);

    const arr = await this.todoService.getTodosByFilter(
      filter,
      pagination.skip,
      pagination.limit
    );

    return {
      ...paginationData,
      results: arr || [],
    };
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
