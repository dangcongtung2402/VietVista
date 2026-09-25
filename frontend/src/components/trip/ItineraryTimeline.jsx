import React from 'react';
import { Clock, Navigation, Lock, Unlock, X, RefreshCcw } from 'lucide-react';

export function TimelineActivityCard({ act }) {
  return (
    <div className="timeline-item">
      <div className="tl-time">
        <strong>{act.timeStart}</strong>
        <span>{act.timeEnd}</span>
      </div>
      
      <div className="tl-node"></div>
      
      <div className="tl-content">
        <img src={act.img} alt={act.title} className="tl-img" />
        <div className="tl-info">
          <div className="tl-title-row">
            <div>
              <h3>{act.title}</h3>
              <div className="tl-tags">
                {act.tags.map(t => <span key={t} className="tl-tag">{t}</span>)}
              </div>
            </div>
            <button className={`tl-lock-btn ${act.locked ? 'locked' : ''}`}>
              {act.locked ? <Lock size={12}/> : <Unlock size={12}/>} 
              {act.locked ? 'Đã khóa' : 'Khóa'}
            </button>
          </div>
          
          <p className="tl-desc">{act.desc}</p>
          
          <div className="tl-bottom">
            <div className="tl-meta">
              <span><Clock size={14}/> {act.duration}</span>
              {act.nextTransit && <span><Navigation size={14} style={{marginLeft: '8px'}}/> {act.nextTransit}</span>}
            </div>
            <div className="tl-actions">
              <button className="tl-btn tl-btn-primary">Chi tiết</button>
              <button className="tl-btn"><RefreshCcw size={14} /> Đổi</button>
              <button className="tl-btn"><X size={14} /> Xóa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ItineraryTimeline({ activities, dayStat }) {
  return (
    <div className="timeline-section">
      <div className="timeline-header">
        <div>
          <h2>Lịch trình ngày {dayStat.day}</h2>
          <span>Thứ Tư, 16/10/2024</span>
        </div>
        <div className="timeline-stats">
          {dayStat.activitiesCount} hoạt động • {dayStat.time} • {dayStat.distance}
        </div>
      </div>
      
      <div className="timeline-list">
        {activities.map(act => (
          <TimelineActivityCard key={act.id} act={act} />
        ))}
      </div>
    </div>
  );
}
