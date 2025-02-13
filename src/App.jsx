import './App.css'
import React from "react";
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
export default App