import { useState } from "react";
import Card from "../components/ui/Card";
import DetallePelis from "../components/ui/DetallePelis";
import movies from "../data/movies";
import "../App.css";

function VideotecaApp() {
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  return (
    <div className="app">
      <div className="app-layout">
        <div className="grid">
          {movies.map((pelicula) => (
            <Card
              key={pelicula.id}
              titulo={pelicula.titulo}
              director={pelicula.director}
              año={pelicula.año}
              genero={pelicula.genero}
              poster={pelicula.poster}
              onClick={() => setPeliculaSeleccionada(pelicula)}
            />
          ))}
        </div>
        <DetallePelis pelicula={peliculaSeleccionada} />
      </div>
    </div>
  );
}

export default VideotecaApp;