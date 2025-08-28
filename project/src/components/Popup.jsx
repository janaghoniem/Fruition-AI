import { useEffect } from 'react';

export default function Popup({
  mode,
  file,
  videoStream,
  videoRef,
  prediction,
  loading,
  onClose,
  onSelectAnother,
  onCapture
}) {
  useEffect(() => {
    if (mode === 'camera' && videoStream && videoRef?.current) {
      videoRef.current.srcObject = videoStream;
      videoRef.current.play();
    }
    return () => {
      if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [mode, videoStream, videoRef]);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>✕</button>
        <h2 className="text-white text-center font-semibold mb-10 text-3xl pt-5">Prediction</h2>

        <div className="preview-area">
          {mode === 'upload' && file && (
            <img src={URL.createObjectURL(file)} alt="Uploaded preview" className="preview-img" />
          )}
          {mode === 'camera' && (
            <>
              <video ref={videoRef} autoPlay playsInline muted className="preview-video" />
              <button
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:opacity-80"
                onClick={onCapture}
              >
                Capture & Predict
              </button>
            </>
          )}
        </div>

        <div className="prediction-area">
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            prediction && <h2 className="prediction-text">{prediction}</h2>
          )}
          {mode === 'upload' && (
            <button
              className="mt-10 px-8 py-4 bg-gradient-to-r from-purple-400 to-orange-300 text-white font-semibold rounded-lg shadow-md hover:opacity-80 transition"
              onClick={onSelectAnother}
            >
              Select Another Image
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
