import React from 'react'
import HomePage from './pages/home'
import { Routes, Route } from 'react-router-dom';
import About from './pages/about';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
