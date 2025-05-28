import React, { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import './style.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState({ title: '', releaseDate: '', budget: '', collection: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedMovies = [...movies];
      updatedMovies[editIndex] = form;
      setMovies(updatedMovies);
      setEditIndex(null);
    } else {
      setMovies([...movies, form]);
    }
    setForm({ title: '', releaseDate: '', budget: '', collection: '' });
  };

  const handleEdit = (index) => {
    setForm(movies[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>Movie CRUD App</h1>
      <MovieForm
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isEditing={editIndex !== null}
      />
      <MovieList
        movies={movies}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;