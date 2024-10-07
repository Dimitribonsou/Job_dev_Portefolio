import React from 'react';
import './App.scss';
import Navbar from './Components/navbar';
import HomeSection from './Components/homeSection';
import AboutSection from './Components/aboutSection';
import CompetenceSection from './Components/CompetenceSection';

function App() {
  return (
    <div>
       {/* appel des differents composants */}
       <Navbar/>
       <HomeSection/>
       <AboutSection/>
       <CompetenceSection/>
    </div>
  );
}

export default App;
