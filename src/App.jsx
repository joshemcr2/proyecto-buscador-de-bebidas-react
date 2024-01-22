import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import Modalbebida from "./components/Modalbebida";
import { CategoriasProvider } from "./context/CategoriaProvider";
import { BebidasProvider } from "./context/BebidasProvider";

function App() {
  return (
    <>
      <CategoriasProvider>
        <BebidasProvider>
          <header className="py-5">
            <h1>Buscador De Bebidas</h1>
          </header>

          <Container className="mt-5">
            <Formulario />
            <ListadoBebidas />
            <Modalbebida />
          </Container>

          <footer className="py-5">
            <h4>Hecho Por Jose A Munoz Cardozo - 2024</h4>
          </footer>
        </BebidasProvider>
      </CategoriasProvider>
    </>
  );
}

export default App;
