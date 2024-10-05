import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import Navbar from './Components/navbar';
import HomeSection from './Components/homeSection';
import AboutSection from './Components/aboutSection';

function App() {
  return (
    <div>
       {/* appel des differents composants */}
       <Navbar/>
       <HomeSection/>
       <AboutSection/>
    </div>
  );
}

export default App;
