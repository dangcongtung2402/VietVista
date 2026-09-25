import React from 'react';
import { Settings2, Sparkles, Navigation } from 'lucide-react';

export default function TripOverview({ trip }) {
  return (
    <div className="trip-overview">
      <div className="to-left">
        <img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=200" alt="Huế" className="to-image" />
        <div className="to-info">
          <h4>HÀNH TRÌNH CỦA BẠN</h4>
          <h1>Chuyến đi của bạn</h1>
          <p>{trip.destinations}</p>
          <div className="to-meta">
            <span>📅 {trip.startDate} → {trip.endDate}</span>
            <span>☀️ {trip.durationDays} ngày</span>
            <span>👥 {trip.pax} người</span>
          </div>
        </div>
      </div>
      
      <div className="to-center">
        <div className="to-budget">
          <span className="to-budget-label">Chi phí dự kiến</span>
          <div className="to-budget-val">{trip.budget.estimated}<span>{trip.budget.currency}</span> / {trip.budget.total}{trip.budget.currency}</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{width: `${trip.budget.percent}%`}}></div>
          </div>
          <div className="to-budget-pct">{trip.budget.percent}%</div>
        </div>
        
        <div className="to-ai-match">
          <span className="to-budget-label">Độ phù hợp AI</span>
          <div className="match-circle">
            <span>{trip.aiMatch}%</span>
          </div>
        </div>
      </div>
      
      <div className="to-right">
        <div className="ai-quote">
          ✨ Lịch trình được tối ưu dựa trên sở thích lịch sử, ẩm thực và nhịp độ cân bằng của bạn.
        </div>
        <div className="to-actions">
          <button className="btn-outline"><Settings2 size={16} /> Chỉnh nhu cầu</button>
          <button className="btn-ai"><Sparkles size={16} /> AI tối ưu lại</button>
        </div>
      </div>
    </div>
  );
}
