import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPlaylist } from "../store/playlist";
import "./Playlist-page.css";

function RealPlaylist() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist.playlist);
  console.log(playlist);

  useEffect(() => {
    dispatch(GetAllPlaylist());
  }, []);

  return (
    <div>
      {playlist?.map((list) => (
        <div>
          <h1>{list.content}</h1>
          {list.songs?.map((song) => (
            <div>{song.title}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RealPlaylist;
