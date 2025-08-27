import { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import PerformanceSection from './components/PerformanceSection';
import DemoSection from './components/DemoSection';
import Popup from './components/Popup';

function App() {
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [videoStream, setVideoStream] = useState(null);

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMode, setPopupMode] = useState(null); // 'upload' or 'camera'
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  // Handle Upload click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPopupMode('upload');
      setPopupOpen(true);
      runPrediction(file);
    }
  };

  const handleCameraClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setIsCameraActive(true);
      setVideoStream(stream);
      setPopupMode('camera');
      setPopupOpen(true);
      runPredictionFromCamera(stream);
    } catch (err) {
      console.error('Error accessing the camera: ', err);
      alert('Could not access camera. Please check your permissions.');
    }
  };

  const runPrediction = async (file) => {
    setLoading(true);
    setPrediction(null);

    setTimeout(() => {
      setPrediction('Example: Apple 🍎');
      setLoading(false);
    }, 1500);
  };

  const runPredictionFromCamera = async (stream) => {
    setLoading(true);
    setPrediction(null);

    setTimeout(() => {
      setPrediction('Example: Banana 🍌');
      setLoading(false);
    }, 2000);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedFile(null);
    setPrediction(null);
    setIsCameraActive(false);

    if (videoStream) {
      videoStream.getTracks().forEach((track) => track.stop());
      setVideoStream(null);
    }
  };

  return (
    <>
      <div className="pattern" />
      <div>
        <main>
          <div className="wrapper">
            <Header />
            <Hero />
            <AboutSection />
            <PerformanceSection />
            <DemoSection
              handleUploadClick={handleUploadClick}
              handleFileChange={handleFileChange}
              handleCameraClick={handleCameraClick}
              fileInputRef={fileInputRef}
              videoRef={videoRef}
              isCameraActive={isCameraActive}
              selectedFile={selectedFile}
            />

            {popupOpen && (
              <Popup
                mode={popupMode}
                file={selectedFile}
                videoStream={videoStream}
                prediction={prediction}
                loading={loading}
                onClose={closePopup}
              />
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
