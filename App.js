import './App.css';
//import React, { useState } from 'react';
import Users from './components/Users';

function App() {
  // const [users, setUsers] = useState([]);
  // const [newUser, setNewUser] = useState('');

  // function handleAddUser(event) {
  //   event.preventDefault();
  //   const newUser = { id: users.length + 1, name: newUser };
  //   setUsers([...users, newUser]);
  //   setNewUser('');
  // }

  // function handleDeleteUser(userId) {
  //   setUsers(users.filter(user => user.id !== userId));
  // }

  // return (
  //   <div>
  //     <h1>User List</h1>
  //     <UserList users={users} onDeleteUser={handleDeleteUser} />
  //     <form onSubmit={handleAddUser}>
  //       <input
  //         type="text"
  //         placeholder="Enter user name"
  //         value={newUser}
  //         onChange={event => setNewUser(event.target.value)}
  //       />
  //       <button type="submit">Add User</button>
  //     </form>
  //   </div>
  // );

  const DUMMY_USERS = [
    {
      id: 'u1',
      name: 'Buzz Lightyear',
      image: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Buzz_Lightyear.png',
    },
  ];

  return (
    <div>
      <div className="header">
        <div className="header-center">
          <h1 className="header-title">Intramural League Builder</h1>
        </div>
          <button className="header-button">Login</button>
      </div>

      <Users user_list={DUMMY_USERS} />
    </div>
  );
}

export default App;
