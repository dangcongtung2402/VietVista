import React from 'react';
import { Box, RefreshCcw } from 'lucide-react';

export default function POIImmersive() {
  return (
    <div className="poi-section">
      <div className="immersive-grid">
        <div>
          <div className="poi-section-title" style={{marginBottom:'24px'}}>
            <h2><RefreshCcw size={28} /> Khám phá 360°</h2>
          </div>
          <div className="imm-card">
            <img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=800" alt="360 View" />
            <div className="imm-badge">360°</div>
            <div className="imm-overlay">
              <div style={{display:'flex', gap:'8px'}}>
                <span className="poi-tag-hero" style={{background:'white', color:'var(--dark-forest)'}}>Ngọ Môn</span>
                <span className="poi-tag-hero" style={{background:'rgba(255,255,255,0.2)'}}>Điện Thái Hòa</span>
                <span className="poi-tag-hero" style={{background:'rgba(255,255,255,0.2)'}}>Tử Cấm Thành</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="poi-section-title" style={{marginBottom:'24px'}}>
            <h2><Box size={28} /> Mô hình 3D tương tác</h2>
          </div>
          <div className="imm-card">
            <img src="https://images.unsplash.com/photo-1610486001097-2a13dc8803cf?auto=format&fit=crop&q=80&w=800" alt="3D View" />
            <div className="imm-badge"><Box size={24}/></div>
            <div className="imm-overlay" style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <div>
                <h3 style={{margin:'0 0 4px 0'}}>Khám phá Đại Nội Huế bằng mô hình 3D</h3>
                <p style={{margin:0, opacity:0.8, fontSize:'0.9rem'}}>Xoay, phóng to, xem chi tiết các công trình kiến trúc</p>
              </div>
              <button className="play-btn" style={{margin:0, width:'48px', height:'48px', background:'white', color:'var(--dark-forest)'}}>&rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
