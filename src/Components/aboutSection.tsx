import React from 'react'
import profil_photo from './../assets/photo_flyers.png'
import chapeau from './../assets/chapeau.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
const  AboutSection =()=> {
  return (
    <div className=' bg-yellow-200 flex md:justify-between justify-center items-center gap-7 flex-wrap md:px-10 px-5 mt-20 w-screen h-fit '>
        
        <div className=" order-1 md:order-2 flex flex-col gap-5 md:w-2/3 w-11/12 justify-start items-center md:h-80 h-fit bg-blue-200  ">
            <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-first text-green">
                        APROPOS DE <strong className="text-black">MOI</strong>
                </p>
                <span className='w-3/5 h-1 bg-green '></span>
            </div>
             
        </div>
        <div className=" order-2  md:order-1 border-x-4 border-y-4 border-green md:w-1/4 sm:w-4/5 w-11/12 min-w-80 h-80 flex justify-start items-center gap-5 relative">
             <div className="flex  w-1/6  h-full flex-col justify-start  items-start gap-5 py-5 px-2">
                  <div className="flex  justify-center items-center w-14 h-14 rounded-full bg-green text light px-3 hover:bg-transparent border-x-4 border-y-4   border-green   cursor-pointer">
                  <FontAwesomeIcon icon={faCoffee} className='text-white ' />
                  </div>
                  <div className="flex  justify-center items-center w-14 h-14 rounded-full bg-green text light px-3 hover:bg-transparent border-x-4 border-y-4   border-green   cursor-pointer">
                  <FontAwesomeIcon icon={faCoffee} className='text-white ' />
                  </div>
                  <div className="flex  justify-center items-center w-14 h-14 rounded-full bg-green text light px-3 hover:bg-transparent border-x-4 border-y-4   border-green   cursor-pointer">
                  <FontAwesomeIcon icon={faCoffee} className='text-white ' />
                  </div>
                  <div className="flex  justify-center items-center w-14 h-14 rounded-full bg-green text light px-3 hover:bg-transparent border-x-4 border-y-4   border-green   cursor-pointer">
                  <FontAwesomeIcon icon={faCoffee} className='text-white ' />
                  </div>
                 
             </div>
             <img src={profil_photo} alt="about profil"  className='absolute top-0 left-2/3 -translate-x-2/3 -translate-y-20 w-4/5 h-96'/>
             <div className="  flex justify-center items-center w-20 h-20 rounded-full bg-green absolute top-0 left-full -translate-x-2/3 -translate-y-10">
             <img src={chapeau} alt="chapeau laureat"  className='w-4/5'/>
             </div>
        </div>
    </div>
  )
}

export default AboutSection