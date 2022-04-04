import "./App.css";
import "./Mobile.css"

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className='App'>
      <ScrollToTop smooth color='steelblue' />
      <Navbar />
      <LandingPage />
      <About />
      <Projects />
      <Blog />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
