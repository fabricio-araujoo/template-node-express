import { ITodo } from '@/core/models/Todo';
import { Document, ObjectId } from 'mongoose';

export interface ITodoRepository {
  find(): Promise<ITodo[] | null>;
  findById(id: ObjectId): Promise<ITodo | null>;
  findByFilter(filter?: IFindByFilterParams): Promise<ITodo[] | null>;
  saveTodo(title: string): Promise<ITodo>;
}

export type IFindByFilterParams = {
  title?: string | RegExp;
  completed?: boolean;
};
