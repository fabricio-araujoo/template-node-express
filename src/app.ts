import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import errorHandlingMiddleware from "./adapters/middlewares/errorHandler";

import "express-async-errors";
import "./config/db";

const todoRoutes = require("./adapters/routes/TodoRoutes");

const app = express();

// Middlewares
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use("/v1", todoRoutes);

// Error Handler
app.use(errorHandlingMiddleware);

export default app;
