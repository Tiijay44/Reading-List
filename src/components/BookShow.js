import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDelete = function () {
    deleteBookById(book.id);
  };

  const handleEdit = function () {
    // setShowEdit(showEdit ? false : true);
    setShowEdit(!showEdit);
  };

  const handleSubmit = function () {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img
        alt="book"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      ></img>
      {content}
      <div className="actions">
        <button onClick={handleEdit} type="button" className="edit">
          Edit
        </button>
        <button onClick={handleDelete} type="button" className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
