import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Eğer React Router kullanıyorsan

const MovieDetail = () => {
    const { id } = useParams(); // Film ID'sini URL'den alıyoruz
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
                setMovie(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching movie details:", err);
                setError(true);
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id, API_KEY, BASE_URL]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading movie details. Please try again later.</div>;
    }

    return (
        <div className="movie-detail">
            {movie && (
                <>
                    <h1>{movie.title}</h1>
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title} 
                        className="movie-poster"
                    />
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Overview:</strong> {movie.overview}</p>
                    {/* Diğer film detaylarını burada ekleyebilirsiniz */}
                </>
            )}
        </div>
    );
};

export default MovieDetail;
