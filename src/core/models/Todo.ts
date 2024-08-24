import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export class Todo {
  id?: ObjectId;
  title: string;
  completed: boolean;

  constructor(id: ObjectId | undefined, title: string) {
    this.id = id;
    this.title = title;
    this.completed = false;
  }
}

export const TodoModel = mongoose.model("tarefas", new mongoose.Schema(Todo));
