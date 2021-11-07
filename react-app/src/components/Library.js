import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export function Library() {
  return (
    <div>
       <ul>
           <li>Overview</li>
           <li>Likes</li>
           <li>Playlist</li>
           <li>History</li>
       </ul>
        <div>
            <h2>Recently played</h2>
            <div>
                A MAP
            </div>
        </div>
        <div>
            <h2>Liked</h2>
            <div>
                A MAP
            </div>
        </div>
        <div>
            <h2>Playlist</h2>
            <div>
                A MAP
            </div>
        </div>


    </div>
  );
}
