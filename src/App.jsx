import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import './App.css'

function App() {
  const [puppyId, setPuppyId] = useState(null)

  return (
    <Routes>
        <Route path="/" element={<AllPlayers setPuppyId={setPuppyId}/>} />
        <Route path="/Players" element={<SinglePlayer puppyId={puppyId}/>}/>
    </Routes>
  );
}

export default App


