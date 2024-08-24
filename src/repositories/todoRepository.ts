import { Todo } from "@/models";
import { v4 as uuid } from "uuid";

const todos: Todo[] = [];

async function getTodo(id: string): Promise<Todo | undefined> {
  return new Promise((resolve, reject) => {
    return resolve(todos.find((todo) => todo.id === id));
  });
}

async function getTodos(): Promise<Todo[]> {
  return new Promise((resolve, reject) => {
    return resolve(todos);
  });
}

async function createTodo(todo: Todo): Promise<Todo> {
  return new Promise((resolve, reject) => {
    if (!todo.title) {
      return reject(new Error("Não é possivel criar uma tarefa sem título."));
    }

    const newTodo = new Todo(uuid(), todo.title);

    todos.push(newTodo);

    return resolve(newTodo);
  });
}

async function updateTodo(id: string, todo: Todo): Promise<Todo | undefined> {
  return new Promise((resolve, reject) => {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index < 0) {
      reject(new Error("Tarefa não encontrada."));
    }

    todos[index] = { ...todos[index], ...todo };

    return resolve(todos[index]);
  });
}

async function deleteTodo(id: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index < 0) {
      return reject(new Error("Tarefa não encontrada."));
    }

    todos.splice(index, 1);
    return resolve(true);
  });
}

export default { getTodo, getTodos, createTodo, updateTodo, deleteTodo };
