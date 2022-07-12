import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import BackToTop from './components/BackToTop/BackToTop';
import MyProject from './components/MyProject/MyProject';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';




function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
