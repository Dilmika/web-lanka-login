import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom'
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Navbar from './pages/Navbar';

function App() {

  const [user, setUser] = useState(null)
  console.log('user: ', user);

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"))
    setUser(user)

}, [])


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route
            path="/"
            element={user && (user.email && user.token) ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!(user &&(user.email && user.token)) ? <Login /> : <Navigate to="/" /> }
          />
          <Route
            path="/signup"
            element={!(user && (user.email && user.token)) ? <Signup /> : <Navigate to="/" /> }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
