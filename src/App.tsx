import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SplineScene from './components/SplineScene';

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <SplineScene />
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;