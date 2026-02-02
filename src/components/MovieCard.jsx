import { useContext } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoriteContext);

  const favorited = isFavorite(movie.id);

  const onFavouriteClick = () => {
    if (favorited) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster" style={{ position: "relative" }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        {favorited && (
          <div
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              color: "red",
              fontSize: "24px",
              pointerEvents: "none",
              userSelect: "none",
              zIndex: 2,
            }}
          >
            ♥
          </div>
        )}
        <div className="movie-overlay">
          <button className="favourite-btn" onClick={onFavouriteClick}>
            {favorited ? "Unfavourite" : "Favourite"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
