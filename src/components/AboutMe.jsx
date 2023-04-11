import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './ThemeContext';
import profileImage from '../assets/portrait.webp'
import cameraImage from '../assets/cameraPortrait.webp'

function AboutMe() {
    const { darkMode } = useContext(ThemeContext);
    return(
        <div className={`flex justify-center p-8 ${darkMode ? 'bg-[#131427]' : 'bg-[#E79B56] '} xl:h-[400px] `}>
            <div className='flex flex-col items-center xl:flex-row'>
                <div className='md:flex md:flex-row-reverse md:items-center xl:flex-col xl:mr-16'>
                 <h2 id='aboutMe' className={`text-white text-4xl mb-6 md:ml-8 xl:ml-0`}>ABOUT ME
                 </h2>
                <div className='relative inline-block'>
                     <img className=' w-56 hover:opacity-0' src={profileImage} alt="Profile Picture" />
                    <img className=' w-56 w absolute top-0 opacity-0 hover:opacity-100' src={cameraImage} alt="" />
                </div>
                </div>
                
            <div className='flex flex-col items-center md:w-5/6 md:mr-0 xl:max-w-2xl'>
            <p className={`text-white text-xl w-11/12 mt-6 xl:w-full xl:text-2xl`}>
                I’m Jake — a developer interested in helping your business tell the most beautiful story.
            </p>
            <p className={`text-white text-xl w-11/12 mt-6 xl:w-full xl:text-2xl`}>    
                I currently work at Hope Church as their Video Specialist
            </p>  
            <p className={`text-white text-xl w-11/12 mt-6 xl:w-full xl:text-2xl`}>
                I'm also a climber who enjoys exploring.
            </p>
            </div>
            </div>
        </div>
    )
}

export default AboutMe;