import React, { useState } from 'react';
import { MapPin, Play, Image as ImageIcon, Video, Box, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import { immersiveData } from '../../data/immersiveMockData';

export default function ContextualAIGuide({ activeAreaId, activeHotspotId }) {
  // Mock switching context based on area (hotspots usually refine it further)
  const aiData = immersiveData.aiContext[activeAreaId] || immersiveData.aiContext['ngo-mon'];
  const [query, setQuery] = useState('');

  return (
    <div className="imm-ai-panel">
      <div className="imm-ai-header">
        <div className="imm-ai-header-brand">
          <div className="imm-ai-orb"></div>
          VietVista AI Guide
        </div>
        <div style={{display:'flex', gap:'8px', color:'#999'}}>
          <span>•••</span>
        </div>
      </div>
      
      <div className="imm-ai-content">
        <div className="imm-ai-loc">
          <div className="imm-ai-loc-label">Bạn đang khám phá</div>
          <h2 className="imm-ai-loc-title"><MapPin size={24} color="var(--gold)"/> {aiData.title}</h2>
          <div className="imm-ai-tags">
            {aiData.tags.map(t => <span key={t} className="imm-ai-tag">{t}</span>)}
          </div>
        </div>
        
        <p className="imm-ai-story">{aiData.story}</p>
        
        <div className="imm-ai-audio">
          <div className="imm-ai-audio-btn"><Play size={16} fill="white"/></div>
          <span style={{fontWeight:500, fontSize:'0.9rem'}}>{aiData.audio}</span>
        </div>
        
        <div className="imm-ai-media-grid">
          {aiData.media.map((m, idx) => (
            <div key={idx} className="imm-ai-media-item">
              <img src={m.img} alt={m.label} />
              <div className="imm-ai-media-label">
                {m.type === 'video' && <Play size={12} style={{marginRight:'4px'}}/>}
                {m.type === '3d' && <Box size={12} style={{marginRight:'4px'}}/>}
                {m.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="imm-ai-suggestions">
          <div className="imm-ai-sugg-title"><Sparkles size={18} color="var(--gold)"/> Gợi ý từ VietVista AI</div>
          <p className="imm-ai-sugg-desc">Vì bạn quan tâm đến lịch sử và kiến trúc, đây là những góc nhìn đáng chú ý về {aiData.title}:</p>
          <div className="imm-ai-q-list">
            {aiData.aiQuestions.map((q, i) => (
              <div key={i} className="imm-ai-q">
                <span style={{display:'flex', alignItems:'center', gap:'8px'}}>{mIcon(q)} {q}</span>
                <ChevronRight size={16} color="#ccc"/>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="imm-ai-input-wrap">
        <div className="imm-ai-input-box">
          <input 
            type="text" 
            placeholder="Hỏi VietVista về những gì bạn đang nhìn..." 
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="imm-ai-send"><ArrowRight size={18}/></button>
        </div>
        <div className="imm-ai-quick-tags">
          {aiData.quickPrompts.map(qp => (
            <span key={qp} className="imm-ai-quick-tag">{qp}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// simple helper to map icon based on question text
function mIcon(text) {
  if (text.includes('3D')) return <Box size={16} color="var(--gold)"/>;
  if (text.includes('So sánh') || text.includes('ảnh')) return <ImageIcon size={16} color="var(--gold)"/>;
  if (text.includes('Tại sao') || text.includes('Ý nghĩa')) return <span style={{width:'16px', height:'16px', display:'inline-block', background:'url(https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=32) center/cover', borderRadius:'4px'}}></span>;
  return <Sparkles size={16} color="var(--gold)"/>;
}
