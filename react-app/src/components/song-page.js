import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetOneSong } from "../store/song";

export function SongPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const singleSong = useSelector((state) => state.songs.singleSong);

  useEffect(() => {
    dispatch(GetOneSong(id));
  }, [dispatch]);

  let userCheck;
  if (sessionUser.id == singleSong?.artist) {
    // userCheck = <EditDelete2 id={artist?.id} />;
  }

  return (
    <div>
        <div>
            {singleSong.title}
        </div>
    </div>
  );
}