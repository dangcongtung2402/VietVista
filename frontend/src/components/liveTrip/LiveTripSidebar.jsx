import React from 'react';
import { ArrowLeft, Calendar, CheckCircle } from 'lucide-react';
import { liveTripData } from '../../data/liveTripMockData';

export default function LiveTripSidebar() {
  const { title, dateRange, duration, currentDay, totalDays, completedPOIs, totalPOIs, aiMatch, status, heroImg, timeline } = liveTripData;

  return (
    <div className="lt-sidebar">
      <div className="lt-hero" style={{backgroundImage: `url(${heroImg})`}}>
        <div className="lt-hero-overlay">
          <div className="lt-hero-header">
            <div className="lt-back"><ArrowLeft size={16}/> Quay lại</div>
            <div className="lt-status-badge">{status}</div>
          </div>
          <h2>{title}</h2>
          <p>{dateRange} • {duration}</p>
        </div>
      </div>
      
      <div className="lt-stats-grid">
        <div className="lt-stat-box active">
          <h4>Ngày {currentDay}/{totalDays}</h4>
          <p>Đang đi</p>
        </div>
        <div className="lt-stat-box">
          <h4>{completedPOIs}/{totalPOIs}</h4>
          <p>Đã khám phá</p>
        </div>
        <div className="lt-stat-box">
          <h4>{aiMatch}%</h4>
          <p>Phù hợp với bạn</p>
        </div>
      </div>
      
      <div className="lt-timeline-container">
        <div className="lt-timeline-line"></div>
        {timeline.map((item, idx) => {
          const isCurrent = item.status === 'CURRENT';
          return (
            <div key={item.id} className={`lt-timeline-item ${isCurrent ? 'current' : ''}`}>
              <div className="lt-ti-node">{isCurrent ? <div style={{width:'8px',height:'8px',background:'currentColor',borderRadius:'50%'}}></div> : `0${item.id}`}</div>
              <div className="lt-ti-content">
                <div className="lt-ti-header">
                  <img src={item.img} alt={item.name} className="lt-ti-img" />
                  <div className="lt-ti-info">
                    <h4>{item.name}</h4>
                    <p>{item.time}</p>
                  </div>
                </div>
                {item.status === 'CURRENT' && <div className="lt-ti-badge badge-current"><CheckCircle size={10} style={{display:'inline', marginRight:'4px'}}/> Đang ở đây</div>}
                {item.status === 'NEXT' && <div className="lt-ti-badge badge-next">Tiếp theo</div>}
                {item.status === 'NEXT' && <p style={{fontSize:'0.75rem', color:'rgba(255,255,255,0.7)', margin:0}}>Cách {item.distance} • {item.eta}</p>}
              </div>
            </div>
          );
        })}
        
        <div style={{display:'flex', alignItems:'center', gap:'8px', justifyContent:'center', padding:'12px', background:'rgba(255,255,255,0.05)', borderRadius:'12px', fontSize:'0.85rem', cursor:'pointer'}}>
          <Calendar size={16}/> Xem toàn bộ lịch trình &rarr;
        </div>
      </div>
    </div>
  );
}
