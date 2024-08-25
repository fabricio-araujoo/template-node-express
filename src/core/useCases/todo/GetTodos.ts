import { Todo } from "@/core/models/Todo";
import { ITodoService } from "@/core/services/TodoService";

export class GetTodos {
  private todoService: ITodoService;

  constructor(todoService: ITodoService) {
    this.todoService = todoService;
  }

  async execute(title?: string): Promise<Todo[] | null> {
    if (!title) {
      return await this.todoService.getTodos(title);
    }

    return await this.todoService.getTodosByTitle(title);
  }
}
