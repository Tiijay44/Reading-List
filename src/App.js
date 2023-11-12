import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = function (title) {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };
  // console.log(books);

  // Function to edit a book
  const editBookById = function (id, newTitle) {
    // Edit book with id
    const updatedBooks = books.map((book) => {
      if ((book.id = id)) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // Function to delete a book
  const deleteBookById = function (id) {
    // Delete book with id
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
