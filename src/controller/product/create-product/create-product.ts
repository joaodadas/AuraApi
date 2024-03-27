import { HttpRequest, HttpResponse, IController } from "@/controller/protocols";
import { CreateProductParams, ICreateProductRepository } from "./protocols";
import { Product } from "@/models/product";
import { badRequest, created, serverError } from "@/controller/helpers";

export class CreateProductController implements IController {
  constructor(
    private readonly createProductRepository: ICreateProductRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<CreateProductParams>
  ): Promise<HttpResponse<Product | string>> {
    try {
      const requiredFields = [
        "name",
        "description",
        "price",
        "gender",
        "thumb",
        "categoryId",
        "collectionId",
        "createdAt",
        "updatedAt",
      ];

      // Valida os compos obrigatorios do requisição. Usando um map para interar sobre os indices do array.
      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateProductParams]) {
          return badRequest(`Field ${field} is required`);
        }
      }

      //Criar

      // Manda o objeto com os parms do produto para o repository e esoera a resposta se criou ou não para retornar o erro.
      const product = await this.createProductRepository.createProduct(
        httpRequest.body!
      );

      return created<Product>(product);
    } catch (error) {
      return serverError();
    }
  }
}
