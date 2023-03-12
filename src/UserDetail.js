import React, { useState } from 'react';
import axios from 'axios';

function UserDetail() {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState(null);

  const getUser = () => {
    axios.get(`/api/users/${userId}/`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>User Detail</h1>
      <form onSubmit={getUser}>
        <label>
          User ID:
          <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
        </label>
        <button type="submit">Get User</button>
      </form>
      {user && (
        <div>
          <h2>{user.username}</h2>
          <p>Email: {user.email}</p>
          <p>Age: {user.profile.age}</p>
          <p>Gender: {user.profile.gender}</p>
          <p>Hometown: {user.profile.hometown}</p>
        </div>
      )}
    </div>
  );
}

export default UserDetail;
