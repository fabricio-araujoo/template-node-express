import { TodoModel, ITodo } from '@/core/models/Todo';
import { ITodoRepository } from '@/ports/repository/TodoRepository';
import { ObjectId } from 'mongoose';

export class TodoRepository implements ITodoRepository {
  async find(): Promise<ITodo[] | null> {
    return TodoModel.find({});
  }

  async findById(id: ObjectId): Promise<ITodo | null> {
    return TodoModel.findById(id);
  }

  async findByTitle(title: string): Promise<ITodo[] | null> {
    return TodoModel.find({ title: new RegExp(title, 'i') });
  }

  async saveTodo(title: string): Promise<ITodo> {
    return TodoModel.create({
      title: title,
    });
  }
}
