import React, { useState } from 'react';
import { ArrowLeft, Play, Image as ImageIcon, Box, Map, Navigation, ArrowRight } from 'lucide-react';
import { cameraMockData } from '../../data/cameraMockData';

export default function AIGuidePanel({ status }) {
  const [activeTab, setActiveTab] = useState('TongQuan');
  const { recognizedPOI } = cameraMockData;

  if (status !== 'CONFIRMED') {
    return (
      <div className="camera-right" style={{justifyContent:'center', alignItems:'center', padding:'40px', textAlign:'center'}}>
        <div style={{width:'60px', height:'60px', background:'rgba(255,255,255,0.1)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'16px'}}>
          <img src="https://api.dicebear.com/7.x/bottts/svg?seed=vietvista&backgroundColor=transparent" alt="AI" style={{width:'40px'}}/>
        </div>
        <h3 style={{margin:'0 0 8px 0', fontSize:'1.2rem'}}>VietVista AI</h3>
        <p style={{color:'rgba(255,255,255,0.6)', fontSize:'0.9rem', lineHeight:1.6}}>
          Chỉ cần giơ máy,<br/>VietVista AI hiểu nơi bạn đang đứng.
        </p>
      </div>
    );
  }

  return (
    <div className="camera-right">
      <div className="agp-header">
        <ArrowLeft size={24} style={{cursor:'pointer'}} />
        <div>
          <h2>{recognizedPOI.name}</h2>
          <p>{recognizedPOI.parentPOI}</p>
        </div>
      </div>
      
      <div className="agp-tabs">
        <div className={`agp-tab ${activeTab==='TongQuan'?'active':''}`} onClick={()=>setActiveTab('TongQuan')}>Tổng quan</div>
        <div className={`agp-tab ${activeTab==='KienTruc'?'active':''}`} onClick={()=>setActiveTab('KienTruc')}>Kiến trúc</div>
        <div className={`agp-tab ${activeTab==='LichSu'?'active':''}`} onClick={()=>setActiveTab('LichSu')}>Lịch sử</div>
      </div>
      
      <div className="agp-content">
        <div className="audio-guide-card">
          <div className="agc-header">
            <div className="agc-icon-wrap"><Play fill="white" size={16}/></div>
            <h4>{recognizedPOI.audioContext.title}</h4>
          </div>
          <p className="agc-text">{recognizedPOI.audioContext.text}</p>
          <div className="agc-player">
            <button className="agc-play-btn"><Play fill="var(--dark-forest)" size={16}/></button>
            <div className="agc-progress">
              <div className="agc-progress-fill"></div>
            </div>
            <span className="agc-time">00:12 / {recognizedPOI.audioContext.duration}</span>
            <span style={{fontSize:'0.8rem', fontWeight:600, color:'#666'}}>1x</span>
          </div>
        </div>
        
        <div className="qa-grid">
          <div className="qa-btn">
            <ImageIcon size={20}/>
            Xem ảnh lịch sử
          </div>
          <div className="qa-btn">
            <Box size={20}/>
            Khám phá 3D
          </div>
          <div className="qa-btn">
            <Map size={20}/>
            Xem trên bản đồ
          </div>
        </div>
        
        <div className="nearby-section">
          <h3>Xung quanh bạn</h3>
          <div className="nearby-list">
            {recognizedPOI.nearby.map(nb => (
              <div className="nearby-card" key={nb.id}>
                <img src={nb.img} alt={nb.name} />
                <div className="nb-info">
                  <h4>{nb.name}</h4>
                  <div className="nb-meta">
                    <span>{nb.type}</span>
                    <span className="nb-time"><Navigation size={12}/> {nb.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="agp-chat-area">
        <div className="chat-sugg-grid">
          {recognizedPOI.aiSuggestions.map((sugg, i) => (
            <div className="chat-sugg-btn" key={i}>{sugg}</div>
          ))}
        </div>
        <div className="chat-input-wrap">
          <input type="text" placeholder="Hỏi thêm về thứ bạn đang nhìn..." />
          <button className="chat-send-btn"><ArrowRight size={18}/></button>
        </div>
      </div>
    </div>
  );
}
