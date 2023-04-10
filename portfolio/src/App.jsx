import { PromiseProvider } from "mongoose";
import { useState } from 'react';
import { ThemeProvider } from "./components/ThemeContext";
import Navbar from './components/navbar'
import Hero from './components/hero'
import AboutMe from './components/AboutMe'


function App() {

  return (
    <div>
      <ThemeProvider>
        <Navbar></Navbar>
        <Hero></Hero>
        <AboutMe></AboutMe>
      </ThemeProvider>

  </div>
  )
}

export default App
