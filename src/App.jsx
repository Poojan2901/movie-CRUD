import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MovieForm from './components/MovieForm';
import MovieTable from './components/MovieTable';
import './style.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [editMovie, setEditMovie] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/movies"
          element={
            <MovieTable
              movies={movies}
              setEditMovie={setEditMovie}
              setMovies={setMovies}
            />
          }
        />
        <Route
          path="/form"
          element={
            <MovieForm
              movies={movies}
              setMovies={setMovies}
              editMovie={editMovie}
              setEditMovie={setEditMovie}
            />
          }
        />
        <Route path="*" element={<Navigate to="/movies" />} />
      </Routes>
    </Router>
  );
}

export default App;
