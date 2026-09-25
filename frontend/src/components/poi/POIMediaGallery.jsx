import React from 'react';
import { Image, Play } from 'lucide-react';

export default function POIMediaGallery() {
  return (
    <div className="poi-section">
      <div className="poi-section-title">
        <h2><Image size={28} /> Hình ảnh & Video nổi bật</h2>
        <div style={{display:'flex', gap:'12px'}}>
          <span className="poi-tag-hero" style={{background:'var(--primary-green)', borderColor:'transparent', color:'white'}}>Tất cả</span>
          <span className="poi-tag-hero" style={{borderColor:'#ccc', color:'#333'}}>Phong cảnh</span>
          <span className="poi-tag-hero" style={{borderColor:'#ccc', color:'#333'}}>Kiến trúc</span>
          <span className="poi-tag-hero" style={{borderColor:'#ccc', color:'#333'}}>Lễ hội</span>
        </div>
      </div>
      
      <div className="media-grid">
        <div className="media-item large">
          <img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=800" alt="Video Đại Nội Huế"/>
          <div className="media-overlay">
            <div className="play-btn"><Play fill="white" size={24}/></div>
            <h3>Video giới thiệu Đại Nội Huế</h3>
            <span style={{fontSize:'0.85rem', opacity:0.8}}>03:24</span>
          </div>
        </div>
        
        <div className="media-item">
          <img src="https://images.unsplash.com/photo-1542640244-7e672d6cb461?auto=format&fit=crop&q=80&w=400" alt="img2"/>
        </div>
        <div className="media-item">
          <img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=400" alt="img3"/>
        </div>
        <div className="media-item">
          <img src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=400" alt="img4"/>
        </div>
        <div className="media-item">
          <img src="https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&q=80&w=400" alt="img5"/>
          <div className="media-overlay" style={{justifyContent:'center', alignItems:'center', background:'rgba(0,0,0,0.6)'}}>
            <h3 style={{margin:0}}>+1.2K</h3>
            <span style={{fontSize:'0.85rem', opacity:0.8}}>Xem thêm ảnh</span>
          </div>
        </div>
      </div>
    </div>
  );
}
