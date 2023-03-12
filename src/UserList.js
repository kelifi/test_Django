import React, { useState } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get('/api/users/')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <button onClick={getUsers}>Afficher</button>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.first_name} {user.last_name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
