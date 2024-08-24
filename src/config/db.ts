import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function mongoConnect() {
  const connectStr = `${process.env.MONGO_CONNECT || ""}`;

  mongoose.connect(connectStr);

  return mongoose.connection;
}

export { mongoConnect };
