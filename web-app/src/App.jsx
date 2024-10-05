import React from "react";
import { Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';

export default function App() {
  return (
    <div className="App bg-[#404756]">
      <div className="artboard phone-4">
      <Routes>
         <Route path='/' element={<Login/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/profile' element={<Profile/>} />
       </Routes>
      </div>
    </div>
  );
}