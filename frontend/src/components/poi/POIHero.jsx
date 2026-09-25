import React from 'react';
import { MapPin, Star, CalendarPlus, Maximize, Box, Share2, Sparkles, Image, Video } from 'lucide-react';

export default function POIHero({ poi }) {
  return (
    <div className="poi-hero" style={{backgroundImage: `url(${poi.heroImage})`}}>
      <div className="poi-hero-overlay"></div>
      
      <div className="poi-hero-content">
        <div className="poi-hero-left">
          <div className="poi-breadcrumb">
            <span>Trang chủ</span> &gt; <span>Khám phá</span> &gt; <span>Huế</span> &gt; <span style={{fontWeight:600}}>{poi.name}</span>
          </div>
          
          <div className="poi-meta-top">
            <div className="poi-loc-badge"><MapPin size={16}/> {poi.location}</div>
            <div className="poi-rating"><Star size={16} fill="currentColor"/> {poi.rating} <span style={{fontWeight:400, fontSize:'0.8rem'}}>({poi.reviewsCount} lượt đánh giá)</span></div>
          </div>
          
          <h1>{poi.name}</h1>
          <h2 className="poi-subtitle">{poi.subtitle}</h2>
          
          <div className="poi-tags">
            {poi.tags.map(t => <span key={t} className="poi-tag-hero">{t}</span>)}
          </div>
          
          <p className="poi-hero-desc">{poi.desc}</p>
          
          <div className="poi-hero-actions">
            <button className="btn-hero-solid"><CalendarPlus size={20}/> Thêm vào lịch trình</button>
            <button className="btn-hero-glass"><Maximize size={20}/> Khám phá 360°</button>
            <button className="btn-hero-glass"><Box size={20}/> Xem mô hình 3D</button>
            <button className="btn-hero-glass"><Share2 size={20}/> Chia sẻ</button>
          </div>
        </div>
        
        <div className="poi-hero-right">
          <div className="ai-match-card">
            <div className="ai-match-header">
              <span style={{display:'flex', alignItems:'center', gap:'8px'}}><img src="https://api.dicebear.com/7.x/bottts/svg?seed=vietvista&backgroundColor=transparent" alt="AI" style={{width:'24px'}}/> VietVista AI</span>
              <span style={{color:'#ccc'}}>•••</span>
            </div>
            <div className="ai-match-score">
              Địa điểm này phù hợp với bạn <strong>{poi.aiMatch.score}%</strong>
            </div>
            <p className="ai-match-desc">{poi.aiMatch.reason}</p>
          </div>
          
          <div className="hero-media-btns">
            <button className="btn-media"><Image size={16}/> Xem ảnh (1.2K)</button>
            <button className="btn-media"><Video size={16}/> Xem video giới thiệu</button>
          </div>
        </div>
      </div>
    </div>
  );
}
