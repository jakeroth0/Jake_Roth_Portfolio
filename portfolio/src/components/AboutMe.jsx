import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './ThemeContext';
import profileImage from '../assets/portraitV2.jpg'
import cameraImage from '../assets/cameraPortrait.jpg'

function AboutMe() {
    const { darkMode } = useContext(ThemeContext);
    return(
        <div className={`flex justify-center p-8 ${darkMode ? 'bg-[#131427]' : 'bg-[#E79B56] '} `}>
                <div className='flex flex-col items-center'>
                     <h2 className={`text-white text-2xl mb-6`}>ABOUT ME</h2>
                    <div className='relative inline-block'>
                     <img className=' w-56 hover:opacity-0' src={profileImage} alt="Profile Picture" />
                        <img className=' w-56 w absolute top-0 opacity-0 hover:opacity-100' src={cameraImage} alt="" />
                     </div>
                
            
            <p className={`text-white text-xl w-11/12 mt-6`}>
                I’m Jake — a developer interested in helping your business tell the most beautiful story.
            </p>
            <p className={`text-white text-xl w-11/12 mt-6`}>    
                I currently work at Hope Church as their Video Specialist
            </p>  
            <p className={`text-white text-xl w-11/12 mt-6`}>
                I'm also a climber who enjoys exploring.
            </p>
            </div>
        </div>
    )
}

export default AboutMe;