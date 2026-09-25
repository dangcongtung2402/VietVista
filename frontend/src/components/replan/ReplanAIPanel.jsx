import React from 'react';
import { Lightbulb, Clock, Calendar, Heart, Car, Wallet, Hourglass } from 'lucide-react';
import { replanData } from '../../data/replanMockData';

const iconMap = {
  Clock: <Clock size={20}/>,
  Calendar: <Calendar size={20}/>,
  Heart: <Heart size={20}/>,
  Car: <Car size={20}/>,
  Wallet: <Wallet size={20}/>,
  Hourglass: <Hourglass size={20}/>
};

export default function ReplanAIPanel() {
  const { aiAnalysis } = replanData;

  return (
    <div className="rp-ai-panel">
      <div className="rpai-header">
        <div className="rpai-brand">
          <div style={{width:'32px', height:'32px', background:'var(--emerald)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=vietvista&backgroundColor=transparent" alt="AI" style={{width:'24px'}}/>
          </div>
          <div>
            <h4>VietVista AI</h4>
            <p>Phân tích tình huống &amp; đề xuất phương án</p>
          </div>
        </div>
        <div className="rpai-badge">✨ AI</div>
      </div>
      
      <div className="rpai-content">
        <p className="rpai-intro">{aiAnalysis.text}</p>
        
        <div className="rpai-factors-title">
          <div style={{width:'8px', height:'8px', background:'var(--emerald)', borderRadius:'50%'}}></div>
          Những yếu tố AI đang cân nhắc
        </div>
        
        <div className="rpai-factors-grid">
          {aiAnalysis.factors.map(f => (
            <div key={f.label} className="rpai-factor">
              <div className="rpai-f-icon">{iconMap[f.icon]}</div>
              <div>
                <h6>{f.label}</h6>
                <p>{f.val}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="rpai-tip">
          <h5><Lightbulb size={20}/> Gợi ý nhanh</h5>
          <p>{aiAnalysis.quickTip}</p>
        </div>
      </div>
    </div>
  );
}
