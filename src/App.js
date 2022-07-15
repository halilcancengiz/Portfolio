/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import './App.css';

import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import BackToTop from './components/BackToTop/BackToTop';
import MyProject from './components/MyProject/MyProject';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import { ThemeProvider } from './context/ThemeContext';





function App() {

  
  return (
    <ThemeProvider>
      <header>
        <div id='navigationAndHomeContainer'>
          <Navigation />
          <Home />
        </div>
      </header>
      <main>
        <AboutMe />
        <MyProject />
        <Technologies />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>

      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
