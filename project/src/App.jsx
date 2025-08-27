import { useState, useEffect } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='pattern' />

      <div>
        <main>
          <div className='wrapper'>
            <header className='flex justify-between items-center mt-2 ml-5 mr-5 text-white text-right text-[24px] fixed top-0 left-0 right-0 z-50'>
            <a className='logo' href="#Hero" rel="noopener noreferrer">
              Fruition AI
            </a>
            <div className='nav-anchors'>
              <a href='#About' rel="noopener noreferrer">About</a>
              <a href='#Performance' rel="noopener noreferrer">Performance</a>
              <a href='#Demo' rel="noopener noreferrer">Demo</a>
            </div>
          </header>
          <section className='hero-content' id='Hero'>
            <div className='hero-text max-w-[700px]'>
              <h1 className='text-[50px] font-semibold mb-6'>Classify. Learn. Discover. <br /> The Ultimate Fruit AI Demo.</h1>
              <p className='text-[30px] font-oxygen font-regular'>Ready to see the magic in action? Our model is ready to classify your fruit images in real-time. Whether you have an image on your device or want to use your camera, we'll tell you exactly what fruit our AI sees.</p>
              <a className='hero-btn' href='#Demo' rel="noopener noreferrer">
                Try Demo Now
              </a>
            </div>
            <div className='hero-image'>
              <img src="/Fruits-Hero.svg" alt="fruit" className='hero-image' />
            </div>
          </section>
          <section id='About'>

          </section>
          <section id='Performance'>

          </section>
          <section id='Demo'>

          </section>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
