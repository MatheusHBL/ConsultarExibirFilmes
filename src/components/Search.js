import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (!query) return;

        const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_API_KEY,
                query: query,
            }
        });

        navigate('/results', { state: { movies: response.data.results } });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Pesquise por um filme..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};

export default Search;