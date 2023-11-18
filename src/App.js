import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  //  Fetch the books array from database and update state on app startup
  const fetchBooks = async function () {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  // Runs fetchBooks only on app startup
  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async function (title) {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];

    //   ...books,
    //   { id: Math.round(Math.random() * 9999), title },
    // ];
    setBooks(updatedBooks);
  };
  // console.log(books);

  // Function to edit a book
  const editBookById = async function (id, newTitle) {
    // Update book from database
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    // Edit local book by id
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // Function to delete a book
  const deleteBookById = async function (id) {
    // Update database
    await axios.delete(`http://localhost:3001/books/${id}`);

    // Update local state
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    // const updatedBooks = books.map((book) => {
    //   if (book.id === id) {
    //     const { book, ...rest } = books;
    //     return rest;
    //   }
    //   return book;
    // });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}
export default App;
