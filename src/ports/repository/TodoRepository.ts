import { ITodo } from '@/core/models/Todo';
import { Document, ObjectId } from 'mongoose';

export interface ITodoRepository {
  find(): Promise<ITodo[] | null>;
  findById(id: ObjectId): Promise<ITodo | null>;
  findByTitle(title: string): Promise<ITodo[] | null>;
  saveTodo(title: string): Promise<ITodo>;
}
