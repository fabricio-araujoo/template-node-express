import { ObjectId } from 'mongoose';
import {
  IFindByFilterParams,
  ITodoRepository,
} from '@/ports/repository/TodoRepository';
import { ITodo } from '../models/Todo';

export class TodoService {
  private todoRepository: ITodoRepository;

  constructor(todoRepository: ITodoRepository) {
    this.todoRepository = todoRepository;
  }

  async getTodos(): Promise<ITodo[] | null> {
    return this.todoRepository.find();
  }

  async getTodosByFilter(
    filter: IFindByFilterParams,
    skip: number,
    limit: number
  ): Promise<ITodo[] | null> {
    return this.todoRepository.findByFilter(filter, skip, limit);
  }

  async getTodoById(id: ObjectId): Promise<ITodo | null> {
    return this.todoRepository.findById(id);
  }

  async saveTodo(title: string): Promise<ITodo> {
    return this.todoRepository.saveTodo(title);
  }

  async countDocuments(filter: IFindByFilterParams): Promise<number> {
    return this.todoRepository.countDocuments(filter);
  }
}
