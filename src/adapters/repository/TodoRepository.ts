import { Todo, TodoModel } from "@/core/models/Todo";
import { ITodoRepository } from "@/ports/repository/TodoRepository";
import { ObjectId } from "mongoose";

export class TodoRepository implements ITodoRepository {
  async find(): Promise<Todo[] | null> {
    return await TodoModel.find({});
  }

  async findById(id: ObjectId): Promise<Todo | null> {
    return await TodoModel.findById(id);
  }

  async findByTitle(title: string): Promise<Todo[] | null> {
    return await TodoModel.find({ title: new RegExp(title, "i") });
  }
}
