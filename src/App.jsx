import { useState } from 'react'
import './App.css'
import Navigation from './sections/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './sections/footer'
import Features from './sections/features'
import Hero from './sections/hero';



function App() {

  return (
    <>
      <Navigation />
      <Hero/>
      <Features/>
      <Footer />
    </>
  )
}

export default App
