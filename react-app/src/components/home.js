import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export function Home() {
  return (
    <div className="home-body">
      <div>
        <div className="discover">
          <h2>Discover more with angry cloud</h2>
          <p>heres some stuff about angrycloud</p>
          <button>Start uploading today "this will probloy be a link"</button>
        </div>
      </div>

      <div className='the-search'>
        <form action="GET">
          <input placeholder="Search for your favorite artist,tracks,or bands"></input>
          <button>Submit</button>
        </form>
      </div>
      <div className="lower">
        <div>Heres whats trending in our community</div>
        <p>THIS IS GOING TO BE A MAP OF CURRENT SONGS</p>
        <button>this will be a link to playlists</button>
      </div>
    </div>
  );
}
