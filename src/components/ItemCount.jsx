import React, { useState } from "react";

export default function ItemCount({ stock = 1, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const inc = () => setCount(c => Math.min(c + 1, stock));
  const dec = () => setCount(c => Math.max(c - 1, 1));

  return (
    <div style={{ margin: "10px 0" }}>
      <div>
        <button onClick={dec} disabled={count <= 1}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={inc} disabled={count >= stock}>+</button>
      </div>
      <button
        onClick={() => onAdd(count)}
        disabled={stock === 0}
        style={{ marginTop: 8 }}
      >
        Agregar al carrito
      </button>
      {stock === 0 && <p>Producto sin stock</p>}
    </div>
  );
}

