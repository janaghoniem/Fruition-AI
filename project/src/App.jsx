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
          <section id='About' className='about-section'>
            <h2 className='section-title'>About</h2>
            <table>
              <tbody>
                <tr>
                  <td><img src="/mission-about-us.svg" alt="" /></td>
                  <td>
                    <div className='section-text'>
                      <h4>Our Mission</h4>
                      <p>To accurately classify fruits using advanced deep learning.</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img src="/data-about-us.svg" alt="" /></td>
                  <td>
                    <div className='section-text'>
                      <h4>The Data</h4>
                      <p>To accurately classify fruits using advanced deep learning.</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td><img src="/brain-about-us.svg" alt="" /></td>
                  <td>
                    <div className='section-text'>
                      <h4>The Brains</h4>
                      <p>To accurately classify fruits using advanced deep learning.</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id='Performance' className='m-15'>
            <h2 className='section-title'>Performance</h2>
            <div className='performance-content'>
              <div className='flex flex-col items-center'>
                <img src="/solution-performance.svg" alt="" />
                <div className='section-text max-w-[550px] text-center'>
                  <h4>The Solution</h4>
                  <p>We addressed this by balancing the dataset and training our models to perform better on a wider variety of fruits.</p>
                </div>
              </div>
              <div className='flex justify-between items-center -mt-50'>
                <div className='flex flex-col items-start'>
                  <img src="/challenge-performance.svg" alt="" />
                  <div className='section-text max-w-[550px] text-left'>
                    <h4>The Challenge</h4>
                    <p>The original dataset had a severe class imbalance, with one class ("Apple") having thousands more images than others. This caused bias.</p>                  
                    </div>
                </div>
                <div className='flex flex-col items-end'>
                  <img src="/results-performance.svg" alt="" />
                  <div className='section-text max-w-[550px] text-right'>
                    <h4>The Results</h4>
                    <p>After extensive testing, EfficientNetB0 with our custom augmentations achieved the highest scores, with an accuracy of 96% </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='Demo' className=' demo-section'>
            <h2 className='section-title'>Try Our Demo</h2>
            <h2 className='section-title mt-2 font-medium'>Our Model will then tell you what kind of fruit it is!</h2>
            <div className='demo-content'>
              <button className='demo-button'>
                <h2>Upload an Image</h2>
                <img src="/upload-demo.svg" alt="" />
              </button>
              <button className='demo-button'> 
                <h2>Use Your Camera</h2>
                <img src="/camera-demo.svg" alt="" />
              </button>
            </div>
          </section>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
