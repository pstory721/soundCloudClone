import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
// import { useDispatch } from "react-redux";
import "./Playlist.css";

function Playlist({ setShowPlaylist }) {
  return (
    <div className="the-modal">
      <div
        className="shadow-background"
        onClick={() => setShowPlaylist(false)}>
      </div>
      <div className="playlist-modal">
        <p>To view playlist:</p>
        <NavLink
          to="/login"
          exact={true}
          activeClassName="active"
          className="signin-modal"
        >
          Sign In
        </NavLink>
        <p>Don't have an account?</p>
        <NavLink to='/sign-up' exact={true} activeClassName='active' className='signup-modal'>
          Create Account
        </NavLink>
      </div>
    </div>
  );
}

export default Playlist;
