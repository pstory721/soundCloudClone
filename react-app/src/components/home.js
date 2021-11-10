import React, {  useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { GetAllSongs } from "../store/song";
import Playlist from './Playlist.js';
import "./home.css";

export function Home() {
  const [showPlaylist, setShowPlaylist] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const songs = useSelector((state) => state.songs.songs);
  console.log(songs)
  useEffect(() => {
    dispatch(GetAllSongs());
  }, [dispatch]);

  let playlist;
  if(!sessionUser){
    playlist = <button className='playlist-bttn'>Playlist</button>
  }

  if (sessionUser) return <Redirect to="/discover" />;

  return (
    <div className="home-body">
      <div>
        <div className="discover">
          <h2 className='more'>Discover more with angry cloud</h2>
          <p className="other-main">heres some stuff about angrycloud</p>
          <button className="other-main">Start uploading today "this will probloy be a link"</button>
        </div>
      </div>

      <div className='the-search'>
        <form action="GET">
          <input placeholder="Search for your favorite artist,tracks,or bands"></input>
          <button>Submit</button>
        </form>
      </div>
      <div className="lower">
        <div className="other-main">Heres whats trending in our community</div>
        <div className='the-trends'>
        {songs?.map((song) => (
          <span >
            <img className='trend-image' src={`${song.image_url}`} alt="ooops that broke"></img>
          </span>


        ))}
        </div >
        <button onClick={() => setShowPlaylist(!showPlaylist)} className='playlist-bttn' >Playlist</button>
        {showPlaylist && <Playlist setShowPlaylist={setShowPlaylist}/>}

        </div>
    </div>
  );
}
