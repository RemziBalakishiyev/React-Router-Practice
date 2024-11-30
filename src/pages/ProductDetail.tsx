// ProductDetail.tsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { productData } from "../Datas/ProductData";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const product = productData.find((product) => product.id === +id);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card mb-4 shadow-lg">
        <div className="card-body">
          <h1 className="card-title">{product.name}</h1>
          <h4 className="card-subtitle mb-2 text-muted">{product.price}</h4>
          <p className="card-text">{product.description}</p>
          <Link to="/products" className="btn btn-primary mt-3">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
