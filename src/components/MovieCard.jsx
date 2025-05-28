import React from 'react';
import './MovieCard.css';

function MovieCard({ movie, index, onEdit, onDelete }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Budget: Rs.{movie.budget} Cr</p>
      <p>Collection: Rs.{movie.collection} Cr</p>
      <button onClick={() => onEdit(index)}>Edit</button>
      <button onClick={() => onDelete(index)}>Delete</button>
    </div>
  );
}

export default MovieCard;
