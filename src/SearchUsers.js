import React, { useState } from 'react';
import axios from 'axios';

function UserSearch() {
  const [city, setCity] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [gender, setGender] = useState('');
  const [users, setUsers] = useState([]);

  const searchUsers = () => {
    axios.get(`/api/users/?city=${city}&min_age=${minAge}&max_age=${maxAge}&gender=${gender}`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <h2>Recherche d'utilisateurs</h2>
      <label htmlFor="city">Ville :</label>
      <input type="text" id="city" value={city} onChange={event => setCity(event.target.value)} />
      <label htmlFor="minAge">Âge minimum :</label>
      <input type="text" id="minAge" value={minAge} onChange={event => setMinAge(event.target.value)} />
      <label htmlFor="maxAge">Âge maximum :</label>
      <input type="text" id="maxAge" value={maxAge} onChange={event => setMaxAge(event.target.value)} />
      <label htmlFor="gender">Genre :</label>
      <select id="gender" value={gender} onChange={event => setGender(event.target.value)}>
        <option value="">Tous</option>
        <option value="M">Masculin</option>
        <option value="F">Féminin</option>
      </select>
      <button onClick={searchUsers}>Rechercher</button>
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

export default UserSearch;
