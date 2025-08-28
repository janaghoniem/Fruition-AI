import { useEffect } from 'react';

export default function Popup({
  mode,
  file,
  videoStream,
  prediction,
  loading,
  onClose,
  onSelectAnother // new prop
}) {
  useEffect(() => {
    return () => {
      if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [videoStream]);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>✕</button>
        <h2 className='text-white text-center font-semibold mb-10 text-3xl'>
          Prediction
        </h2>

        <div className="preview-area">
          {mode === 'upload' && file && (
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded preview"
              className="preview-img"
            />
          )}

          {mode === 'camera' && (
            <video
              autoPlay
              playsInline
              muted
              ref={vid => {
                if (vid && videoStream) vid.srcObject = videoStream;
              }}
              className="preview-video"
            />
          )}
        </div>

        <div className="prediction-area">
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            prediction && (
              <>
                <h2 className="prediction-text">{prediction}</h2>
                <button
                  className="mt-10 px-8 py-4 bg-gradient-to-r from-purple-400 to-orange-300 text-white font-semibold rounded-lg shadow-md hover:opacity-80 transition"
                  onClick={onSelectAnother}
                >
                  Select Another Image
                </button>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}
