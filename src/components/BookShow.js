import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = function () {
    onDelete(book.id);
  };

  const handleEdit = function () {
    // setShowEdit(showEdit ? false : true);
    setShowEdit(!showEdit);
  };

  const handleSubmit = function (id, newTitle) {
    onEdit(id, newTitle);
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
