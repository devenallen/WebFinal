import './App.css';
// import { useState } from 'react';
// import { Link } from "react-router-dom";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import LoginSignupPage from "./components/LoginSignupPage";
import CreateItem from "./components/CreateItem";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login-signup" element={<LoginSignupPage />} />
          <Route path="/create-item" element={<CreateItem />} />
        </Routes>
    </div>
  );
}

export default App;