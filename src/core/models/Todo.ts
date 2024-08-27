import mongoose, { Document, ObjectId } from 'mongoose';

export interface ITodo extends Document {
  _id: ObjectId;
  title: string;
  completed: boolean;
}

export const TodoSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    title: {
      type: String,
      required: [true, 'O título da tarefa é obrigatório'],
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { versionKey: false }
);

export const TodoModel = mongoose.model<ITodo>('tarefas', TodoSchema);
