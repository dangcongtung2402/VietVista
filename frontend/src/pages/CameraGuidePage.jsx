import React, { useState } from 'react';
import CameraViewport from '../components/camera/CameraViewport';
import AIGuidePanel from '../components/camera/AIGuidePanel';
import '../styles/camera.css';

export default function CameraGuidePage() {
  // states: IDLE -> SCANNING -> CONFIRMED
  const [status, setStatus] = useState('IDLE');

  const handleTriggerScan = () => {
    if (status === 'IDLE' || status === 'CONFIRMED') {
      setStatus('SCANNING');
      // mock network request / recognition delay
      setTimeout(() => {
        setStatus('CONFIRMED');
      }, 2000);
    }
  };

  return (
    <div className="camera-page-wrapper">
      <div className="camera-workspace">
        <CameraViewport status={status} onTriggerScan={handleTriggerScan} />
        <AIGuidePanel status={status} />
      </div>
    </div>
  );
}
