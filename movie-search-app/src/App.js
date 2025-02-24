import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import Results from './components/Results';
import MovieDetails from './components/MovieDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/results" element={<Results />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </Router>
    );
};

export default App;