import React, { useState, useEffect, useContext } from 'react';
import ThemeContext from './ThemeContext';
import Project from './Project';

function Work({ children }) {
    const { darkMode } = useContext(ThemeContext);
    return(
        <div className={`p-8 flex flex-col justify-center ${darkMode ? 'graph' : 'bg-white'} xl:px-[10%] 2xl:px-[16%]`}>

            <h3 id='work' className={` text-4xl text-center ${darkMode ? 'text-white' : 'text-black'} xl:text-start xl:pl-[4%]`}>WORK</h3>
            <div className='flex flex-col xl:flex-row xl:flex-wrap'>
                {children}
            </div>
        </div>
    )
}

export default Work