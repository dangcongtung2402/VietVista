import React from 'react';
import { X, MapPin, Heart, Plus } from 'lucide-react';

export default function POIDetailPanel({ poi, onClose }) {
  if (!poi) return null;
  
  return (
    <div className="right-poi-panel">
      <button className="poi-panel-close" onClick={onClose}><X size={16}/></button>
      <div className="poi-panel-img">
        <img src={poi.img} alt={poi.name} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
      </div>
      
      <div className="poi-panel-content">
        <h2>{poi.name}</h2>
        <div className="poi-panel-loc">
          <MapPin size={14}/> {poi.region}
        </div>
        
        <p className="poi-panel-desc">{poi.desc}</p>
        
        <div className="poi-panel-tags">
          <span className="poi-tag">Di sản</span>
          <span className="poi-tag">Kiến trúc</span>
          <span className="poi-tag">Ẩm thực</span>
        </div>
        
        <div className="poi-stats-grid">
          <div className="poi-stat">
            <span className="poi-stat-icon">📚</span>
            <div className="poi-stat-text"><strong>{poi.stats.stories}</strong> câu chuyện</div>
          </div>
          <div className="poi-stat">
            <span className="poi-stat-icon">📍</span>
            <div className="poi-stat-text"><strong>{poi.stats.poi}</strong> POI</div>
          </div>
          <div className="poi-stat">
            <span className="poi-stat-icon">🎥</span>
            <div className="poi-stat-text"><strong>{poi.stats.video}</strong> video</div>
          </div>
          <div className="poi-stat">
            <span className="poi-stat-icon">🔄</span>
            <div className="poi-stat-text"><strong>{poi.stats.vr}</strong> trải nghiệm 360°</div>
          </div>
        </div>
        
        <div className="poi-actions">
          <button className="btn-poi-primary">Xem chi tiết &rarr;</button>
          <button className="btn-poi-outline"><Plus size={16}/> Thêm vào lịch trình</button>
        </div>
      </div>
    </div>
  );
}
