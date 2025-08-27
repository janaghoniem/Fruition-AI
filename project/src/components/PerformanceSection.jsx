import React from 'react'

const PerformanceSection = () => {
  return (
    <section id='Performance' className='m-30 pt-20'>
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
  )
}

export default PerformanceSection
