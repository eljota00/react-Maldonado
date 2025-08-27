import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      {/* Logo */}
      <a className="navbar-brand fw-bold" href="#">MiEcommerce</a>

      {/* Enlaces de navegación */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
        <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
      </ul>

      {/* Widget del carrito */}
      <CartWidget />
    </nav>
  )
}

export default NavBar