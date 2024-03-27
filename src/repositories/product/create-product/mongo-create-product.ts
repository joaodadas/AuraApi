import {
  CreateProductParams,
  ICreateProductRepository,
} from "@/controller/product/create-product/protocols";
import { Product } from "@/models/product";

export class mongoCreateProductRepository implements ICreateProductRepository {
  async CreayeUser(): Promise<User[]> {
    return [
        {
            name: "Camiseta Regenerativa",
            description: "Classic T-shirt",
            price: 250,00,
            gender: "all",
            thumb: "string",
            categoryId: "string",
            collectionId: "string",
            createdAt: new Date,
            updatedAt: new Date
        }
    ]
  }
}
