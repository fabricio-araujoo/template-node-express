import { Todo, TodoModel } from "@/models";
import { todoRepository } from "@/repositories";
import { NextFunction, Request, Response } from "express";

async function getTodo(
  req: Request<Pick<Todo, "id">>,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  if (!id) {
    return res.sendStatus(404);
  }

  const todo = await todoRepository.getTodo(id);

  if (!todo) {
    return res.sendStatus(404);
  }

  res.json(todo);
}

async function getTodos(req: Request, res: Response, next: NextFunction) {
  const todos = await TodoModel.find({});

  res.json(todos);
}

async function postTodo(req: Request<Todo>, res: Response, next: NextFunction) {
  const todo = req.body as Todo;

  const result = await todoRepository.createTodo(todo);

  if (!result) {
    return res.sendStatus(400);
  }

  res.status(201).json(result);
}

async function patchTodo(
  req: Request<Pick<Todo, "id">>,
  res: Response<Todo>,
  next: NextFunction
) {
  const { id } = req.params;
  const todo = req.body;

  if (!id) {
    return res.sendStatus(404);
  }

  const result = await todoRepository.updateTodo(id, todo);

  if (!result) {
    return res.sendStatus(404);
  }

  res.json(result);
}

async function deleteTodo(
  req: Request<Pick<Todo, "id">>,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  if (!id) {
    return res.sendStatus(404);
  }

  const success = await todoRepository.deleteTodo(id);

  if (!success) {
    return res.sendStatus(404);
  }

  res.sendStatus(204);
}

export default { deleteTodo, getTodo, getTodos, patchTodo, postTodo };
