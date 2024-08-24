import { ObjectId } from "mongoose";
import { Todo } from "../models/Todo";
import { ITodoRepository } from "@/ports/repository/TodoRepository";

export interface ITodoService {
  getTodos(): Promise<Todo[] | null>;
}

export class TodoService implements ITodoService {
  private todoRepository: ITodoRepository;

  constructor(todoRepository: ITodoRepository) {
    this.todoRepository = todoRepository;
  }

  async getTodos(): Promise<Todo[] | null> {
    return await this.todoRepository.find();
  }
}
