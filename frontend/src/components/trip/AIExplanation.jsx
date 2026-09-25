import React, { useState } from 'react';
import { Sparkles, MessageSquare, Send, Check } from 'lucide-react';

export function AIExplanation() {
  return (
    <div className="explanation-card">
      <h3><Sparkles size={24} /> Vì sao AI sắp như vậy?</h3>
      <div className="expl-list">
        <div className="expl-item">
          <div className="expl-num">1</div>
          <div className="expl-text">
            <h4>Sắp xếp theo tuyến đường hợp lý, giảm thời gian di chuyển</h4>
            <p>Các điểm tham quan được sắp theo vị trí địa lý, giúp bạn tiết kiệm thời gian và có nhiều thời gian trải nghiệm hơn.</p>
          </div>
        </div>
        <div className="expl-item">
          <div className="expl-num">2</div>
          <div className="expl-text">
            <h4>Cân bằng giữa lịch sử – ẩm thực – nghỉ ngơi</h4>
            <p>Lịch trình kết hợp hài hòa các trải nghiệm văn hóa, ẩm thực và thời gian nghỉ ngơi, đảm bảo chuyến đi thoải mái và trọn vẹn.</p>
          </div>
        </div>
      </div>
      
      <div style={{marginTop: '24px', display: 'flex', gap: '16px', alignItems: 'center'}}>
        <img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=150" alt="Huế" style={{width:'80px', height:'80px', borderRadius:'12px', objectFit:'cover'}} />
        <div className="ai-quote" style={{textAlign: 'left', flex: 1}}>
          "Mỗi điểm đến là một câu chuyện,<br/>và bạn là nhân vật chính."<br/><span style={{opacity: 0.6}}>— VietVista AI</span>
        </div>
      </div>
    </div>
  );
}

export function NaturalLanguageEditor() {
  const [val, setVal] = useState('Ngày 2 bớt một địa điểm, tôi muốn nghỉ nhiều hơn,');
  const [showResponse, setShowResponse] = useState(true); // For mock demonstration

  return (
    <div className="editor-card">
      <h3><MessageSquare size={24} /> Bạn muốn thay đổi gì?</h3>
      
      <div style={{display:'flex', alignItems:'center', gap:'16px', marginBottom:'16px'}}>
        <span style={{fontSize:'0.9rem', color:'var(--text-gray)'}}>Thử nói:</span>
        <div className="editor-chips">
          <span className="editor-chip">Bớt một địa điểm</span>
          <span className="editor-chip">Thêm trải nghiệm ẩm thực</span>
          <span className="editor-chip">Nghỉ nhiều hơn</span>
          <span className="editor-chip">Đi chậm hơn</span>
        </div>
      </div>
      
      <div className="editor-input-wrap">
        <textarea 
          className="editor-input" 
          rows={2} 
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <button className="editor-send"><Send size={20}/></button>
      </div>
      
      {showResponse && (
        <div className="ai-response-box">
          <div className="ai-res-header">
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=vietvista&backgroundColor=transparent" alt="AI" style={{width:'24px'}}/>
            VietVista AI đề xuất:
          </div>
          <ul className="ai-res-list">
            <li><Check size={14} color="var(--primary-green)"/> Đã lược bỏ Lăng Khải Định khỏi lịch trình ngày 2.</li>
            <li><Check size={14} color="var(--primary-green)"/> Tăng thêm 1h nghỉ ngơi tại quán cà phê ven sông Hương.</li>
            <li><Check size={14} color="var(--primary-green)"/> Giữ nguyên các điểm còn lại để vẫn đảm bảo trải nghiệm chính.</li>
          </ul>
          <div style={{display:'flex', gap:'12px'}}>
            <button className="tl-btn tl-btn-primary" style={{padding:'8px 24px'}}>Áp dụng</button>
            <button className="tl-btn" style={{padding:'8px 24px'}}>Giữ nguyên</button>
          </div>
        </div>
      )}
    </div>
  );
}
