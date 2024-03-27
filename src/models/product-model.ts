import mongoose from "mongoose";
import { IProduct } from "./product";

const productSchema = new mongoose.Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    gender: { type: [String], required: true, minLength: 1 },
    options: {
      type: [
        {
          color: { type: String, required: true },
          name: { type: String, required: true },
          sizes: { type: [String], required: true, minLength: 1 },
          images: {
            type: [
              {
                url: { type: String, required: true },
                key: { type: String, required: true },
              },
            ],
            required: true,
            minLength: 1,
          },
        },
      ],
      required: true,
      minLength: 1,
    },
    discountPrice: { type: Number, default: 0 },
    hasDiscount: { type: Boolean, default: false },
    display: { type: Boolean, default: true },
    isSoldOut: { type: Boolean, default: false },
    isNewProduct: { type: Boolean, default: true },
    thumb: { type: String, required: true },
    categoryId: { type: String, required: true },
    collectionId: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "products",
  }
);

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
