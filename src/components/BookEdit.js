import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleSubmit = function (e) {
    e.preventDefault();
    onSubmit(book.id, newTitle);
  };

  const handleOnChange = function (e) {
    setNewTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input onChange={handleOnChange} value={newTitle} className="input" />
      <button className="button is-primary">Save</button>
    </form>
  );
}
export default BookEdit;
