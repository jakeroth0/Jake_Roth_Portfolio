import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './ThemeContext';


function Project(props) {
    const { darkMode } = useContext(ThemeContext);
    return(
        <div className={`p-4 flex flex-col items-center justify-center`}>

            <p className={` text-2xl mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>{props.children}</p>

            <div className='flex mb-2'>
                <a href={props.live} target="_blank" rel="noopener noreferrer" className={`mx-2 text-sm ${darkMode ? 'text-white hover:text-[#52A9FD]' : 'text-black hover:text-[#E79B56]'}`}>LIVE</a>
                <a href={props.repo} target="_blank" rel="noopener noreferrer" className={`mx-2 text-sm ${darkMode ? 'text-white hover:text-[#52A9FD]' : 'text-black hover:text-[#E79B56]'}`}>REPO</a>
            </div>

            <a className='relative inline-block' target="_blank" rel="noopener noreferrer" href={props.live}>
                    <img className=' w-[100%] h-auto hover:opacity-0' src={props.thumbnail} alt="techPailThumbnail" />
                    <video className=' w-[100%] h-auto absolute top-0 opacity-0 hover:opacity-100' src={props.webM} autoPlay muted loop alt="techPailWebm" />
            </a>

        </div>
    )
}

export default Project