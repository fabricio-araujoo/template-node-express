import { ObjectId } from "mongoose";
import { ITodoRepository } from "@/ports/repository/TodoRepository";
import { ITodo } from "../models/Todo";

export class TodoService {
  private todoRepository: ITodoRepository;

  constructor(todoRepository: ITodoRepository) {
    this.todoRepository = todoRepository;
  }

  async getTodos(): Promise<ITodo[] | null> {
    return this.todoRepository.find();
  }

  async getTodosByTitle(title: string): Promise<ITodo[] | null> {
    return this.todoRepository.findByTitle(title);
  }

  async getTodoById(id: ObjectId): Promise<ITodo | null> {
    return this.todoRepository.findById(id);
  }

  async saveTodo(title: string): Promise<unknown> {
    return this.todoRepository.saveTodo(title);
  }
}
