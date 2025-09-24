import { Link } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">MiTienda</Link>
      <ul className="menu">
        <li><Link to="/category/camisetas">Camisetas</Link></li>
        <li><Link to="/category/indumentaria">Indumentaria</Link></li>
        <li><Link to="/category/calzado">Calzado</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
