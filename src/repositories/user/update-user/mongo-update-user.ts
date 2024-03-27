import {
  IUpdateUserRepository,
  UpdateUserParams,
} from "@/controller/user/update-user/protocols";
import { MongoClient } from "../../../db/mongo";
import { User } from "@/models/user";
import { ObjectId } from "mongodb";
import { MongoUser } from "../../mongo-protocols";

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
      .collection<MongoUser>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("User nor updated");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
