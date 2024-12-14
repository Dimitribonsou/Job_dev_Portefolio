import React from 'react';
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

function App() {
  return (

    <div>
      {/* ajout du block helmet pour le referencement */}
        <Helmet htmlAttributes={{ lang: 'fr' }}>
                  <title>Développeur Web et Mobile à Douala, Cameroun</title>
                  <meta name="description" content="Développeur web et mobile à Douala, Cameroun. Spécialisé dans le développement de solutions web personnalisées et d'applications mobiles." />
                  <meta name="keywords" content="creation site web douala,cameroun ,developpeur libre cameroun,freelancer  douala,développeur web douala,développeur web cameroun, applications mobiles,dimidev,dimitri bonsou" />
                  <meta property="og:title" content="Développeur Web et Mobile à Douala, Cameroun" />
                  <meta property="og:description" content="Développeur web et mobile à Douala, Cameroun. Spécialisé dans le développement de solutions web personnalisées et d'applications mobiles pour les entreprises." />
                  <meta property="og:url" content="https://dimitribonsou-website.vercel.app/" />
                  <meta property="og:image" content={logo} />
                  {/* ajouter la balise de verification de google */}
                  <meta name="google-site-verification" content="C5ftg5VXj5bdp7FA8aBYQZt-xwKjbTg4xNj8wQyzUZM" />
                  {/* <!-- Google tag (gtag.js) --> */}
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
