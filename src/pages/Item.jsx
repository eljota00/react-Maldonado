import React from "react";
import { Link } from "react-router-dom";

export default function Item({ product }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: 10,
      borderRadius: 8,
      textAlign: "center"
    }}>
      <img src={product.img} alt={product.title} width="150" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
}
