import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap";
import ColorInput from "./components/ColorInput";

function App() {
  return (
    <Container >
      <h1 className="text-center">Administrar Colores</h1>
      <hr/>
    <ColorInput></ColorInput>
    </Container>
  );
}

export default App;
