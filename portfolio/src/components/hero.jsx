import React, { useState, useContext } from 'react';
import ThemeContext from "./ThemeContext";

function Hero() {
    const { darkMode } = useContext(ThemeContext);
    return(
        <div className={`flex justify-center ${darkMode ? 'bg-[#11111F]' : 'bg-white '}`}>
             <h1 className={`text-4xl flex flex-col ${darkMode ? 'text-white' : 'text-black '}`}>LET'S MAKE<br/>SOMETHING<br/><span className={`${darkMode ? 'text-[#52A9FD]' : 'text-[#E79B56] '}`} >BEAUTIFUL</span></h1>
        </div>
    )
}

export default Hero;