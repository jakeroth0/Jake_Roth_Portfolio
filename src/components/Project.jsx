import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './ThemeContext';


function Project(props) {
    const { darkMode } = useContext(ThemeContext);
    return(
        <div className={`p-4 flex flex-col items-center justify-center ${props.styleHero} ${props.style1} `}>

            <div className={`${props.styleHero2}`}>
                <p className={` text-2xl mb-1 ${darkMode ? 'text-white' : 'text-black'} md:text-3xl`}>{props.children}</p>

                <div className={`flex mb-2 justify-evenly ${props.styleHero3} ${props.style3}`}>
                     <a href={props.live} target="_blank" rel="noopener noreferrer" className={`mx-2 text-sm ${darkMode ? 'text-white hover:text-[#52A9FD]' : 'text-black hover:text-[#E79B56]'} md:text-xl md:mx-7`}>LIVE</a>
                    <a href={props.repo} target="_blank" rel="noopener noreferrer" className={`mx-2 text-sm ${darkMode ? 'text-white hover:text-[#52A9FD]' : 'text-black hover:text-[#E79B56]'} md:text-xl md:mx-7 ${props.styleHero4} ${props.style4} `}>REPO</a>
                 </div>
            </div>

            <a className={`relative inline-block ${props.styleHero5} ${props.style5}`} target="_blank" rel="noopener noreferrer" href={props.live}>
                    <img className=' w-[100%] h-auto hover:opacity-0' src={props.thumbnail} alt="techPailThumbnail" />
                    <video className=' w-[100%] h-auto absolute top-0 opacity-0 hover:opacity-100' src={props.webM} autoPlay muted loop alt="techPailWebm" />
            </a>

        </div>
    )
}

export default Project