import React from "react";
import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 200px)", gap: "20px" }}>
      {products.map(p => (
        <Item key={p.id} product={p} />
      ))}
    </div>
  );
}
