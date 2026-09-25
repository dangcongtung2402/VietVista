import React, { useState, useEffect } from 'react';
import { X, Zap, RefreshCcw, Image as ImageIcon, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CameraViewport({ status, onTriggerScan }) {
  const navigate = useNavigate();
  // Mock camera feed handling
  const [stream, setStream] = useState(null);

  useEffect(() => {
    // Attempt to get user media (camera)
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(s => setStream(s))
      .catch(err => console.log('Camera access denied or not available, using fallback image.'));
      
    return () => {
      if (stream) stream.getTracks().forEach(t => t.stop());
    };
  }, []);

  return (
    <div className="camera-left">
      {/* Video Feed or Fallback */}
      {stream ? (
        <video 
          className="camera-video" 
          autoPlay 
          playsInline 
          muted 
          ref={vid => { if (vid && !vid.srcObject) vid.srcObject = stream; }} 
        />
      ) : (
        <img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=1000" alt="Camera Mock" className="camera-mock-bg" />
      )}
      
      {/* Dark overlay for better contrast if not scanning */}
      <div className="camera-overlay" style={{background: status === 'IDLE' ? 'rgba(0,0,0,0.2)' : 'transparent'}}></div>
      
      {/* Top Controls */}
      <div className="camera-controls-top">
        <div className="btn-cam-circle" onClick={() => navigate(-1)}><X size={20}/></div>
        <div className="btn-cam-circle"><Zap size={20}/></div>
      </div>
      
      {/* Scan Target Box */}
      <div className={`scan-target-box ${status === 'SCANNING' ? 'scanning' : ''} ${status === 'CONFIRMED' ? 'confirmed' : ''}`}>
        {/* Corners */}
        <div className="scan-crosshair cross-tl"></div>
        <div className="scan-crosshair cross-tr"></div>
        <div className="scan-crosshair cross-bl"></div>
        <div className="scan-crosshair cross-br"></div>
        
        {status === 'IDLE' && <div className="scan-status-text">Hướng camera về công trình</div>}
        {status === 'SCANNING' && <div className="scan-status-text">Đang nhận diện...</div>}
        
        {status === 'CONFIRMED' && (
          <div className="confirmed-label">
            <h3>Ngọ Môn</h3>
            <p>Đại Nội Huế</p>
            <div className="confidence-badge">Nhận diện 94% <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
          </div>
        )}
      </div>
      
      {/* Bottom Actions */}
      <div className="camera-bottom-bar">
        <div className="bottom-action-col">
          <div className="btn-cam-circle" style={{background:'transparent', border:'none'}}><ImageIcon size={24}/></div>
          Thư viện
        </div>
        
        <div className="capture-btn-outer" onClick={onTriggerScan}>
          <div className="capture-btn-inner" style={{background: status === 'SCANNING' ? 'var(--gold)' : 'white'}}></div>
        </div>
        
        <div className="bottom-action-col">
          <div className="btn-cam-circle" style={{background:'transparent', border:'none'}}><HelpCircle size={24}/></div>
          Trợ giúp
        </div>
      </div>
      
    </div>
  );
}
