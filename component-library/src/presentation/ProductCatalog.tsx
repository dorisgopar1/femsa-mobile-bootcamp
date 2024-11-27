import React from "react";
import { observer } from "mobx-react";
import { ProductCatalogViewModel } from "../application/ProductCatalogViewModel";

interface ProductCatalogProps {
  viewModel: ProductCatalogViewModel;
}

const ProductCatalog: React.FC<ProductCatalogProps> = observer(
  ({ viewModel }) => {
    return (
      <div>
        <h1>Product Catalog</h1>
        <ul>
          {viewModel.products.map((product) => (
            <li key={product.id}>
              <p>{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button
                onClick={() =>
                  viewModel.updateProductQuantity(
                    product.id,
                    product.quantity + 1
                  )
                }
              >
                Increase Quantity
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default ProductCatalog;
