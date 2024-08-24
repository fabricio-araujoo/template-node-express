import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import "express-async-errors";
import "./config/db";

const todoRoutes = require("./adapters/routes/TodoRoutes");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/v1", todoRoutes);

export default app;
