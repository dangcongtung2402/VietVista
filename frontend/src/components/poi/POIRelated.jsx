import React from 'react';
import { Compass } from 'lucide-react';

export default function POIRelated({ related }) {
  return (
    <div className="poi-section">
      <div className="poi-section-title">
        <h2><Compass size={28} /> Những trải nghiệm liên quan</h2>
        <a href="#" style={{color: 'var(--primary-green)', fontWeight: 600, textDecoration:'none'}}>Xem tất cả &rarr;</a>
      </div>
      
      <div className="related-grid">
        {related.map((item, idx) => (
          <div className="rel-card" key={idx}>
            <div style={{position:'relative'}}>
              <img src={item.img} alt={item.name} className="rel-img" />
              <span className="rel-tag">{item.tag}</span>
            </div>
            <div className="rel-info">
              <h4>{item.name}</h4>
              <div className="rel-meta">
                <span style={{color: 'var(--gold)', fontWeight:600}}>⭐ {item.rating} <span style={{color:'var(--text-gray)', fontWeight:400}}>{item.views} lượt xem</span></span>
                <span>📍 {item.distance}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
