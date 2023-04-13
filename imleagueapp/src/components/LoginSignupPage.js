import { useState } from 'react';
import Card from './Card';
import './css/LoginSignupPage.css';

function LoginSignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform login or signup logic here
  };

  return (
    <div>
      <Card className="login-signup">
        <h1>User Login Page</h1>
         <form onSubmit={handleSubmit}>
            <div className="form-field">
                {/* <label htmlFor="username">Username:</label> */}
                <input
                    id="username"
                    type="text"
                    placeholder= "Username"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div className="form-field">
                {/* <label htmlFor="password">Password:</label> */}
                <input
                    id="password"
                    type="password"
                    placeholder= "Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <div className="">
              <div className="button-field">
                <button className="pagebutton" type="submit">Use as Guest</button>
                <button className="pagebutton" type="submit">Login</button>
                <button className="pagebutton" type="submit">Signup</button>
            </div>

            </div>
          </form> 
      </Card>
    </div>

  );
}

export default LoginSignupPage;
