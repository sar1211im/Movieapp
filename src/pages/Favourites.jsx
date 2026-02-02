import { useContext } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import { FavoriteContext } from "../contexts/FavoriteContext";
import "../css/Favorites.css";


function Favourites() {
  const { favorites } = useContext(FavoriteContext);
 
 

  if (favorites.length === 0) {
    return (
      <div className="favourites-empty">
        <h2>No Favourite Movies Yet</h2>
        <p>Start adding movies to your favourites and they will appear here</p>
      </div>
    );
  }

  return (
    <div>
    <NavBar/>
  
    <div className="favourites-grid">
      {favorites.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
    </div>
  );
}

export default Favourites;
