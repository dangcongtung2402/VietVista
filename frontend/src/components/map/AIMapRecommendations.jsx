import React from 'react';
import { aiSuggestions } from '../../data/mapMockData';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function AIMapRecommendations() {
  return (
    <div className="ai-recommendations">
      <div className="section-header-flex">
        <div>
          <h2><Sparkles color="#D6A63A" size={28}/> AI gợi ý trên bản đồ</h2>
          <p>Dựa trên sở thích, xu hướng và ngữ cảnh du lịch, VietVista AI đề xuất những hành trình phù hợp dành cho bạn.</p>
        </div>
        <button className="btn-poi-outline" style={{color: 'var(--dark-forest)', borderColor: 'var(--dark-forest)'}}>Xem tất cả gợi ý &rarr;</button>
      </div>
      
      <div className="rec-grid">
        {aiSuggestions.map(rec => (
          <div className="rec-card" key={rec.id}>
            <div className="rec-img-wrap">
              <img src={rec.img} alt={rec.title} className="rec-img" />
              <div className="rec-tag-abs">{rec.tag}</div>
            </div>
            <div className="rec-content">
              <h3>{rec.title}</h3>
              <div className="rec-meta">📍 {rec.meta}</div>
              <div className="rec-fit-tag">✨ {rec.tags[0]}</div>
              <p className="rec-desc">{rec.desc}</p>
              <button className="rec-btn"><ArrowRight size={18} color="var(--dark-forest)"/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
