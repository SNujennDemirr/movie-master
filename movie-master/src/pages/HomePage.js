import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import '../styles/App.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [showPopular, setShowPopular] = useState(false);

  const togglePopularMovies = async () => {
    if (!showPopular) {
      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
    setShowPopular(!showPopular);
  };

  return (
    <div className="home-page">
      <h1 style={{ color: 'white' }}>Home Page</h1>
      <button onClick={togglePopularMovies}>
        {showPopular ? 'Hide Popular Movies' : 'Show Popular Movies'}
      </button>

      {showPopular && (
        <div className="movie-list">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      <footer>
        <p>© 2024 Your App Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
