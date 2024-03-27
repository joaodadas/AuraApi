import { IGetUsersRepository } from "@/controller/user/get-users/protocols";
import { MongoClient } from "../../../db/mongo";
import { User } from "../../../models/user";
import { MongoUser } from "../../mongo-protocols";
export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<MongoUser>("users")
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
