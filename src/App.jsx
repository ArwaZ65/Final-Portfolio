import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';
import Contact from './Components/contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
