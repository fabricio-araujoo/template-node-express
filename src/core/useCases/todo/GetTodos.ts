import { Todo } from "@/core/models/Todo";
import { ITodoService } from "@/core/services/TodoService";

export class GetTodos {
  private todoService: ITodoService;

  constructor(todoService: ITodoService) {
    this.todoService = todoService;
  }

  async execute(): Promise<Todo[] | null> {
    return await this.todoService.getTodos();
  }
}
