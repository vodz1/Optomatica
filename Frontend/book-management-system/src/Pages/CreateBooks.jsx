import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const addBook = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/books', { title, author, publishedDate, description })
      .then(() => {
        setTitle('');
        setAuthor('');
        setPublishedDate('');
        setDescription('');
        alert('Book Added Successfully');
        navigate('/');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mt-5">
      <h2>Add New Book</h2>
      <form onSubmit={addBook} className="mt-4">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            id="author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="publishedDate" className="form-label">
            Published Date
          </label>
          <input
            type="date"
            id="publishedDate"
            className="form-control"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            rows="3"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default CreateBooks;
