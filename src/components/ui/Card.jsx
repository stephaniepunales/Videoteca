import "./Card.css";

function Card({ titulo, director, año, genero, poster, onClick }) {
  return (
    <div className="card clickable" onClick={onClick}>
      {poster && <img src={poster} alt={titulo} />}
      <h2>{titulo}</h2>
      <p>{director}</p>
      <p>{año} - {genero}</p>
    </div>
  );
}

export default Card;