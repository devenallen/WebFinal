import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignupPage from "./components/LoginSignupPage";
import CreateItem from "./components/CreateItem";
import Homepage from "./components/Homepage";
import EditItem from "./components/EditItem";
import ViewItem from "./components/ViewItem";
import props from './components/UserItem';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // the handle login function which changes the state and functionality of the app based on if the user is logged in
  const handleLogin = () => {
    if (isLoggedIn === false) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }

  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Homepage login = {isLoggedIn} setLogin = {handleLogin} />} />
            <Route path="/login-signup" element={<LoginSignupPage setLogin = {handleLogin}/>} />
            <Route path="/create-item" element={<CreateItem />} />
            <Route path="/edit-user/:name" element={<EditItem />} />
            <Route path="/view-user/:name" element={<ViewItem />} render={(routeProps) => <ViewItem {...routeProps} {...props} />}/>
          </Routes>
        </Router>
    </div>
   
  );
}

export default App;