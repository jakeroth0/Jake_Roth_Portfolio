import { PromiseProvider } from "mongoose";
import { useState } from 'react';
import { ThemeProvider } from "./components/ThemeContext";
import Navbar from './components/navbar'
import Hero from './components/hero'


function App() {

  return (
    <div>
      <ThemeProvider>
        <Navbar></Navbar>
        <Hero></Hero>
      </ThemeProvider>

  </div>
  )
}

export default App
