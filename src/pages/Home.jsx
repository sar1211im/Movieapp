import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const loadPopularMovies = async (pageNum = 1) => {
      try {
        const data = await getPopularMovies(pageNum);
        if (pageNum === 1) {
          setMovies(data.results);
        } else {
          setMovies((prevMovies) => [...prevMovies, ...data.results]);
        }
        setHasMore(pageNum < data.total_pages);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    if (isSearching && searchQuery.trim()) {
      const loadSearchResults = async (pageNum = 1) => {
        try {
          const data = await searchMovies(searchQuery, pageNum);
          if (pageNum === 1) {
            setMovies(data.results);
          } else {
            setMovies((prevMovies) => [...prevMovies, ...data.results]);
          }
          setHasMore(pageNum < data.total_pages);
        } catch (err) {
          console.log(err);
          setError("Failed to search movies...");
        } finally {
          setLoading(false);
        }
      };
      loadSearchResults(page);
    } else {
      loadPopularMovies(page);
    }
  }, [page, isSearching, searchQuery]);

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    if (loading) return;

    setLoading(true);
    setIsSearching(true);
    setPage(1);
    setSearchQuery(query);
  };

  const loadMore = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setPage(page + 1);
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <div className="home">
        {error && <div className="error-message">{error}</div>}
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        {loading && <div className="loading">loading...</div>}
        {!loading && hasMore && (
          <button onClick={loadMore} className="load-more-button">
            Load More
          </button>
        )}
      </div>
    </>
  );
}

export default Home;
