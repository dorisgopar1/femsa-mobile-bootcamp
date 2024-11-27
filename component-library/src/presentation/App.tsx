import React from "react";
import ProductCatalog from "./ProductCatalog";
import { ProductCatalogViewModel } from "../application/ProductCatalogViewModel";
import { Product } from "../domain/Product";

const App: React.FC = () => {
  const viewModel = new ProductCatalogViewModel();

  viewModel.addProduct(new Product(1, "Product 1", 100, 10));
  viewModel.addProduct(new Product(2, "Product 2", 50, 20));
  viewModel.addProduct(new Product(3, "Product 3", 200, 5));

  return (
    <div>
      <h1>Welcome to the Product Catalog</h1>
      <ProductCatalog viewModel={viewModel} />
    </div>
  );
};

export default App;
