import React from 'react'
import ServicesItem from './Sous-Components/ServicesItem'

const ServiceSection =()=> {
  return (
    <div  className='my-2 flex flex-col gap-20 items-center'>
         <div id='services' className="flex flex-col justify-center items-center gap-1 ">
          <p className="text-first text-green ">
            MES <strong className="text-black">SERVICES</strong>
          </p>
         <span className="w-3/5 h-1 bg-green "></span>
         </div>
      <div className='flex justify-center sm:justify-between items-center md:gap-10 gap-10 flex-wrap w-full px-10'>
          <ServicesItem 
            title='Webdesign' 
            description='Je crée des designs uniques et intuitifs, adaptés à votre public. Mon approche allie esthétique et ergonomie pour garantir une expérience utilisateur optimale.'
          />
          <ServicesItem title='Développement Front-End' description='Je développe des interfaces réactives et accessibles, visant à offrir une expérience utilisateur exceptionnelle sur tous les appareils, tout en utilisant des technologies modernes.'/>
          <ServicesItem title='Développement Back-End' description='Je construis une infrastructure robuste pour vos applications. Mes solutions incluent des bases de données sécurisées et des logiques métier performantes pour une expérience fiable.'/>
          <ServicesItem title='Formation' description="Je forme les débutants sur les langages de programmation modernes de manière interactive, leur permettant d'acquérir des compétences solides et de devenir autonomes dans le développement logiciel."/>
          <ServicesItem title=' Conception de Sites Web' description='Je conçois des sites web sur mesure, adaptés à vos besoins, avec des designs modernes et des fonctionnalités performantes pour attirer et fidéliser vos clients.'/>
          <ServicesItem title=' Applications Web et Mobiles' description='Je développe des applications web et mobiles intuitives et sécurisées, personnalisées pour répondre à votre secteur et engager vos utilisateurs où qu’ils soient.'/>
          
      </div>
    </div>
  )
}

export default ServiceSection