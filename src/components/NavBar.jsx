import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CarWidget";

export default function NavBar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#222",
      color: "#fff"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h2>Chimichurri Store</h2>
      </Link>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/category/remeras" style={{ color: "white" }}>Remeras</Link>
        <Link to="/category/buzos" style={{ color: "white" }}>Buzos</Link>
        <Link to="/category/accesorios" style={{ color: "white" }}>Accesorios</Link>
      </div>

      <CartWidget />
    </nav>
  );
}
