import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './header.jsx';
import Intro from './LandingPage/intro.jsx';
import Social from './LandingPage/social.jsx';
import ResumePage from './ResumePage/resumePage.jsx'
import Footer from './footer.jsx';
import HomePage from './LandingPage/HomePage.jsx'
import Aboutpage from './AboutPage/Aboutpage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './ProjectPage/Projects.jsx';
import Loader from './Loader/Loader.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);   

  return (
    
    <>
    {isLoading ? (<Loader />) : (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Aboutpage" element={<Aboutpage />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/resumePage" element={<ResumePage />} />
    </Routes>
  </Router>
    )}
  </>
  )
}

export default App
