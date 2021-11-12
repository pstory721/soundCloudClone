import React,{  useEffect }  from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { GetAllSongs } from "../store/song";
import {usePlayer} from '../context/playerContext';
import "./discover.css";

export function Discover() {
  const {src, setSrc} = usePlayer();
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
        <h2> TOP 50: </h2>
        <p className='the-ps'>The most played tracks on Angry Cloud</p>
        {songs?.map((song) => (
          <span onClick={() => history.push(`/song-page/${song.id}`)}>
            <img className='trend-image' src={`${song.image_url}`} alt="ooops that broke"></img>
          </span>
        ))}
          {songs?.map((song) => (
          <span >
            <button onClick={()=> setSrc(song.song_url)}></button>
          </span>
        ))}
        <div className='lines'></div>
        </div>
        <h2> TRENDING NOW: </h2>
        <p className='the-ps'>Music trending now</p>
        <div>{songs?.map((song) => (
          <span onClick={() => history.push(`/song-page/${song.id}`)}>
            <img className='trend-image' src={`${song.image_url}`} alt="ooops that broke"></img>
          </span>


        ))}</div>
        <div className='lines'></div>
        <h2> RECOMMENDED BY US</h2>
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
