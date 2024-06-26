import React from 'react'
import profilepic from '../assets/profilepic.png';
import { TypeAnimation } from 'react-type-animation';
import ShinyEffect from './ShinyEffect';

const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14'>
        <div className='max-w-[800px]'>
            <p className='text-gray-200 md:text-6xl text-3xl tracking-tight'>
                Hey, I AM <br/>
                <span className=''>Mat Rozi Firdaus</span><br/>
                <TypeAnimation sequence={[
                    "Developer",
                    1000,
                    "Webdesigner",
                    1000,
                    "Database Admin",
                    1000
                ]}
                speed={50}
                repeat={Infinity}
                className='font-bold italic'/>
            </p>
            <h2 className='text-gray-300'>With 1+ years of experience</h2>

            <div className='flex flex-row gap-4 mb-4 md:mb-0'>
                <button className='transform transition-transform hover:scale-105 hover:shadow-lg
                z-10 cursor-poiter font-medium text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r
                from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4] rounded-xl'>Download Cv</button>
                <button className='transform transition-transform hover:scale-105 hover:shadow-lg
                z-10 cursor-pointer font-medium text-gray-300 w-1/2 mt-6 p-2 border
                border-gray-400 rounded-xl'>View Work</button>
            </div>
        </div>

        <div className='absolute inset-0 overflow-hidden md:overflow-visible'>
            <div className='hidden md:block'>
                <ShinyEffect left={500} top={-80} size={1400}/>
            </div>
                <ShinyEffect left={-100} top={200} size={1200}/>
        </div>

        
        <img src={profilepic} className='w-[300px] md:w-[500px] rounded-full'/>
    </div>
  )
}

export default Hero