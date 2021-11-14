import React,{  useEffect }  from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { GetAllSongs } from "../store/song";
import {usePlayer} from '../context/playerContext';
import "./discover.css";

export function Discover() {
  const {leSong, setLeSong} = usePlayer();
    let history = useHistory();
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  useEffect(() => {
    dispatch(GetAllSongs());
  }, [dispatch]);


  return (
    <div className='discover-page'>
      <div>
        <div>
        <h2 className='trending'> TOP 50: </h2>
        <p className='the-ps'>The most played tracks on Angry Cloud</p>
        <div >
        {songs?.map((song) => (
          <div className='songs-bttns' onClick={() => history.push(`/song-page/${song.id}`)}>
            <img className='trend-image' src={`${song.image_url}`} alt="ooops that broke"></img>
            <button className='song-bttn' onClick={()=> setLeSong(song.song_url)}><img className='play-bttn' src="https://res.cloudinary.com/dzjkwepju/image/upload/v1636850988/Styckr/2105530_q1clya.png" alt='play'></img> </button>
          </div>
          ))}
          {songs?.map((song) => (
          <span >
          </span>
          ))}
        </div>
        <div className='lines-trend'></div>
        </div>
        <h2 className='trending'> TRENDING NOW: </h2>
        <p className='the-ps'>Music trending now</p>
        <div>{songs?.map((song) => (
          <span onClick={() => history.push(`/song-page/${song.id}`)}>
            <img className='trend-image' src={`${song.image_url}`} alt="ooops that broke"></img>
          </span>


        ))}</div>
        <div className='lines'></div>
        <h2 className='trending'> RECOMMENDED BY US</h2>
        <p className='the-ps'>Music we like when we're angry:</p>
        <div>{songs?.map((song) => (
          <span onClick={() => history.push(`/song-page/${song.id}`)}>
            <img className='trend-image' src={`${song.image_url}`} alt="ooops that broke"></img>
          </span>


        ))}</div>
      </div>
    </div>
  );
}
