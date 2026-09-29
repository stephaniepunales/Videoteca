import { useState } from "react";
import Videoteca from "./components/Videoteca";
import Historia from "./components/Historia";
import "./App.css";

function App() {
  const [seccion, setSeccion] = useState("videoteca");
  return (
    <div>
      <header>
        <h1>Videoteca</h1>
        <nav>
          <button onClick={() => setSeccion("videoteca")}>Videoteca</button>
          <button onClick={() => setSeccion("historia")}>Historia del cine</button>
        </nav>
      </header>
      <main>
        {seccion === "videoteca" && <Videoteca />}
        {seccion === "historia" && <Historia />}
      </main>
    </div>
  );
}
export default App;