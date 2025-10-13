import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function CartWidget() {
  const { totalQuantity } = useCart();
  const qty = totalQuantity();

  return (
    <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
      🛒 {qty > 0 && <span>({qty})</span>}
    </Link>
  );
}
