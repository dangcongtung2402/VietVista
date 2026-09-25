import React from 'react';
import { X, PlayCircle, PlusCircle, Bookmark, Navigation, Send, HelpCircle } from 'lucide-react';
import { liveTripData } from '../../data/liveTripMockData';

export default function LiveAIAssistant() {
  const { aiContext } = liveTripData;

  return (
    <div className="lt-ai-panel">
      <div className="lt-ai-header">
        <div className="lt-ai-brand">
          <div style={{width:'32px', height:'32px', background:'var(--emerald)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=vietvista&backgroundColor=transparent" alt="AI" style={{width:'24px'}}/>
          </div>
          <div>
            <h3>VietVista AI</h3>
            <p>Đồng hành cùng bạn trong chuyến đi</p>
          </div>
        </div>
        <X size={20} color="rgba(255,255,255,0.5)" style={{cursor:'pointer'}}/>
      </div>
      
      <div className="lt-ai-content">
        <div className="lt-ai-message">
          <div className="lt-ai-avatar">
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=vietvista&backgroundColor=transparent" alt="AI" style={{width:'20px'}}/>
          </div>
          <div style={{flex:1}}>
            <div className="lt-ai-msg-box">
              {aiContext.message}
            </div>
            <div className="lt-ai-msg-time">{aiContext.time}</div>
          </div>
        </div>
        
        <div className="lt-ai-questions">
          {aiContext.suggestions.map((q, i) => (
            <div key={i} className="lt-ai-q-btn"><HelpCircle size={16} color="var(--gold)"/> {q}</div>
          ))}
        </div>
        
        {aiContext.media && (
          <div className="lt-ai-media-card">
            <img src={aiContext.media.img} alt="media" />
            <div className="lt-ai-media-overlay">
              <h5>{aiContext.media.title}</h5>
              <span><PlayCircle size={14}/> Xem video ({aiContext.media.duration})</span>
            </div>
          </div>
        )}
        
        {aiContext.proactiveTip && (
          <div className="lt-ai-tip">
            <div style={{flexShrink:0}}><img src="https://api.dicebear.com/7.x/bottts/svg?seed=vietvista&backgroundColor=transparent" alt="AI" style={{width:'24px'}}/></div>
            <div>
              <h5 style={{margin:'0 0 4px 0', fontSize:'0.9rem', color:'var(--emerald)'}}>VietVista AI gợi ý</h5>
              <p style={{margin:0, fontSize:'0.85rem', lineHeight:1.5}}>{aiContext.proactiveTip}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="lt-ai-input-area">
        <div className="lt-ai-input-box">
          <input type="text" placeholder="Hỏi VietVista về chuyến đi của bạn..." />
          <button className="lt-ai-send"><Send size={16}/></button>
        </div>
        <div className="lt-ai-actions-row">
          <div className="lt-ai-action-sm"><Navigation size={14}/> Gợi ý lịch trình</div>
          <div className="lt-ai-action-sm"><Bookmark size={14}/> Lưu địa điểm</div>
          <div className="lt-ai-action-sm"><PlusCircle size={14}/> Thêm vào trip</div>
        </div>
      </div>
    </div>
  );
}
