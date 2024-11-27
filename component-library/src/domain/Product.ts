export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public quantity: number
  ) {}
}

export interface ProductRepository {
  addProduct(product: Product): void;
  getProductByName(name: string): Product | null;
  getAllProducts(): Product[];
  updateProduct(product: Product): void;
  deleteProduct(name: string): void;
}
