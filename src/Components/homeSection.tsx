import React from 'react'
import profil_photo from './../assets/Photo_acceuil_demi.png'
 const HomeSection=() =>{
  return (
    <div id='acceuil' className='flex md:justify-between justify-center items-center gap-7 flex-wrap md:px-10 px-5 mt-10 w-screen'>
         <div className="  w-full  md:w-1/2 sm:w-4/5    flex flex-col content-start justify-start items-center gap-5">
             <p className="text-first text-start w-full  mx-0">
                 Salut ,bienvenue sur la page web de Dimi<strong className='text-green'>Dev</strong>
             </p>
             <div className="flex  w-full items-center gap-5 text-link">
                <span>Je suis</span>
                <span className='text-green'>Developpeur Web & Mobile & Desktop</span>
             </div>
             <p>
             Ayant la connaissance  de plusieurs langages de programmation et framework avec plusieurs projets réalisés je suis disponibles pour transformer vos idées en solution numerique .
             </p>
             <div className="flex  justify-center  w-full items-center gap-3 md:gap-10 mt-3 flex-wrap">
             <a href={require('./../assets/CV_dimidev.pdf')} download="cv_dimitribonsou.pdf" className="btn-one">Télécharger le CV</a>
             <a href="https://wa.me/674606328"  className="btn-two" rel="noreferrer">Me contacter</a>

             </div>
         </div>
         <div className=' w-full  md:w-1/4 sm:w-4/5 relative   flex flex-col content-start justify-start items-center gap-5 bg-green h-60 figure-1'>
              <img src={profil_photo} alt="photo de profil"  className='absolute top-0 left-1/3 -translate-x-1/3 -translate-y-11 w-full h-52'/>
         </div>
    </div>
  )
}

export default HomeSection