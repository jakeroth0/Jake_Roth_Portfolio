import { PromiseProvider } from "mongoose";
import { useState } from 'react';
import { ThemeProvider } from "./components/ThemeContext";
import Navbar from './components/navbar'
import Hero from './components/hero'
import AboutMe from './components/AboutMe'
import Work from './components/Work'
import Project from './components/Project';
import techPailThumbnail from './assets/techPailThumbnail.webp'
import techPailWebm from './assets/techPail.webm'
import neatNotesThumbnail from './assets/neatNotesThumbnail.webp'
import neatNotesWebm from './assets/neatNotes.webm'
import marvelousMovesThumbnail from './assets/marvelousMovesThumbnail.webp'
import marvelousMovesWebm from './assets/marvelousMoves.webm'
import noteTakerThumbnail from './assets/noteTakerThumbnail.webp'
import noteTakerWebm from './assets/noteTaker.webm'
import employeeManagerThumbnail from './assets/employeeManagerThumbnail.webp'
import employeeManagerWebm from './assets/employeeManager.webm'


function App() {

  return (
    <div>
      <ThemeProvider>
        <Navbar></Navbar>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Work>
        <Project 
        live='https://sleepy-citadel-09924.herokuapp.com/'
        thumbnail={techPailThumbnail}
        webM={techPailWebm}
        repo='https://github.com/jakeroth0/theTechPail'
        >TECH PAIL BLOG</Project>
        <Project 
        live='https://pacific-sea-81919.herokuapp.com/'
        thumbnail={neatNotesThumbnail}
        webM={neatNotesWebm}
        repo='https://github.com/jakeroth0/neatNotesPWA'
        >NEAT NOTES PWA</Project>
        <Project 
        live='https://jakeroth0.github.io/marvelousMoves/'
        thumbnail={marvelousMovesThumbnail}
        webM={marvelousMovesWebm}
        repo='https://github.com/jakeroth0/marvelousMoves'
        >MARVELOUS MOVES</Project>
        <Project 
        live='https://drive.google.com/file/d/1kFifQOH2S97acJoQA1YCdgGwursh4-_6/view'
        thumbnail={employeeManagerThumbnail}
        webM={employeeManagerWebm}
        repo='https://github.com/jakeroth0/EmployeeManagementSystem'
        >EMPLOYEE MANAGER</Project>
        <Project 
        live='https://shielded-earth-44279.herokuapp.com/'
        thumbnail={noteTakerThumbnail}
        webM={noteTakerWebm}
        repo='https://github.com/jakeroth0/notesApp'
        >NOTE TAKER</Project>
        </Work>
        
      </ThemeProvider>

  </div>
  )
}

export default App
