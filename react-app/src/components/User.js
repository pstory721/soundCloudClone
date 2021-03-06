import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from 'react-router-dom';
import { GetAllSongs } from "../store/song";
import RealPlaylist from './Playlist-page';
import './user.css';

function User() {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const { userId }  = useParams();
  const songs1 = useSelector((state) => state.songs.songs);
  const userLikes = useSelector((state) => state.likes.songLikes);
  const likedSongs = useSelector((state) => state.likes.userLikes);
  useEffect(() => {
    dispatch(GetAllSongs());
  }, [dispatch]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  function toggle_visibility(id, id2) {
    let something = document.getElementById(id);
    let somethingElse = document.getElementById(id2);
    if(something.style.display === 'block'){
      something.style.display = 'none';
      somethingElse.style.display = 'block';

    }
    else{
      something.style.display = 'block';
      somethingElse.style.display = 'none';
    }
 }

  return (
   <div className='all-user'>
      <div className='user-div'>
        <h1 className='username'>{user.username}</h1>
        <h3>{user.email}</h3>
        <h3>Likes: {likedSongs.length}</h3>
      </div>
      <ul className='user-list'>
          <li className='lis'>
            <NavLink className='lis-text' to={`/users/${sessionUser.id}`} onClick={()=> toggle_visibility('song', 'play')}>
              All
            </NavLink>
              <div className='all-songs' id="song">
              {songs1?.filter(song=> song.user_id === sessionUser.id).map((song) => (
              <div className='shiz-giggles' >
                <ul>
                <li className='li-images'><img className='user-all' src={`${song.image_url}`} alt="ooops that broke"></img></li>
                </ul>
              </div>))}
              </div>
          </li>
          <li className='lis'>
            <NavLink className='lis-text' to={`/users/${sessionUser.id}`} onClick={()=> toggle_visibility('play', 'song')}>
            Likes
            </NavLink>
            <div className='liked-songs' id="play">
              {songs1?.filter(song=> song.user_id === sessionUser.id).map((song) => (
              <div className='shiz-giggles' >
                <ul>
                <li className='li-images'>{`${song.artist}`}</li>
                </ul>
              </div>))}
              </div>
            </li>
          {/* <li className='lis'>
            <NavLink className='lis-text' to={`/users/${sessionUser.id}`} onClick={()=> toggle_visibility('play', 'song')}>
              Playlist
            </NavLink >
              <div className='all-playlist' id="play">
                <RealPlaylist/>
              </div>
          </li> */}
          {/* <li className='lis'><NavLink className='lis-text' to={`/users/${sessionUser.id}`}>History</NavLink></li> */}
      </ul>





   </div>
  );
}
export default User;
