import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import About from './components/about';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Map from './components/map';
import Footer from './components/footer';
import './app.css'; 

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}

export default App;
