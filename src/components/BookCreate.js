import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };

  const handleOnChange = function (e) {
    setTitle(e.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleOnChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}
export default BookCreate;
