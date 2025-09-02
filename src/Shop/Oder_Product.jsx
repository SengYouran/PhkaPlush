import React from "react";
import { useParams } from "react-router-dom";
import { data_product } from "../Data/ProductInfomation";

function Order_Product() {
  const { id } = useParams();

  // ត្រឡប់ជារូបភាព "clean" ដូចជា "nike-shoes"

  const product = data_product.find((item) => item.id == id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.product_name}</h2>
      <img className="w-20" src={product.product} alt={product.product_name} />
      <p>{product.product_text}</p>
      <p>{product.product_price}</p>
    </div>
  );
}

export default Order_Product;
