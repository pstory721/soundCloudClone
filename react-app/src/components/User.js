import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './user.css';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

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

  if (!user) {
    return null;
  }



  return (
   <div>
      <div>
        <h2 className='username'>{user.username}</h2>
      </div>
      <ul className='user-list'>
           <li>Overview</li>
           <li>Likes</li>
           <li>Playlist</li>
           <li>History</li>
       </ul>





   </div>
  );
}
export default User;
