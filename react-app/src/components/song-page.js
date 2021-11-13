import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DeleteASong, GetOneSong } from "../store/song";
import { EditDelete2 } from "./edit-delete";
import CommentForm from './comment.js'
import { DeleteAComment, GetAllComments } from "../store/Comments";
import EditForm from "./edit_comment";

export function SongPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const singleSong = useSelector((state) => state.songs.singleSong);
  const allComments = useSelector((state) => state.comment.comments)
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(GetOneSong(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetAllComments(id));
  }, [dispatch]);


  return (
    <div>
        <div>
            {singleSong.title}
            <button
        id="splashlinkbuttons"
        onClick={() => {
          dispatch(DeleteASong(id));
        }}
      >
        Delete Song
      </button>
            <CommentForm song_id={id}/>
        </div>
        <div>
          {allComments?.map((comment) =>
            <div>
              {comment.content}
              <button
        id="splashlinkbuttons"
        onClick={() => {
          dispatch(DeleteAComment(comment.id));
        }}
      >
        Delete Comment
      </button>
      <button onClick={() => setShowForm(true)} id="splashlinkbuttons">
        Edit
      </button>
      {showForm && (
        <EditForm id={comment.id} />
      )}
        </div>
  )};
  </div>
  </div>
  )}
