import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { todoRouter } from "./routers";

import "express-async-errors";

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/v1/todo", todoRouter);

export default app;
