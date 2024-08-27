import express, { NextFunction, Request, Response } from 'express';
import { TodoController } from '../controllers/TodoController';
import { TodoRepository } from '../repository/TodoRepository';
import { TodoService } from '@/core/services/TodoService';
import {
  IGetTodoRequestParams,
  IListTodoRequestParams,
  ISaveTodoRequestBody,
} from '@/ports/controller/TodoController';
import { ITodo } from '@/core/models/Todo';

const router = express.Router();

const base = '/todo';

const repository = new TodoRepository();
const service = new TodoService(repository);
const constroller = new TodoController(service);

router.get(
  `${base}/list`,
  (
    req: Request<unknown, unknown, unknown, IListTodoRequestParams>,
    res: Response<ITodo[]>,
    next: NextFunction
  ) => constroller.listTodo(req, res, next)
);

router.get(
  `${base}/details/:id`,
  (
    req: Request<IGetTodoRequestParams>,
    res: Response<ITodo | null>,
    next: NextFunction
  ) => constroller.getTodo(req, res, next)
);

router.post(
  `${base}/create`,
  (
    req: Request<unknown, unknown, ISaveTodoRequestBody>,
    res: Response<ITodo>,
    next: NextFunction
  ) => constroller.saveTodo(req, res, next)
);

export default router;
