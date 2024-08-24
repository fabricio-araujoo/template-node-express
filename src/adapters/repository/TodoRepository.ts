import { Todo, TodoModel } from "@/core/models/Todo";
import { ITodoRepository } from "@/ports/repository/TodoRepository";

export class TodoRepository implements ITodoRepository {
  async find(): Promise<Todo[] | null> {
    return await TodoModel.find({});
  }
}
