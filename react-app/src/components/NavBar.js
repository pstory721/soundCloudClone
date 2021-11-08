
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  return (
    <nav>
      <div className="nav">
      <div className="the-logo">
        <Link to="/" className="homie">
          <img src='https://res.cloudinary.com/dzjkwepju/image/upload/v1635992335/Styckr/1-Angry-cloud_xxckko.png' alt='logo'/>
           AngryCloud
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active' className='links'>
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active' className='links'>
            Create Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active' className='links'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton className='logout'/>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default NavBar;
