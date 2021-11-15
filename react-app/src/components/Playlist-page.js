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
    <div  >
      {playlist?.map((list) => (
        <div className='playlist-list'>
          <h1 className='content'>{list.content}</h1>
          {list.songs?.map((song) => (
            <div>
              <p className='song-title'>{song.title}</p>
              <img src={song.image_url} alt='art' width='100px' height='100px' />
              </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RealPlaylist;
