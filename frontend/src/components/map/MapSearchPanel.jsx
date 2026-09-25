import React from 'react';
import { Search, X, Landmark, BookOpen, Utensils, Mountain, Box, MapPin } from 'lucide-react';

export default function MapSearchPanel() {
  return (
    <div className="left-discovery-panel">
      <div className="ldp-header">
        <h2>Tìm kiếm & Khám phá</h2>
        <X size={20} color="rgba(255,255,255,0.5)" style={{cursor:'pointer'}} />
      </div>
      
      <div className="search-box-dark">
        <Search size={18} />
        <input type="text" placeholder="Tìm khu vực, địa điểm, trải nghiệm..." />
      </div>
      
      <div>
        <p style={{fontSize:'0.85rem', color:'rgba(255,255,255,0.7)', margin:'0 0 12px 0'}}>Chủ đề trải nghiệm</p>
        <div className="filter-chips-dark">
          <span className="filter-chip active"><Landmark size={14}/> Lịch sử</span>
          <span className="filter-chip"><BookOpen size={14}/> Văn hóa</span>
          <span className="filter-chip"><Utensils size={14}/> Ẩm thực</span>
          <span className="filter-chip"><Mountain size={14}/> Thiên nhiên</span>
          <span className="filter-chip"><Box size={14}/> 360°</span>
          <span className="filter-chip"><Box size={14}/> 3D</span>
          <span className="filter-chip"><MapPin size={14}/> Ít người biết</span>
        </div>
      </div>
      
      <div className="ai-assistant-block">
        <div className="ai-block-header">
          <div className="ai-orb"></div>
          <div>
            <h3>VietVista AI</h3>
            <p>Tôi có thể gợi ý khu vực phù hợp với sở thích của bạn.</p>
          </div>
        </div>
        
        <p style={{fontSize:'0.85rem', margin:'12px 0 8px 0'}}>Thử hỏi AI</p>
        <div className="ai-prompts">
          <button className="ai-prompt-btn"><MapPin size={16}/> Gần tôi</button>
          <button className="ai-prompt-btn"><span style={{fontSize:'16px'}}>1</span> 1 ngày</button>
          <button className="ai-prompt-btn"><Utensils size={16}/> Ẩm thực địa phương</button>
          <button className="ai-prompt-btn"><Landmark size={16}/> Di sản nổi bật</button>
        </div>
      </div>
    </div>
  );
}
