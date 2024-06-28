import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Profile from './Components/Profile';
import Login from './Components/Login';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;