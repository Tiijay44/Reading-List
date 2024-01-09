import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleSubmit = function (e) {
    e.preventDefault();

    // Closes the edit form
    onSubmit();

    editBookById(book.id, title);
  };

  const handleOnChange = function (e) {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input onChange={handleOnChange} value={title} className="input" />
      <button className="button is-primary">Save</button>
    </form>
  );
}
export default BookEdit;
