import React from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css'; 
import MainPage from './pages/MainPage';

const App = () => {
    return (
      <>
      <Routes>
          <Route element={<MainPage/>} exact path="/"/>
        
      </Routes>
      </>
    );
}

export default App;