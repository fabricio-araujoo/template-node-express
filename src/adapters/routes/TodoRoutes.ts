import express, { Request, Response } from "express";
import { TodoController } from "../controllers/TodoController";
import { TodoRepository } from "../repository/TodoRepository";
import { TodoService } from "@/core/services/TodoService";
import {
  IGetTodoRequestParams,
  IListTodoRequestParams,
  ISaveTodoRequestBody,
} from "@/ports/controller/TodoController";

const router = express.Router();

const base = "/todo";

const repository = new TodoRepository();
const service = new TodoService(repository);
const constroller = new TodoController(service);

router.get(
  `${base}/list`,
  (req: Request<IListTodoRequestParams>, res: Response) =>
    constroller.listTodo(req, res)
);

router.get(
  `${base}/details/:id`,
  (req: Request<IGetTodoRequestParams>, res: Response) =>
    constroller.getTodo(req, res)
);

router.post(
  `${base}/create`,
  (req: Request<ISaveTodoRequestBody>, res: Response) =>
    constroller.saveTodo(req, res)
);

export default router;
