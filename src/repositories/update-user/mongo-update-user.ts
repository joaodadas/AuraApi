import {
  IUpdateUserRepository,
  UpdateUserParams,
} from "@/controller/update-user/protocols";
import { MongoClient } from "@/db/mongo";
import { User } from "@/models/user";
import { error } from "console";
import { ObjectId } from "mongodb";

export class MongoUpdateUserRepository implements IUpdateUserRepository {
  async updateUser(id: string, params: UpdateUserParams): Promise<User> {
    await MongoClient.db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const user = await MongoClient.db
      .collection<Omit<User, "id">>("user")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("User nor updated");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
