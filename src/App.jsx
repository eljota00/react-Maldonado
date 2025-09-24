import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import ItemListContainer from "../containers/ItemListContainer.jsx";
import ItemDetailContainer from "../containers/ItemDetailContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Productos filtrados" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "../CSS/styles.css";
