import React from "react";

import Main from "./components/Main";
import About from "./components/About";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import Blog from "./components/Blog";

import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import Projects from "./components/Projects";





function App() {


  return (
    <div className='App'>
      <ScrollToTop smooth color='steelblue' />

      <Navbar />
      <Main />
      <section id='aboutpage'>
        <About />
      </section>
      <hr />
      <Projects />
      <hr />
      <Blog />
      <hr />
      <Contacts />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
