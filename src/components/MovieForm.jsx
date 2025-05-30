import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieForm.css';

function MovieForm({ movies, setMovies, editMovie, setEditMovie }) {
  const [form, setForm] = useState({ title: '', releaseDate: '', budget: '', collection: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (editMovie) setForm(editMovie);
  }, [editMovie]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.releaseDate || !form.budget || !form.collection) {
      alert('Please fill all fields');
      return;
    }

    const updatedMovies = [...movies];
    if (editMovie) {
      updatedMovies[editMovie.index] = form;
    } else {
      updatedMovies.push(form);
    }

    setMovies(updatedMovies);
    setForm({ title: '', releaseDate: '', budget: '', collection: '' });
    setEditMovie(null);
    navigate('/movies');
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <h2>{editMovie ? 'Edit Movie' : 'Add New Movie'}</h2>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <input type="date" name="releaseDate" value={form.releaseDate} onChange={handleChange} />
      <input name="budget" value={form.budget} onChange={handleChange} placeholder="Budget (Cr)" />
      <input name="collection" value={form.collection} onChange={handleChange} placeholder="Collection (Cr)" />
      <button type="submit">{editMovie ? 'Update' : 'Add'}</button>
    </form>
  );
}

export default MovieForm;
