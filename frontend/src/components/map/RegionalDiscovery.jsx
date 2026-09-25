import React from 'react';
import { regionalCards } from '../../data/mapMockData';
import { ArrowRight, Map } from 'lucide-react';

export default function RegionalDiscovery() {
  return (
    <div className="regional-discovery">
      <div className="section-header-flex">
        <div>
          <h2 style={{color: 'white'}}><Map color="#D6A63A" size={28}/> Khám phá theo khu vực</h2>
          <p style={{color: 'rgba(255,255,255,0.7)'}}>Chọn khu vực để xem các điểm đến nổi bật, bản đồ chi tiết và gợi ý hành trình từ AI.</p>
        </div>
        <button className="btn-poi-outline" style={{borderColor: 'rgba(255,255,255,0.3)'}}>Xem tất cả khu vực &rarr;</button>
      </div>
      
      <div className="rd-grid">
        {regionalCards.map(region => (
          <div className="rd-card" key={region.id}>
            <div className="rd-bg" style={{backgroundImage: `url(${region.img})`}}></div>
            <div className="rd-overlay"></div>
            
            <div className="rd-content">
              <h3>{region.title}</h3>
              <p>{region.desc}</p>
              
              <div className="rd-tags">
                {region.tags.map(t => <span key={t} className="rd-tag">{t}</span>)}
              </div>
              
              <button className="rd-btn">Khám phá khu vực <ArrowRight size={16}/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
