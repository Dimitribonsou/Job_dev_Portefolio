import React from 'react'
import CompetenceItem from './Sous-Components/CompetenceItem'
import BlockImageCompetence from './Sous-Components/BlockImageCompetence'
import logo_angular from './../assets/angular.jpeg'
import logo_react from './../assets/react.jpeg'
import logo_php from './../assets/php.jpeg'
import logo_Csharp from './../assets/csharp.jpeg'
import logo_nodejs from './../assets/nodejs.jpeg'
import logo_mysql from './../assets/mysql.jpeg'
import logo_mongodb from './../assets/mongodb.jpeg'
import logo_ts from './../assets/ts.jpeg'
import logo_html from './../assets/html.jpeg'
import logo_css from './../assets/css.jpeg'
import logo_js from './../assets/js.jpeg'
import logo_bootstrap from './../assets/Bootstrap.jpeg'
import logo_sass from './../assets/sass.jpeg'
import logo_figma from './../assets/figma.jpeg'
import logo_tailwind from './../assets/tailwind.jpeg'
import logo_uml from './../assets/uml.jpeg'


const  CompetenceSection =()=> {
  return (

    <div id='competences' className="mt-3 flex flex-col justify-center items-center gap-10 lg:px-10 px-5">
         <div className="flex flex-col justify-center items-center gap-1 ">
          <p className="text-first text-green ">
            MES <strong className="text-black">COMPETENCES</strong>
          </p>
         <span className="w-3/5 h-1 bg-green "></span>
         </div>

        <p className="text-justify">
        Pour mettre sur pied mes differents projets je fais usage a plusieurs langages de progammation , framework  ,outils et technologies 
        en fonction de l'etape de développement et de la grandeur du projet .
        </p>
        <div  className=" flex xl:justify-between justify-center items-center gap-5 flex-wrap md:px-10 px-5  w-screen h-fit md:mb-20 mb-24">
            <div className=" order-2 flex flex-col gap-4 md:w-4/5  xl:w-2/3 w-11/12 justify-start items-center md:h-80 h-fit   ">
              <CompetenceItem/>
              <CompetenceItem/>
              <CompetenceItem/>
              <CompetenceItem/>
              <CompetenceItem/>
              <CompetenceItem/>
                 
            </div>
            <div className=" order-1 border-x-4 border-y-4 border-green xl:w-1/4   sm:w-4/5 w-11/12 min-w-80 h-80 flex flex-col justify-start items-center gap-4 relative md:mt-0 mt-10 rounded-full py-9">
               <BlockImageCompetence image1={logo_angular} image2={logo_react} image3={logo_php} image4={logo_Csharp}/>
               <BlockImageCompetence image1={logo_nodejs} image2={logo_mongodb} image3={logo_mysql} image4={logo_ts}/>
               <BlockImageCompetence image1={logo_html} image2={logo_css} image3={logo_js} image4={logo_bootstrap}/>
               <BlockImageCompetence image1={logo_sass} image2={logo_figma} image3={logo_tailwind} image4={logo_uml}/>              
        
            </div>
        </div>
    </div>

  )
}

export default CompetenceSection