import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DeleteASong, GetOneSong } from "../store/song";
import { EditDelete2 } from "./edit-delete";
import CommentForm from './comment.js'
import { DeleteAComment, GetAllComments } from "../store/Comments";
import './song-page.css';

export function SongPage() {
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
      dispatch(DeleteASong(id));
    }}
  >
    Delete Song
  </button>;
  }

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
            <CommentForm song_id={id}/>
        </div>
        <div>
          {allComments?.map((comment) =>
            <div> {comment.content} </div>

          )}
        </div>
    </div>
  );
}
