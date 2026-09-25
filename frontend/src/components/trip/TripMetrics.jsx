import React from 'react';
import { DollarSign, Clock, Map, Star } from 'lucide-react';

export default function TripMetrics({ dayStat }) {
  return (
    <div className="metrics-row">
      <div className="metric-card">
        <div className="metric-icon"><DollarSign size={20}/></div>
        <div className="metric-info">
          <h5>Chi phí dự kiến</h5>
          <strong>{dayStat.cost}</strong>
          <p>Trong ngân sách 8.000.000đ</p>
        </div>
      </div>
      
      <div className="metric-card">
        <div className="metric-icon"><Clock size={20}/></div>
        <div className="metric-info">
          <h5>Thời gian trong ngày</h5>
          <strong>{dayStat.time}</strong>
          <p>Tổng thời gian tham quan</p>
        </div>
      </div>
      
      <div className="metric-card">
        <div className="metric-icon"><Map size={20}/></div>
        <div className="metric-info">
          <h5>Quãng đường</h5>
          <strong>{dayStat.distance}</strong>
          <p>Di chuyển trong ngày</p>
        </div>
      </div>
      
      <div className="metric-card">
        <div className="metric-icon"><Star size={20}/></div>
        <div className="metric-info">
          <h5>Mức độ phù hợp</h5>
          <strong>{dayStat.match}%</strong>
          <p>Phù hợp với sở thích của bạn</p>
        </div>
      </div>
    </div>
  );
}
