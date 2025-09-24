import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const aumentar = () => {
    if (count < stock) setCount(count + 1);
  };

  const disminuir = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <button onClick={disminuir}>-</button>
      <span>{count}</span>
      <button onClick={aumentar}>+</button>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
