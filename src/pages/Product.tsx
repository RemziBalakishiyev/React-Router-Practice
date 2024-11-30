import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

// productData.ts
export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
}

// export const productData: Product[] = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: "$10.00",
//     description: "This is the description for Product 1.",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: "$20.00",
//     description: "This is the description for Product 2.",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     price: "$30.00",
//     description: "This is the description for Product 3.",
//   },
// ];

const Product = () => {
  const productData = useLoaderData();
  console.log(productData);
  return (
    <div className="container mt-5">
      <div className="container mt-5">
        <h1>Our Products</h1>
        <div className="row">
          {productData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Product;
