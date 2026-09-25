import { useState, useRef } from 'react';

export default function VideoBackground() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        className="video-element"
        autoPlay
        muted={isMuted}
        loop
        playsInline
      >
        <source src="/media/videos/gioithieu.mp4" type="video/mp4" />
        {/* Fallback poster would be handled by adding poster="/path/to/poster.jpg" to the video tag if available */}
      </video>
      <div className="video-overlay"></div>
      <button 
        className="audio-control"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  );
}
