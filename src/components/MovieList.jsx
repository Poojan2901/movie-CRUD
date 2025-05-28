import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

function MovieList({ movies, onEdit, onDelete }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          index={index}
          movie={movie}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default MovieList;
