import React, { useState, useContext } from 'react';
import ThemeContext from "./ThemeContext";
import styles from '../App.css'
import Burger from '../icons/burger';
import PersonIcon from '../icons/personIcon';
import ProjectIcon from '../icons/projectIcon';
import MailIcon from '../icons/mailIcon';
import LinkedinIcon from '../icons/linkedinIcon';
import InstagramIcon from '../icons/instagramIcon';
import XIcon from '../icons/xIcon';
import GithubIcon from '../icons/githubIcon';

function Navbar(props) {

    const [menuOpen, setMenuOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  
    const SlideInMenu = ({ open, setClose }) => {
        return (
          <div
            className={`fixed top-0 right-0 h-screen w-52 p-7 z-20 transition-transform duration-300 flex flex-col ${
              open ? 'transform-none' : 'translate-x-full'
            } ${darkMode ? 'bg-[#1F2235]' : 'bg-[#E79B56] '}`}
          >
            <button
              onClick={setClose}
              className="flex text-white justify-end items-center text-right mb-8 focus:outline-none focus:ring focus:ring-offset-2"
            >
              Close <XIcon />
            </button>
    
            {/* Add your menu items */}
            <ul className='justify-start'>
                    <li className='flex p-1 hover:opacity-70'><PersonIcon/><a className='ml-1 text-white' href="#aboutMe" onClick={setClose}>ABOUT ME</a></li>
                    <li className='flex p-1 hover:opacity-70'><ProjectIcon/><a className='ml-1 text-white' href="#projects"  onClick={setClose}>PROJECTS</a></li>
                    <li className='flex p-1 hover:opacity-70'><MailIcon/><a className='ml-1 text-white' href="mailto:jakeroth0@gmail.com" target="blank" rel="noopener noreferrer">EMAIL</a></li>
                    <li className='flex p-1 hover:opacity-70'><LinkedinIcon/><a className='ml-1 text-white' href="https://www.linkedin.com/in/jakeroth0/" target="blank" rel="noopener noreferrer">LINKEDIN</a></li>
                    <li className='flex p-1 hover:opacity-70'><GithubIcon/><a className='ml-1 text-white' href="https://github.com/jakeroth0" target="blank" rel="noopener noreferrer">GITHUB</a></li>
                    <li className='flex p-1 hover:opacity-70'><InstagramIcon/><a className='ml-1 text-white' href="https://www.instagram.com/akahusky/" target="blank" rel="noopener noreferrer">INSTAGRAM</a></li>
                    <label
                        htmlFor="darkModeToggle"
                        className="mt-auto flex items-center cursor-pointer"
                        >
                            <div className='items-center flex'>
                        <div className="relative m-1 ">
                            <input
                            id="darkModeToggle"
                            type="checkbox"
                            className="sr-only"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                            />
                            <div className="w-10 h-6 bg-gray-400 rounded-full shadow-inner"></div>
                            <div className="toggle__dot absolute w-5 h-5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                        </div>
                        <div className="ml-1 text-white">{darkMode ? 'LIGHT MODE' : 'DARK MODE'}</div></div>
                    </label>
                </ul>
          </div>
        );
      };

      const Scrim = ({ open, setClose }) => (
        <div
          className={`${
            open ? 'block' : 'hidden'
          } fixed inset-0 bg-black opacity-50 z-10`}
          onClick={setClose}
        ></div>
      );

    return (
      <nav className={`items-center p-5 ${darkMode ? 'graph' : 'bg-white'} `}>
        <ul className=" max-w-full max-h-full flex justify-between xl:mx-4 "> 
            <a className= {`text-xl flex items-center ${darkMode ? 'text-white' : 'text-black '} `}>Jake Roth</a>
            <div className='xl:hidden'>
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`focus:outline-none focus:ring focus:ring-offset-2 ${darkMode ? 'text-[#5D6582]' : 'text-[#E79B56]'} `}>
                <Burger />
            </button>
            <Scrim open={menuOpen} setClose={() => setMenuOpen(false)} />
            <SlideInMenu open={menuOpen} setClose={() => setMenuOpen(false)} />
            </div>
            <div className='hidden xl:block'>
                <ul className='flex justify-start items-center'>
                    <a className='mx-4' href="#">ABOUT ME</a>
                    <a className='mx-4' href="#">PROJECTS</a>
                    <a className='mx-4' href="#">EMAIL</a>
                    <a className='ml-2 bg-blue-500 text-white font-semibold text-lg py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>LET'S TALK</a>
                </ul>
            </div>    
        </ul>
      </nav>
    );
  }

  export default Navbar