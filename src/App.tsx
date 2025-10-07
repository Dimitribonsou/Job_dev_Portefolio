import React, { useState, useEffect } from 'react';
import './App.scss';
import logo from './assets/logo_dimidev.png'
import { Helmet } from 'react-helmet';
import Navbar from './Components/navbar';
import HomeSection from './Components/homeSection';
import AboutSection from './Components/aboutSection';
import CompetenceSection from './Components/CompetenceSection';
import ServiceSection from './Components/ServiceSection';
import FooterSection from './Components/FooterSection';
import ProjetSection from './Components/ProjetSection';

// Création du contexte de thème
export const ThemeContext = React.createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <Helmet htmlAttributes={{ lang: 'fr' }}>
          <title>Dimitri Bonsou | Développeur Web & Mobile Full-Stack</title>
          <meta name="description" content="Développeur web et mobile full-stack à Douala, France. Expert en création de solutions web modernes, applications mobiles et sites e-commerce sur mesure." />
          <meta name="keywords" content="développeur web douala, développeur mobile cameroun, full-stack developer, création site web, application mobile, e-commerce, freelance, dimidev, dimitri bonsou" />
          <meta property="og:title" content="Dimitri Bonsou | Développeur Web & Mobile Full-Stack" />
          <meta property="og:description" content="Transformez vos idées en solutions digitales performantes. Expert en développement web et mobile à Limoges, France." />
          <meta property="og:url" content="https://dimidevofficiel.vercel.app" />
          <meta property="og:image" content={logo} />
          <meta name="google-site-verification" content="C5ftg5VXj5bdp7FA8aBYQZt-xwKjbTg4xNj8wQyzUZM" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-WTEP5953F2"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WTEP5953F2');
            `}
          </script>
        </Helmet>

        <Navbar />
        <main className="main-content">
          <HomeSection />
          <AboutSection />
          <CompetenceSection />
          <ServiceSection />
          <ProjetSection />
        </main>
        <FooterSection />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
