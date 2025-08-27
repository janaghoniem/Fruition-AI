import React from 'react'

const Hero = () => {
  return (
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
  )
}

export default Hero
