import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const fetchBooks = async (title = '', year = '') => {
    try {
      const response = await axios.get('http://localhost:3000/books', {
        params: { title, year },
      });
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    setTitle(e.target.value);
    fetchBooks(e.target.value, year);
  };

  const handleYearFilter = (e) => {
    setYear(e.target.value);
    fetchBooks(title, e.target.value);
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      fetchBooks(title, year);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Book List</h1>

      {/* Search and Filter Inputs */}
      <div className="mb-4 row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={handleSearch}
            placeholder="Search by title"
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            value={year}
            onChange={handleYearFilter}
            placeholder="Filter by year"
          />
        </div>
      </div>

      {/* Add New Book Button */}
      <div className="mb-4">
        <Link to="/create">
          <button className="btn btn-primary">Add New Book</button>
        </Link>
      </div>

      {/* Book List */}
      <div className="row">
        {books.map((book) => (
          <div key={book._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">by {book.author}</h6>
                <p className="card-text">
                  {book.description || 'No description available.'}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBook(book._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
