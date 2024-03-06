import { IGetUsersRepository } from "@/controller/get-users/protocols";
import { MongoClient } from "../../db/mongo";
import { User } from "../../models/user";
export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<Omit<User, "id">>("users")
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
