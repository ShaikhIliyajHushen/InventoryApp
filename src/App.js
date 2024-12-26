import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from './Landing'
import Dashboard from './component/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import StartPage from './StartPage'
import Home from './component/Home'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/Landing" element={<Landing />}>
          <Route path="Dashboard" element={<Dashboard />}>
          </Route>
          <Route path="Home" element={<Home />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
