import { TodoModel, ITodo } from '@/core/models/Todo';
import {
  IFindByFilterParams,
  ITodoRepository,
} from '@/ports/repository/TodoRepository';
import { ObjectId } from 'mongoose';

export class TodoRepository implements ITodoRepository {
  async find(): Promise<ITodo[] | null> {
    return TodoModel.find({});
  }

  async findById(id: ObjectId): Promise<ITodo | null> {
    return TodoModel.findById(id);
  }

  async findByFilter(filter: IFindByFilterParams): Promise<ITodo[] | null> {
    return TodoModel.find({
      ...filter,
    });
  }

  async saveTodo(title: string): Promise<ITodo> {
    return TodoModel.create({
      title: title,
    });
  }
}
