import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar({ onSearch, onResetSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleBrandClick = () => {
    if (onResetSearch) {
      onResetSearch();
    }
  };

  const handleHomeClick = () => {
    if (onResetSearch) {
      onResetSearch();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" onClick={handleBrandClick}>Movie App</Link>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="navbar-links">
        <Link to="/" className="nav-link" onClick={handleHomeClick}>
          Home
        </Link>
        <Link to="/favourites" className="nav-link">
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
