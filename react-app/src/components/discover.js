import React,{  useEffect }  from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { GetAllSongs } from "../store/song";
import {usePlayer} from '../context/playerContext';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "./discover.css";

export function Discover() {
  const {leSong, setLeSong} = usePlayer();
    let history = useHistory();
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const playlist = useSelector((state) => state.playlist.playlist);
  useEffect(() => {
    dispatch(GetAllSongs());
  }, [dispatch]);


  return (
    <div className='discover-page'>
      <div>
        <div>
        <h2 className='trending'> TOP 10: </h2>
        <p className='the-ps'>The most played tracks on Angry Cloud</p>
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <div className='overflow'>
          <Slider >
        {songs?.filter(song => song.id < 10).map((song) => (
          <Slide  >
          <div className='songs-bttns' >
            <img className='trend-image' onClick={() => history.push(`/song-page/${song.id}`)} src={`${song.image_url}`} alt="ooops that broke"></img>
            <button className='song-bttn' onClick={()=> setLeSong(song.song_url)}><img className='play-bttn' src="https://res.cloudinary.com/dzjkwepju/image/upload/v1636850988/Styckr/2105530_q1clya.png" alt='play'></img> </button>
          </div>
          </Slide>
          ))}
          </Slider>
        </div>
        <div className='lines-trend'></div>
        </CarouselProvider>
        </div>
        <h2 className='trending'> TRENDING NOW: </h2>
        <p className='the-ps'>Music trending now</p>
        <div className='overflow'>
        {songs?.filter(song => song.id > 10 && song.id< 21).map((song) => (
          <div className='songs-bttns' >
            <img className='trend-image' onClick={() => history.push(`/song-page/${song.id}`)} src={`${song.image_url}`} alt="ooops that broke"></img>
            <button className='song-bttn' onClick={()=> setLeSong(song.song_url)}><img className='play-bttn' src="https://res.cloudinary.com/dzjkwepju/image/upload/v1636850988/Styckr/2105530_q1clya.png" alt='play'></img> </button>
          </div>
          ))}
          {songs?.map((song) => (
          <span >
          </span>
          ))}
        </div>
        <div className='lines'></div>
        <h2 className='trending'> ALL SONGS</h2>
        <p className='the-ps'>All the angriest Songs</p>
        <div className='overflow'>
        {songs?.map((song) => (
          <div className='songs-bttns' >
            <img className='trend-image' onClick={() => history.push(`/song-page/${song.id}`)} src={`${song.image_url}`} alt="ooops that broke"></img>
            <button className='song-bttn' onClick={()=> setLeSong(song.song_url)}><img className='play-bttn' src="https://res.cloudinary.com/dzjkwepju/image/upload/v1636850988/Styckr/2105530_q1clya.png" alt='play'></img> </button>
          </div>
          ))}
          {songs?.map((song) => (
          <span >
          </span>
          ))}
        </div>
      </div>
    </div>
  );
}
