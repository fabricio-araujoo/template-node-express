import { Todo } from "@/core/models/Todo";
import { ITodoService } from "@/core/services/TodoService";
import { ObjectId } from "mongoose";

export class GetTodo {
  private todoService: ITodoService;

  constructor(todoService: ITodoService) {
    this.todoService = todoService;
  }

  async execute(id: ObjectId): Promise<Todo | null> {
    return await this.todoService.getTodoById(id);
  }
}
