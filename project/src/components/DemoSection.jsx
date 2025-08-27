import React from 'react'

const DemoSection = ({ handleUploadClick, handleFileChange, handleCameraClick, fileInputRef, videoRef, isCameraActive, selectedFile }) => {
  return (
    <section id='Demo' className=' demo-section'>
        <h2 className='section-title'>Try Our Demo</h2>
        <h2 className='section-title mt-2 mb-10 font-medium'>Our Model will then tell you what kind of fruit it is!</h2>
        <div className='demo-content'>
            <button className='demo-button' onClick={handleUploadClick}>
            <h2>Upload an Image</h2>
            <img src="/upload-demo.svg" alt="Upload Icon" />
            </button>
            <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            />
            <button className='demo-button' onClick={handleCameraClick}>
            <h2>Use Your Camera</h2>
            <img src="/camera-demo.svg" alt="Camera Icon" />
            </button>
        </div>
        {/* This is where the camera stream or uploaded image will be displayed */}
        {isCameraActive && (
            <video ref={videoRef} className="mt-8" autoPlay playsInline muted />
        )}
        {selectedFile && (
            <div className="mt-8">
            <img src={URL.createObjectURL(selectedFile)} alt="Uploaded Preview" className="max-w-full h-auto" />
            </div>
        )}
    </section>
  )
}

export default DemoSection
