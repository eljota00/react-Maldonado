import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useCart } from "../contexts/CartContext";

export default function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: "", email: "" });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) =>
    setBuyer({ ...buyer, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer,
      items: cart,
      total: totalPrice(),
      date: serverTimestamp()
    };
    const ref = await addDoc(collection(db, "orders"), order);
    setOrderId(ref.id);
    clearCart();
  };

  if (orderId)
    return <h3>Compra confirmada ✅ ID: <strong>{orderId}</strong></h3>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={buyer.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={buyer.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Confirmar compra</button>
    </form>
  );
}
