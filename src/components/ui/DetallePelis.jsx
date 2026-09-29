function DetallePelis({ pelicula }) {
  if (!pelicula) {
    return (
      <div className="detalle-vacio">
      </div>
    );
  }

  return (
    <div className="detalle">
      {pelicula.poster && (
        <img
          src={pelicula.poster}
          alt={pelicula.titulo}
          className="detalle-poster"
        />
      )}
      <h2>{pelicula.titulo} ({pelicula.año})</h2>
      <p><strong>Director:</strong> {pelicula.director}</p>
      <p><strong>Género:</strong> {pelicula.genero}</p>
    </div>
  );
}

export default DetallePelis;