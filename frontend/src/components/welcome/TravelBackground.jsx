import { useState, useEffect } from 'react';

const IMAGES = [
  '/img/bg1.jpg',
  '/img/bg2.jpg',
  '/img/bg3.jpg',
  '/img/bg4.jpg',
  '/img/bg5.jpg'
];

export default function TravelBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Preload next image
    const nextIndex = (currentIndex + 1) % IMAGES.length;
    const img = new Image();
    img.src = IMAGES[nextIndex];

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="travel-background-container">
      {IMAGES.map((src, idx) => (
        <div
          key={src}
          className={`travel-bg-slide ${idx === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url("${src}")` }}
        />
      ))}
      <div className="travel-bg-overlay"></div>
    </div>
  );
}
