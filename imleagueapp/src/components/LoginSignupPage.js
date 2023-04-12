import { useState } from 'react';
import Card from './Card';

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
        <h1>Login or Signup</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
      </Card>
    </div>

  );
}

export default LoginSignupPage;
