import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './ThemeContext';
import Project from './Project';

function Work({ children }) {
    const { darkMode } = useContext(ThemeContext);
    return(
        <div className={`p-8 flex flex-col justify-center ${darkMode ? 'graph' : 'bg-white'} `}>

            <h3 id='projects' className={` text-4xl text-center ${darkMode ? 'text-white' : 'text-black'}`}>WORK</h3>
            <div className='flex flex-col'>
                {children}
            </div>
        </div>
    )
}

export default Work