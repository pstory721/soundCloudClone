import React, {  useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllPlaylist from '../store/playlist';
import './Playlist-page.css';


function RealPlaylist(){
    const dispatch = useDispatch();
    const playlist = useSelector((state) => state.playlist);

    console.log(playlist);

    useEffect(() => {
        dispatch(getAllPlaylist());
    }, []);

    return (
        <>
        <h1>{playlist.playlist} test</h1>
        </>
    )
}

export default RealPlaylist;
