import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_API_KEY,
                }
            });
            setMovie(response.data);
            setLoading(false);
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (!movie) {
        return <p>Filme não encontrado.</p>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Avaliação: {movie.vote_average}</p>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
    );
};

export default MovieDetails;