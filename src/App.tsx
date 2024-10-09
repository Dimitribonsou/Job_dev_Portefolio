import React from 'react';
import './App.scss';
import Navbar from './Components/navbar';
import HomeSection from './Components/homeSection';
import AboutSection from './Components/aboutSection';
import CompetenceSection from './Components/CompetenceSection';
import ServiceSection from './Components/ServiceSection';
import FooterSection from './Components/FooterSection';
import ProjetSection from './Components/ProjetSection';

function App() {
  return (
    <div>
       {/* appel des differents composants */}
       <Navbar/>
       <HomeSection/>
       <AboutSection/>
       <CompetenceSection/>
       <ServiceSection/>
       <ProjetSection/>
       <FooterSection/>
    </div>
  );
}

export default App;
