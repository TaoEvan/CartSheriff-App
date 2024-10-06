import {React, useState } from "react";
import { Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';

export default function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App bg-[#404756] flex justify-center">
      <div className="artboard phone-4">
      <Routes>
         <Route path='/' element={<Login setUsername={setUsername}/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/profile' element={<Profile username={username}/>} />
       </Routes>
      </div>
    </div>
  );
}