import { Todo } from "@/core/models/Todo";
import { ObjectId } from "mongoose";

export interface ITodoRepository {
  find(): Promise<Todo[] | null>;
  findById(id: ObjectId): Promise<Todo | null>;
  findByTitle(title: string): Promise<Todo[] | null>;
}
