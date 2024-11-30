// ProductCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../Datas/ProductData";

interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>{" "}
          <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>{" "}
          <p className="card-text">{product.description}</p>{" "}
          <Link to={`/products/${product.id}`} className="btn btn-info">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
