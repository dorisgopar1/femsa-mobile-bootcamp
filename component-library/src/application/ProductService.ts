import { Product, ProductRepository } from "../domain/Product";

export class ProductService {
  constructor(private repository: ProductRepository) {}

  addProduct(product: Product): void {
    const existingProduct = this.repository.getProductByName(product.name);
    if (existingProduct) {
      throw new Error(`Product with name "${product.name}" already exists.`);
    }
    this.repository.addProduct(product);
  }

  getProduct(name: string): Product | null {
    return this.repository.getProductByName(name);
  }

  getAllProducts(): Product[] {
    return this.repository.getAllProducts();
  }

  updateProduct(product: Product): void {
    const existingProduct = this.repository.getProductByName(product.name);
    if (!existingProduct) {
      throw new Error(`Product with name "${product.name}" does not exist.`);
    }
    this.repository.updateProduct(product);
  }

  deleteProduct(name: string): void {
    const existingProduct = this.repository.getProductByName(name);
    if (!existingProduct) {
      throw new Error(`Product with name "${name}" does not exist.`);
    }
    this.repository.deleteProduct(name);
  }
}
