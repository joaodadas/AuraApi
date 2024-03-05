import { IGetUsersRepository } from "@/controller/get-users/protocols";
import { User } from "@/models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
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
