import * as express from "express";
import { config } from "dotenv";
import { MongoClient } from "./db/mongo";
import { Routes } from "./routes";
import connectDatabase from "./db/mongoose";

const main = async () => {
  config();
  const app = express();
  app.use(express.json());
  const routes = new Routes();
  const MongooseUrl = process.env.MONGODB_URL as string;
  console.log("AAAAAAAAA", MongooseUrl);

  await MongoClient.connect();
  await connectDatabase(MongooseUrl);

  app.use("/", routes.execute());

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => console.log(`listen on port localhost:${PORT}`));
};

main();
