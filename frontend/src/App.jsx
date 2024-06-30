import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Profile from './Components/Profile';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import PasswordReset from "./Components/PasswordReset";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/passwordreset" element={<PasswordReset/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;