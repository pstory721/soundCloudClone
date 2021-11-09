import React, {  useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetAllSongs } from "../store/song";
import "./home.css";

export function Home() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const songs = useSelector((state) => state.songs.songs);
  console.log(songs)
  useEffect(() => {
    dispatch(GetAllSongs());
  }, [dispatch]);

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
        {songs?.map((song) => (
          <span>
            <img src={`${song.image_url}`} alt="ooops that broke"></img>
          </span>


        ))}
        <button className='playlist-bttn'>this will be a link to playlists</button>
      </div>
    </div>
  );
}
