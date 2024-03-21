import * as express from "express";
import { config } from "dotenv";
import { GetUsersController } from "./controller/get-users/get-users";
import { MongoCreateUserRepository } from "./repositories/crete-user/mongo-create-user";
import { MongoClient } from "./db/mongo";
import { CreateUserController } from "./controller/create-user/create-user";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { MongoUpdateUserRepository } from "./repositories/update-user/mongo-update-user";
import { UpdateUserController } from "./controller/update-user/update-user";
import { MongoDeleteUserRepository } from "./repositories/delete-user/mongo-delete-user";
import { DeleteUserController } from "./controller/delete-users/delete-users";

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

    res.status(statusCode).send(body);
  });

  app.patch("/users/:id", async (req, res) => {
    const mongoUpdateUserRepository = new MongoUpdateUserRepository();

    const updateUserController = new UpdateUserController(
      mongoUpdateUserRepository
    );

    const { body, statusCode } = await updateUserController.handle({
      body: req.body,
      params: req.params,
    });

    res.status(statusCode).send(body);
  });

  app.delete("/users/:id", async (req, res) => {
    const mongoDeleteUserRepository = new MongoDeleteUserRepository();

    const deleteUserController = new DeleteUserController(
      mongoDeleteUserRepository
    );

    const { body, statusCode } = await deleteUserController.handle({
      params: req.params,
    });

    res.status(statusCode).send(body);
  });

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => console.log(`listen on port localhost:${PORT}`));
};

main();
