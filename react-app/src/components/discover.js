import React,{  useEffect }  from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { GetAllSongs } from "../store/song";
import "./home.css";

export function Discover() {
    let history = useHistory();
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  useEffect(() => {
    dispatch(GetAllSongs());
  }, [dispatch]);


  return (
    <div>
      <div>
        <div>
        <h2> TOP 50: </h2>
        {songs?.map((song) => (
          <span onClick={() => history.push(`/song-page/${song.id}`)}>
            <img className='trend-image' src={`${song.image_url}`} alt="ooops that broke"></img>
          </span>
        ))}
        </div>
        <h2> TRENDING NOW: </h2>
        <div>{songs?.map((song) => (
          <span >
            <img className='trend-image' src={`${song.image_url}`} alt="ooops that broke"></img>
          </span>


        ))}</div>
        <h2> RECOMMENDED BY US: </h2>
        <div>{songs?.map((song) => (
          <span >
            <img className='trend-image' src={`${song.image_url}`} alt="ooops that broke"></img>
          </span>


        ))}</div>
      </div>
    </div>
  );
}
