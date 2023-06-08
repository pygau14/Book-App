import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    yearPublished: '',
    isbn: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleAddBook = () => {
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '', yearPublished: '', isbn: '' });
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  const handleEditBook = (index, book) => {
    setEditMode(true);
    setEditIndex(index);
    setNewBook(book);
  };

  const handleUpdateBook = () => {
    const updatedBooks = [...books];
    updatedBooks[editIndex] = newBook;
    setBooks(updatedBooks);
    setNewBook({ title: '', author: '', yearPublished: '', isbn: '' });
    setEditMode(false);
    setEditIndex(null);
  };

  return (
    <div className="app">
      <h1>Book List</h1>
      <div className="form">
        <input
          type="text"
          name="title"
          value={newBook.title}
          placeholder="Title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          value={newBook.author}
          placeholder="Author"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="yearPublished"
          value={newBook.yearPublished}
          placeholder="Year Published"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="isbn"
          value={newBook.isbn}
          placeholder="ISBN"
          onChange={handleInputChange}
        />
        {editMode ? (
          <button onClick={handleUpdateBook}>Update Book</button>
        ) : (
          <button onClick={handleAddBook}>Add Book</button>
        )}
      </div>
      <div className="book-list">
        {books.map((book, index) => (
          <div className="book" key={index}>
            <div>
              <strong>Title:</strong> {book.title}
            </div>
            <div>
              <strong>Author:</strong> {book.author}
            </div>
            <div>
              <strong>Year Published:</strong> {book.yearPublished}
            </div>
            <div>
              <strong>ISBN:</strong> {book.isbn}
            </div>
            <div className="actions">
              <button onClick={() => handleEditBook(index, book)}>Edit</button>
              <button onClick={() => handleDeleteBook(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
