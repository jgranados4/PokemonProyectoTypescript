import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Listado } from "./pages/listado";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listado />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
