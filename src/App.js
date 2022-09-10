import React from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css'; 
import MainPage from './pages/MainPage';
import BankPage from './pages/BankPage';
import CreatorPage from './pages/CreatorPage';

const App = () => {
    return (
      <>
      <Routes>
          <Route element={<MainPage/>} exact path="/"/>
          <Route element={<BankPage/>} exact path="/bank"/>
          <Route element={<CreatorPage/>} exact path="/creator"/>
      </Routes>
      </>
    );
}

export default App;