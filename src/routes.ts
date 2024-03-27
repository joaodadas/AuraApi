import { Router } from "express";
import { CreateUserController } from "./controller/user/create-user/create-user";
import { DeleteUserController } from "./controller/user/delete-users/delete-users";
import { GetUsersController } from "./controller/user/get-users/get-users";
import { UpdateUserController } from "./controller/user/update-user/update-user";
import { MongoCreateUserRepository } from "./repositories/user/crete-user/mongo-create-user";
import { MongoDeleteUserRepository } from "./repositories/user/delete-user/mongo-delete-user";
import { MongoGetUsersRepository } from "./repositories/user/get-users/mongo-get-users";
import { MongoUpdateUserRepository } from "./repositories/user/update-user/mongo-update-user";

export class Routes {
  router = Router();

  execute() {
    this.routing();

    return this.router;
  }

  routing() {
    this.router.get("/users", async (req, res) => {
      const mongoGetUsersRepository = new MongoGetUsersRepository();
      const getUserControler = new GetUsersController(mongoGetUsersRepository);

      const { body, statusCode } = await getUserControler.handle();

      res.status(statusCode).send(body);
    });

    this.router.post("/users", async (req, res) => {
      const mongoCreateUserRepository = new MongoCreateUserRepository();

      const createUserController = new CreateUserController(
        mongoCreateUserRepository
      );

      const { body, statusCode } = await createUserController.handle({
        body: req.body,
      });

      res.status(statusCode).send(body);
    });

    this.router.patch("/users/:id", async (req, res) => {
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

    this.router.delete("/users/:id", async (req, res) => {
      const mongoDeleteUserRepository = new MongoDeleteUserRepository();

      const deleteUserController = new DeleteUserController(
        mongoDeleteUserRepository
      );

      const { body, statusCode } = await deleteUserController.handle({
        params: req.params,
      });

      res.status(statusCode).send(body);
    });

    // this.router.post("/product", (req, res) => {
    //   const mongoCreateProductRepository = new Create();
    //   const createProductController = new CreateUserController();
    // });
  }
}
