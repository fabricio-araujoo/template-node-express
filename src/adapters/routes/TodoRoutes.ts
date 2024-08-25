import express, { Request, Response } from "express";
import { TodoController } from "../controllers/TodoController";
import { TodoRepository } from "../repository/TodoRepository";
import { TodoService } from "@/core/services/TodoService";
import { GetTodos } from "@/core/useCases/todo/GetTodos";
import { GetTodo } from "@/core/useCases/todo/GetTodo";
import {
  IGetTodoRequestParams,
  IGetTodosRequestParams,
} from "@/ports/controller/TodoController";

const router = express.Router();

const base = "/todo";

const repository = new TodoRepository();
const service = new TodoService(repository);

const getTodos = new GetTodos(service);
const getTodo = new GetTodo(service);

const constroller = new TodoController(getTodos, getTodo);

router.get(base, (req: Request<IGetTodosRequestParams>, res: Response) =>
  constroller.getTodosController(req, res)
);

router.get(
  `${base}/:id`,
  (req: Request<IGetTodoRequestParams>, res: Response) =>
    constroller.getTodoController(req, res)
);

module.exports = router;
