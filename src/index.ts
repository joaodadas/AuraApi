import * as express from "express";
import { config } from "dotenv";
import { GetUsersController } from "./controller/get-users/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";

config();

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`listen on port localhost:${PORT}`));

app.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();
  const getUserControler = new GetUsersController(mongoGetUsersRepository);

  const { body, statusCode } = await getUserControler.handle();

  res.send(body).status(statusCode);
});
