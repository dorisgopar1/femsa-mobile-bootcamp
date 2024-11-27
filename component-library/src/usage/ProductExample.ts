import { Product } from "../domain/Product";
import { InMemoryProductRepository } from "../infrastructure/InMemoryProductRepository";
import { ProductService } from "../application/ProductService";

const productRepository = new InMemoryProductRepository();

const productService = new ProductService(productRepository);

const product1 = new Product("Laptop", 1200, 10);
const product2 = new Product("Mouse", 25, 50);

productService.addProduct(product1);
productService.addProduct(product2);

console.log("All Products:", productService.getAllProducts());

const fetchedProduct = productService.getProduct("Laptop");
console.log("Fetched Product:", fetchedProduct);

productService.updateProduct(new Product("Laptop", 1100, 8));
console.log("Updated Products:", productService.getAllProducts());

productService.deleteProduct("Mouse");
console.log("Products After Deletion:", productService.getAllProducts());
