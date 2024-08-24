import { Todo } from "@/core/models/Todo";

export interface ITodoRepository {
  find(): Promise<Todo[] | null>;
}
