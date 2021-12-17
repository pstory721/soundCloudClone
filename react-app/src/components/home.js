import React, {  useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { GetAllSongs } from "../store/song";
import Playlist from './Playlist.js';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "./home.css";
import 'pure-react-carousel/dist/react-carousel.es.css';

export function Home() {
  const [showPlaylist, setShowPlaylist] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const songs = useSelector((state) => state.songs.songs);

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
      <div className='pats-div'>
        <div className="discover">
          <h2 className='more'>Discover more with angry cloud</h2>
          <p className="other-main">Angry Cloud is a place to share angry music as well as discover them!</p>
          <button onClick={() => setShowPlaylist(!showPlaylist)} className="bttn-upload">Start uploading today!</button>
        </div>
      </div>

      <div className='the-search'>
          <div className='work'>
          <input className='joe' placeholder="Search for your favorite artist,tracks,or bands"></input>
          <button onClick={() => setShowPlaylist(!showPlaylist)} className='pats-bttn'><img className='pats-img' src='https://res.cloudinary.com/dzjkwepju/image/upload/v1636685077/Styckr/1200px-Magnifying_glass_icon.svg_swnjm6.png' alt='glass'></img></button>
          </div>
      </div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={28}
      >
      <div className="the -trends">
        <div className="">Heres whats trending in our community</div>
        <div>

        <Slider className="size"  >
        {songs?.map((song) => (
          <Slide index={song.id} >
            <ButtonBack className="btn-back"/>
            <img className="slider" src={`${song.image_url}`} alt="ooops that broke"></img>
            <ButtonNext className="btn-next"/>
          </Slide>

        ))}
        </Slider>

        </div >
        <button onClick={() => setShowPlaylist(!showPlaylist)} className='playlist-bttn' >Playlist</button>
        {showPlaylist && <Playlist setShowPlaylist={setShowPlaylist}/>}

        </div>
        </CarouselProvider>
    </div>
  );
}
