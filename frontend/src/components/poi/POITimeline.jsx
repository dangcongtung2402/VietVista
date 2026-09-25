import React from 'react';
import { BookOpen } from 'lucide-react';

export default function POITimeline({ timeline }) {
  return (
    <div className="poi-section">
      <div className="poi-section-title">
        <h2><BookOpen size={28} /> Câu chuyện lịch sử</h2>
        <a href="#" style={{color: 'var(--primary-green)', fontWeight: 600, textDecoration:'none'}}>Xem tất cả &rarr;</a>
      </div>
      
      <div className="timeline-scroll">
        {timeline.map((item, idx) => (
          <div className="timeline-card" key={idx}>
            <img src={item.img} alt={item.title} className="tc-img" />
            <div className="tc-content">
              <div className="tc-year">{item.year}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
