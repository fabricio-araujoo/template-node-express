import mongoose from "mongoose";

export const TodoSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  title: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
    require: true,
    default: false,
  },
});

export const TodoModel = mongoose.model("tarefas", TodoSchema);

export type ITodo = typeof TodoSchema;
