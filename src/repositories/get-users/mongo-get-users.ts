import { IGetUsersRepository } from "@/controller/get-users/protocols";
import { MongoClient } from "@/db/mongo";
import { User } from "@/models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<User>("users")
      .find({})
      .toArray();
    return [
      {
        firstName: "João Vitor",
        lastName: "Dadas",
        email: "dadasjv@hotmail.com",
        password: "123",
      },
    ];
  }
}
