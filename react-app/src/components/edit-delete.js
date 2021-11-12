import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { UpdateAComment, DeleteAComment } from "../store/Comments";

export function EditDelete2() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const { id } = useParams();
  let history = useHistory();

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { content, id}
    let newNote = dispatch(UpdateAComment(payload));
    setShowForm(false);
    if (newNote) {
      history.push(`/`);
    }
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)} id="splashlinkbuttons">
        Edit
      </button>
      {showForm && (
        <form className="CommentForm" onSubmit={handleSubmit}>
          <label className="noteForms">
            <textarea
              id="comment"
              type="textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Your Comment here"
            />
          </label>
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      )}
      <button
        id="splashlinkbuttons"
        onClick={() => {
          dispatch(DeleteAComment(id));
        }}
      >
        Delete
      </button>
    </div>
  );
}
