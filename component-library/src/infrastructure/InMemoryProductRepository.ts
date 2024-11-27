import { Product, ProductRepository } from "../domain/Product";

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getProductByName(name: string): Product | null {
    return this.products.find((product) => product.name === name) || null;
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(
      (product) => product.name === updatedProduct.name
    );
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(name: string): void {
    this.products = this.products.filter((product) => product.name !== name);
  }
}
