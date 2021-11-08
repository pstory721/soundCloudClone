import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
        <span> profile pic</span>
        <h2>{user.name}</h2>
      </div>
      <ul>
           <li>Overview</li>
           <li>Likes</li>
           <li>Playlist</li>
           <li>History</li>
       </ul>
      




   </div>
  );
}
export default User;
