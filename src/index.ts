import * as express from "express";
import { config } from "dotenv";
import { GetUsersController } from "./controller/get-users/get-users";
import { MongoCreateUserRepository } from "./repositories/crete-user/mongo-create-user";
import { MongoClient } from "./db/mongo";
import { CreateUserController } from "./controller/create-user/create-user";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";

const main = async () => {
  config();
  const app = express();
  app.use(express.json());

  await MongoClient.connect();

  app.get("/users", async (req, res) => {
    const mongoGetUsersRepository = new MongoGetUsersRepository();
    const getUserControler = new GetUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await getUserControler.handle();

    res.status(statusCode).send(body);
  });

  app.post("/users", async (req, res) => {
    const mongoCreateUserRepository = new MongoCreateUserRepository();

    const createUserController = new CreateUserController(
      mongoCreateUserRepository
    );

    const { body, statusCode } = await createUserController.handle({
      body: req.body,
    });

    return res.status(statusCode).send(body);
  });

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => console.log(`listen on port localhost:${PORT}`));
};

main();
