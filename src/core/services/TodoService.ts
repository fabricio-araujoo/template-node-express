import { ObjectId } from "mongoose";
import { Todo } from "../models/Todo";
import { ITodoRepository } from "@/ports/repository/TodoRepository";

export interface ITodoService {
  getTodos(title?: string): Promise<Todo[] | null>;
  getTodoById(id: ObjectId): Promise<Todo | null>;
  getTodosByTitle(title: string): Promise<Todo[] | null>;
}

export class TodoService implements ITodoService {
  private todoRepository: ITodoRepository;

  constructor(todoRepository: ITodoRepository) {
    this.todoRepository = todoRepository;
  }

  async getTodos(): Promise<Todo[] | null> {
    return await this.todoRepository.find();
  }

  async getTodoById(id: ObjectId): Promise<Todo | null> {
    return await this.todoRepository.findById(id);
  }

  async getTodosByTitle(title: string): Promise<Todo[] | null> {
    return await this.todoRepository.findByTitle(title);
  }
}
