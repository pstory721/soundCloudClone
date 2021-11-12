import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DeleteASong, GetOneSong } from "../store/song";
import { EditDelete2 } from "./edit-delete";
import CommentForm from './comment.js'
import { GetAllComments } from "../store/Comments";

export function SongPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const singleSong = useSelector((state) => state.songs.singleSong);
  const allComments = useSelector((state) => state)


  useEffect(() => {
    dispatch(GetOneSong(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetAllComments());
  }, [dispatch]);

  console.log(allComments)

  let userCheck;
  // if (sessionUser.id == comment?.artist) {
  //   userCheck = <EditDelete2  />;
  // }

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
            {/* {userCheck} */}
            <CommentForm song_id={id}/>
        </div>
    </div>
  );
}
