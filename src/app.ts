import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { todoRouter } from "./routers";
import { mongoConnect } from "./config/db";

import "express-async-errors";

const app = express();

async function setupMongo() {
  const mongo = await mongoConnect();

  mongo.on("error", (err) => console.error("Mongo Connection Error: ", err));
  mongo.once("open", () => console.log("Mongo Connection Started!"));
}

async function setupMiddleware() {
  app.use(morgan("tiny"));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
}

async function setup() {
  await setupMongo();
  await setupMiddleware();
}

setup();

app.use("/v1/todo", todoRouter);

export default app;
