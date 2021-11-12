import React, {  useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import {GetAllPlaylist} from '../store/playlist';
import './Playlist-page.css';


function RealPlaylist(){
    const dispatch = useDispatch();
    const playlist = useSelector((state) => state.playlist.playlist);

    console.log(playlist);

    useEffect(() => {
        dispatch(GetAllPlaylist());
    }, []);

    return (
        <>
        <h1>{playlist?.map((list)=>(
            <div>{list.content}{list.song_id}{list.user_id}</div>
        ))} test</h1>
        </>
    )
}

export default RealPlaylist;
