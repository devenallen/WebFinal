import './css/Homepage.css';
import { useState } from 'react';
import Users from './Users';
import { Link } from "react-router-dom";

function Homepage() {
    const [users, setUsers] = useState([
        {
        id: 'Hawks',
        name: 'Hawks',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/640px-Atlanta_Hawks_logo.svg.png',
        captain: 'John',
        numPlayers: 5,
        },
        {
        id: 'Bucks',
        name: 'Bucks',
        image: 'https://dq7axd795mydj.cloudfront.net/bots/bucks/assets/avatar-bg-transparent.png',
        captain: 'Joe',
        numPlayers: 6,
        },
        {
        id: 'Lakers',
        name: 'Lakers',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1200px-Los_Angeles_Lakers_logo.svg.png',
        captain: 'Bob',
        numPlayers: 5,
        },
        {
        id: 'Heat',
        name: 'Heat',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/640px-Miami_Heat_logo.svg.png',
        captain: 'Sue',
        numPlayers: 7,
        },
        {
        id: 'Warriors',
        name: 'Warriors',
        image: 'https://images.ctfassets.net/a4rx79jcl3n1/139uoz1HBz6PsWh8pEqOCK/eced155325ccb92acf76962ca5d688e5/gsw-logo-1920.png',
        captain: 'Sally',
        numPlayers: 8,
        },
        {
        id: 'Celtics',
        name: 'Celtics',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/800px-Boston_Celtics.svg.png',
        captain: 'Tom',
        numPlayers: 6,
        },
    ]);

    function handleDeleteUser(userId) {
        setUsers(users.filter(user => user.id !== userId));
    }

    function handleEditUser(userId, newName) {
        const updatedUsers = users.map(user => {
        if (user.id === userId) {
            return { ...user, name: newName };
        } else {
            return user;
        }
        });
        setUsers(updatedUsers);
    }

    return (
        <div>
            <Link to="/create-item">
                <div className="button-container">
                    <button className="create-button">Create Team</button>
                </div>
            </Link>
            <div className="header">
                <div className="header-center">
                    <h1 className="header-title">Intramural League Builder</h1>
                </div>
                    <Link to="/login-signup">
                        <button className="header-button">Login</button>
                    </Link>
            </div>

            <Users users={users} onDeleteUser={handleDeleteUser} onEditUser={handleEditUser} />
        </div>
    );
}

export default Homepage;