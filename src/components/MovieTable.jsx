import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieTable.css';

function MovieTable({ movies, setEditMovie, setMovies }) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleDelete = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const filteredMovies = movies
    .filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="table-container">
      <div className="table-header">
        <h1>Movie List</h1>
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => {
          setEditMovie(null);
          navigate('/form');
        }}>
          Add Movie
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Budget</th>
            <th>Collection</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.releaseDate}</td>
              <td>₹{movie.budget} Cr</td>
              <td>₹{movie.collection} Cr</td>
              <td>
                <button onClick={() => {
                  setEditMovie({ ...movie, index });
                  navigate('/form');
                }}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieTable;
