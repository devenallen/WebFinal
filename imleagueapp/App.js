import './App.css';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignupPage from "./components/LoginSignupPage";
import CreateItem from "./components/CreateItem";
import Homepage from "./components/Homepage";
import EditItem from "./components/EditItem";
// import Users from "./components/Users";
// import { useState } from 'react';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login-signup" element={<LoginSignupPage />} />
          <Route path="/create-item" element={<CreateItem />} />
          <Route path="/edit-item" element={<EditItem />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;