import React from 'react'

const AboutSection = () => {
  return (
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
                <td className='w-[900px]'>
                <div className='section-text'>
                    <h4>The Data</h4>
                    <p>We trained our model on 53,345 images of 25 fruit classes from the fruits-360 dataset. We enhanced this data with a custom approach to make the model robust against real-world backgrounds and lighting.</p>
                </div>
                </td>
            </tr>
            <tr>
                <td><img src="/brain-about-us.svg" alt="" /></td>
                <td>
                <div className='section-text'>
                    <h4>The Brains</h4>
                    <p>Our model uses powerful architectures like EfficientNetB0, MobileNetV2, and ResNet50. We fine-tuned them with a Squeeze-and-Excitation (SE) Block to help the network focus on important features.</p>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
    </section>
  )
}

export default AboutSection
