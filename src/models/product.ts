export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  gender: ["all", "men", "women"];
  thumb: string;
  categoryId: string;
  collectionId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProduct {
  name: string;
  description: string;
  price: number;
  hasDiscount: boolean;
  discountPrice: number;
  display: boolean;
  isSoldOut: boolean;
  isNewProduct: boolean;
  gender: ["all", "men", "women"];
  thumb: string;
  categoryId: string;
  collectionId: string;
  options: IOption[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IOption {
  color: string;
  name: string;
  sizes: string[];
  images: IImage[];
}

interface IImage {
  url: string;
  key: string;
}
