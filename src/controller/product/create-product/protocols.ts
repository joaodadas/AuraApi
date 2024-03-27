import { Product } from "@/models/product";

// Serva para tipar os parametros que serão recebidos e enviados
export interface CreateProductParams {
  name: string;
  description: string;
  price: number;
  gender: ["all", "men", "women"];
  thumb: string;
  categoryId: string;
  collectionId: string;
}

// Interface que faz a ligação do controller com o repository, inplementando o metodo(get, post, delete, etc...)
export interface ICreateProductRepository {
  createProduct(params: CreateProductParams): Promise<Product>;
}
