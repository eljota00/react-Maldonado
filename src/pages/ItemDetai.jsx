import React, { useState } from "react";
import ItemCount from "../components/ItemCount";
import { useCart } from "../contexts/CartContext";

export default function ItemDetail({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (qty) => {
    addItem(product, qty);
    setAdded(true);
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} width="250" />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>

      {!added ? (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <a href="/cart">Ver carrito</a>
      )}
    </div>
  );
}
