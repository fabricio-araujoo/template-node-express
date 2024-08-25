import { ITodo } from "@/core/models/Todo";
import { TodoService } from "@/core/services/TodoService";

export class ListTodoUseCase {
  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  async execute(title?: string): Promise<ITodo[] | null> {
    if (!title) {
      return await this.todoService.getTodos();
    }

    return await this.todoService.getTodosByTitle(title);
  }
}
