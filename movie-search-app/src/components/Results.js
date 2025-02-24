import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Results = () => {
    const location = useLocation();
    const { movies } = location.state || { movies: [] };

    return (
        <div>
            <h2>Resultados da Busca</h2>
            <ul>
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                {movie.title} ({movie.release_date})
                            </Link>
                        </li>
                    ))
                ) : (
                    <p>Nenhum resultado encontrado.</p>
                )}
            </ul>
        </div>
    );
};

export default Results;