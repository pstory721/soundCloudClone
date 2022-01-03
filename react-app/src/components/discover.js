import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAllSongs } from "../store/song";
import { usePlayer } from "../context/playerContext";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "./discover.css";
import "pure-react-carousel/dist/react-carousel.es.css";
export function Discover() {
  const { leSong, setLeSong } = usePlayer();
  let history = useHistory();
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const playlist = useSelector((state) => state.playlist.playlist);
  const singleSong = useSelector((state) => state.songs.singleSong);
  useEffect(() => {
    dispatch(GetAllSongs());
  }, [dispatch]);

  return (
    <div className="discover-page">
      <div >
        <div >
          <h2 className="trending"> TOP 10: </h2>
          <p className="the-ps">The most played tracks on Angry Cloud</p>

          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={9}
          >
            <Slider className="carousel">
              {songs
                ?.filter((song) => song.id < 10)
                .map((song) => (
                  <Slide index={song.id} className="size">
                    <div className="songs-bttns">
                      <h1 className='disc-song-tittle'>{song.title}</h1>
                      <ButtonBack className="btn-back2"/>
                      <img
                        img
                        className="slider2"
                        onClick={() => history.push(`/song-page/${song.id}`)}
                        src={`${song.image_url}`}
                        alt="ooops that broke"
                      ></img>
                      <button
                        className="song-bttn"
                        onClick={() => setLeSong(song.song_url)}
                      >
                        <img
                          className="play-bttn"
                          src="https://res.cloudinary.com/dzjkwepju/image/upload/v1639445654/Styckr/Untitled_design_26_mgyaki.png"
                          alt="play"
                        ></img>{" "}
                      </button>
                      <ButtonNext className="btn-next2" />
                    </div>
                  </Slide>
                ))}
            </Slider>
          </CarouselProvider>
          <div className="lines-trend"></div>
        </div>
        <h2 className="trending"> TRENDING NOW: </h2>
        <p className="the-ps">Music trending now</p>
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={9}
          >
            <Slider className="carousel">
          {songs
            ?.filter((song) => song.id > 10 && song.id < 21)
            .map((song) => (
              <Slide index={song.id} className="size">
              <div className="songs-bttns">
              <h1 className='disc-song-tittle'>{song.title}</h1>
              <ButtonBack className="btn-back2"/>
                <img
                  className="slider2"
                  onClick={() => history.push(`/song-page/${song.id}`)}
                  src={`${song.image_url}`}
                  alt="ooops that broke"
                ></img>
                <button
                  className="song-bttn"
                  onClick={() => setLeSong(song.song_url)}
                >
                  <img
                    className="play-bttn"
                    src="https://res.cloudinary.com/dzjkwepju/image/upload/v1639445654/Styckr/Untitled_design_26_mgyaki.png"
                    alt="play"
                  ></img>{" "}
                </button>
                <ButtonNext className="btn-next2" />
              </div>
              </Slide>
            ))}
            </Slider>
            </CarouselProvider>
          {songs?.map((song) => (
            <span></span>
          ))}

        <div className="lines"></div>
        <h2 className="trending"> ALL SONGS</h2>
        <p className="the-ps">All the angriest Songs</p>
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={28}
          >
            <Slider className="carousel">

          {songs?.map((song) => (
             <Slide index={song.id} className="size">
            <div className="songs-bttns">
            <h1 className='disc-song-tittle'>{song.title}</h1>
            <ButtonBack className="btn-back2"/>
              <img
                className="slider2"
                onClick={() => history.push(`/song-page/${song.id}`)}
                src={`${song.image_url}`}
                alt="ooops that broke"
              ></img>
              <button
                className="song-bttn"
                onClick={() => setLeSong(song.song_url)}
              >
                <img
                  className="play-bttn"
                  src="https://res.cloudinary.com/dzjkwepju/image/upload/v1639445654/Styckr/Untitled_design_26_mgyaki.png"
                  alt="play"
                ></img>{" "}
              </button>
              <ButtonNext className="btn-next2" />
            </div>
            </Slide>
          ))}
          </Slider>
          </CarouselProvider>

          {songs?.map((song) => (
            <span></span>
          ))}
      </div>
    </div>
  );
}
