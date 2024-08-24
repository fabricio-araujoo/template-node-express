import express, { Request, Response } from "express";
import { TodoController } from "../controllers/TodoController";
import { TodoRepository } from "../repository/TodoRepository";
import { TodoService } from "@/core/services/TodoService";
import { GetTodos } from "@/core/useCases/todo/GetTodos";

const router = express.Router();

const base = "/todo";

const repository = new TodoRepository();
const service = new TodoService(repository);

const getTodos = new GetTodos(service);

const constroller = new TodoController(getTodos);

router.get(base, (req: Request, res: Response) =>
  constroller.getTodosController(res)
);

module.exports = router;
