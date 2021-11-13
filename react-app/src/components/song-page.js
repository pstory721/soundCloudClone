import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DeleteASong, GetOneSong } from "../store/song";
import { EditDelete2 } from "./edit-delete";
import CommentForm from './comment.js'
import { DeleteAComment, GetAllComments } from "../store/Comments";

export function SongPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const singleSong = useSelector((state) => state.songs.singleSong);
  const allComments = useSelector((state) => state.comment.comments)


  useEffect(() => {
    dispatch(GetOneSong(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetAllComments(id));
  }, [dispatch]);

<<<<<<< HEAD
  console.log("here are all the comments...........",allComments.comments)
  let newComment = Object.entries(allComments.comments)
  console.log(newComment)
=======
>>>>>>> 490007ff286bb37afc7a889e20cf0fa69ec7c154

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
            <div> {comment.content} </div>

          )}
        </div>
    </div>
  );
}
