import React from 'react'
const BlockImageCompetence =(props:{image1:any,image2:any,image3:any,image4:any})=> {
  return (
    <div className='flex w-full  justify-center items-center gap-7  sm:gap-14 md:gap-24 lg:gap-10 xl:gap-7 '>
        <img src={props.image1} alt="logo technologie 1" className='w-10 sm:w-11 md:w-12  xl:w-10' />
        <img src={props.image2} alt="logo technologie 2" className='w-10 sm:w-11 md:w-12  xl:w-10' />
        <img src={props.image3} alt="logo technologie 3" className='w-10 sm:w-11 md:w-12  xl:w-10' />
        <img src={props.image4} alt="logo technologie 4" className='w-10 sm:w-11 md:w-12  xl:w-10' />
    </div>
  )
}

export default BlockImageCompetence