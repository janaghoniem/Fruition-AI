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
      console.log(file.name);
      setSelectedFile(file);
      setPopupMode('upload');
      setPopupOpen(true);
      runPrediction(file);
    }
    event.target.value = '';
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

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setPrediction(`${data.label}`);
    } catch (error) {
      console.error("Prediction error:", error);
      setPrediction("Error making prediction");
    } finally {
      setLoading(false);
    }
  };

  const runPredictionFromCamera = async (stream) => {
    setLoading(true);
    setPrediction(null);

    try {
      // Create a snapshot from the video stream
      const video = document.createElement("video");
      video.srcObject = stream;
      await video.play();

      const canvas = document.createElement("canvas");
      canvas.width = 224;
      canvas.height = 224;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg"));
      const file = new File([blob], "capture.jpg", { type: "image/jpeg" });

      // Send snapshot to FastAPI
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setPrediction(`${data.label} (${(data.confidence * 100).toFixed(1)}%)`);
    } catch (error) {
      console.error("Prediction error:", error);
      setPrediction("Error making prediction");
    } finally {
      setLoading(false);
    }
  };

  let cameraInterval;

  const runLiveCameraPrediction = (stream) => {
    const video = document.createElement("video");
    video.srcObject = stream;
    video.play();

    cameraInterval = setInterval(async () => {
      const canvas = document.createElement("canvas");
      canvas.width = 224;
      canvas.height = 224;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg"));
      const file = new File([blob], "capture.jpg", { type: "image/jpeg" });

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setPrediction(`${data.label} (${(data.confidence * 100).toFixed(1)}%)`);
    }, 2000); // every 2 seconds
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
                onSelectAnother={() => {
                  setSelectedFile(null);
                  if (fileInputRef.current) fileInputRef.current.value = '';
                  fileInputRef.current?.click();
                }}
              />
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
