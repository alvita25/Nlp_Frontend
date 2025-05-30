import './App.css';
import Chatbot from './components/Chatbot';
import Navbar from './components/Navbar';
import About from './components/About';
import Demo from './components/Demo';
import Landing from './components/Landing';
import { Routes, Route } from "react-router-dom";
import { useState, useLayoutEffect } from 'react';

import "./styles/global.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useLayoutEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (

    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;
