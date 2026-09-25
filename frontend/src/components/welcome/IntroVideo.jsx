import { useState, useEffect, useRef } from 'react';

export default function IntroVideo({ onComplete }) {
  const [showText, setShowText] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Show text after a short delay
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 400);

    return () => clearTimeout(textTimer);
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation(); // Ngăn không cho sự kiện click kích hoạt onComplete
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="intro-video-container" onClick={onComplete} style={{ cursor: 'pointer' }}>
      <video
        ref={videoRef}
        className="intro-video"
        autoPlay
        muted={isMuted}
        loop
        playsInline
      >
        <source src="/media/videos/gioithieu.mp4" type="video/mp4" />
      </video>
      <div className="intro-overlay"></div>
      
      <button 
        className="audio-control"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

      <div className={`intro-text-wrapper ${showText ? 'visible' : ''}`}>
        <button className="intro-button blink-text">
          Welcome to VietVista
        </button>
      </div>
    </div>
  );
}
