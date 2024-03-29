import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './ThemeContext';

function Footer() {
    const { darkMode } = useContext(ThemeContext);
    return(
        <div id='connect' className={`px-6 py-4 items-center ${darkMode ? 'bg-[#131427]' : 'bg-black'} md:flex md:justify-start md:pt-8 md:pb-10 xl:pl-[18%]`}>
        <div className={`flex flex-col justify-center items-center `}>
            <h4 className={` text-4xl text-center m-2 ${darkMode ? 'text-[#52A9FD]' : 'text-[#E79B56]'} md:text-5xl`}>LET'S TALK</h4>
            <p className={`text-white text-xs md:ml-4`} >GET IN TOUCH</p>
            <div className='flex flex-col m-2 text-xl text-white'>
                <a className={`mb-1 ${darkMode ? 'hover:text-[#52A9FD]' : ' hover:text-[#E79B56]'}`} href="mailto:jakeroth0@gmail.com" target="blank" rel="noopener noreferrer">01 EMAIL</a>
                <a className={`mb-1 ${darkMode ? 'hover:text-[#52A9FD]' : ' hover:text-[#E79B56]'}`} href="https://www.linkedin.com/in/jakeroth0/" target="blank" rel="noopener noreferrer">02 LINKEDIN</a>
                <a className={`${darkMode ? 'hover:text-[#52A9FD]' : ' hover:text-[#E79B56]'}`} href="https://www.instagram.com/akahusky/" target="blank" rel="noopener noreferrer">03 INSTAGRAM</a>
            </div>
        </div>
        </div>
    )
}

export default Footer