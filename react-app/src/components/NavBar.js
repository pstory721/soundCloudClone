
import React,{useState, useEffect} from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import './NavBar.css';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  let signin;
  if(!sessionUser){
    signin=<NavLink to='/login' exact={true} activeClassName='active' className='link-signin'>
    Sign In
  </NavLink>
  }

  let create;
  if(!sessionUser){
    create = <NavLink to='/sign-up' exact={true} activeClassName='active' className='links'>
    Create Account
  </NavLink>
  }

  let logOut;
  if(sessionUser){
    logOut = <LogoutButton/>
  }

  let profileButton;
  if(sessionUser){
    profileButton =  <NavLink to={`/users/${sessionUser.id}`} exact={true} activeClassName='active' className='links'>
    Profile
  </NavLink>
  }

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
          {signin}
        </li>
        <li>
          {create}
        </li>
        <li>
          {profileButton}
        </li>
        <li>
          {logOut}
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default NavBar;
