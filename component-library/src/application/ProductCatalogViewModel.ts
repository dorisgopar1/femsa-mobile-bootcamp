import { observable, action } from "mobx";
import { Product } from "../domain/Product";

export class ProductCatalogViewModel {
  @observable products: Product[] = [];

  @action addProduct(product: Product) {
    this.products.push(product);
  }

  @action updateProductQuantity(productId: number, quantity: number) {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.quantity = quantity;
    }
  }
}
