import React from 'react';
import './MovieForm.css';

function MovieForm({ form, onChange, onSubmit, isEditing }) {
  return (
    <form className="movie-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Movie Title"
        value={form.title}
        onChange={onChange}
      />
      <input
        type="date"
        name="releaseDate"
        value={form.releaseDate}
        onChange={onChange}
      />
      <input
        type="number"
        name="budget"
        placeholder="Budget (Rs. in (Cr))"
        value={form.budget}
        onChange={onChange}
      />
      <input
        type="number"
        name="collection"
        placeholder="Collection (Rs. in (Cr))"
        value={form.collection}
        onChange={onChange}
      />
      <button type="submit">{isEditing ? 'Update Movie' : 'Add Movie'}</button>
    </form>
  );
}

export default MovieForm;
