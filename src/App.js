import React from 'react';
import './App.css'
import NavBar from "./components/navbar/navbar";
import HomePage from './pages/HomePage';
import Footer from './components/footer/Footer';
import { Routes, Route } from "react-router-dom";
import StoreState from './components/context/Store';
import Signin from './pages/signin/signin';

function App() {
  return (
    <>
      <StoreState>
          <NavBar />
          <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
          {/* <HomePage /> */}
          <Footer />
      </StoreState>
    </>

  );
}

export default App;

