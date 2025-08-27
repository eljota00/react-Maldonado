import NavBar from "../src/components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  return (
    <>
      <NavBar />
      {/* Enviamos un mensaje por props */}
      <ItemListContainer greeting="¡Bienvenido a mi tienda online!" />
    </>
  )
}

export default App

