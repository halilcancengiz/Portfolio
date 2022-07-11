import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import BackToTop from './components/BackToTop';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import MyProject from './components/MyProject';
import Footer from './components/Footer';
import Contact from './components/Contact';




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
