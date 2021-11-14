import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Redirect  } from "react-router-dom";
import { DeleteASong, GetOneSong } from "../store/song";
import {UpdateForm} from './edit_upload';
import { EditDelete2 } from "./edit-delete";
import CommentForm from './comment.js'
import { DeleteAComment, GetAllComments } from "../store/Comments";

import './song-page.css';

import EditForm from "./edit_comment";


export function SongPage() {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const singleSong = useSelector((state) => state.songs.singleSong);
  const allComments = useSelector((state) => state.comment.comments)

  console.log(singleSong)

  let userCheck;
  if (sessionUser.id === singleSong?.user_id) {
    userCheck = <button
    id="splashlinkbuttons"
    onClick={() => {
      dispatch(DeleteASong(id))
      // history.push(`/discover`)
    }}
  >
    Delete Song
  </button>
  }
  let otherCheck;
  if (sessionUser.id === singleSong?.user_id) {
    otherCheck = <UpdateForm id={singleSong.id}/>
  }

  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    dispatch(GetOneSong(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetAllComments(id));
  }, [dispatch]);


  return (
    <div className='song-page'>
        <div>
            {singleSong.title}
            {userCheck}
            {otherCheck}
            <CommentForm song_id={id}/>
        </div>
        <div>
          {allComments?.map((comment) =>
            <div>
              {comment.content}
              <button
        id="splashlinkbuttons"
        onClick={() => {
          dispatch(DeleteAComment(comment.id))
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
  )}
  </div>
  </div>
  )}
