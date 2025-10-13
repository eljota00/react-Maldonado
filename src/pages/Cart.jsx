import React from "react";
import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  if (cart.length === 0) return <p>Carrito vacío</p>;

  return (
    <div>
      <h2>Carrito</h2>
      {cart.map(p => (
        <div key={p.id}>
          <img src={p.img} alt={p.title} width="60" />
          <span>{p.title} x {p.quantity}</span>
          <span> = ${p.price * p.quantity}</span>
          <button onClick={() => removeItem(p.id)}>❌</button>
        </div>
      ))}
      <h3>Total: ${totalPrice()}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <a href="/checkout">Ir al checkout</a>
    </div>
  );
}
