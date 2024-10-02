// src/components/MovieCard.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} // Film görseli
        alt={movie.title} // Alternatif metin
        className="movie-card-image"
      />
      <div className="movie-card-content">
        <h2 className="movie-card-title">{movie.title}</h2>
        <p className="movie-card-overview">{movie.overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
