import React from 'react';
import { MapPin, Clock, Ticket, Navigation, Bus, Car } from 'lucide-react';

export default function POIOverview({ poi }) {
  return (
    <div className="poi-section">
      <div className="overview-grid">
        <div className="overview-left">
          <div className="poi-section-title">
            <h2>Giới thiệu</h2>
          </div>
          <p style={{fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-gray)'}}>
            Đại Nội Huế là trung tâm quyền lực của triều Nguyễn (1802 - 1945), bao gồm Hoàng thành,
            Tử Cấm thành và các công trình quan trọng khác. Nơi đây lưu giữ những giá trị đặc sắc về
            lịch sử, kiến trúc, nghệ thuật và văn hóa cung đình Việt Nam.
          </p>
          
          <div className="overview-stats">
            {poi.stats.map(s => (
              <div key={s.label} className="stat-item">
                <div className="stat-icon">{s.icon}</div>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="overview-right">
          <div className="quick-info-card">
            <div className="quick-info-header">
              <h3>Thông tin nhanh</h3>
              <a href="#" style={{color: 'var(--primary-green)', fontSize: '0.85rem', textDecoration:'none'}}>Xem chi tiết &rarr;</a>
            </div>
            
            <div className="info-row">
              <MapPin size={20}/>
              <div className="info-text">
                <h5>Địa chỉ</h5>
                <p>{poi.quickInfo.address}</p>
              </div>
            </div>
            <div className="info-row">
              <Clock size={20}/>
              <div className="info-text">
                <h5>Giờ mở cửa</h5>
                <p>{poi.quickInfo.hours}</p>
              </div>
            </div>
            <div className="info-row">
              <Ticket size={20}/>
              <div className="info-text">
                <h5>Giá vé tham quan</h5>
                <p>{poi.quickInfo.ticket}</p>
              </div>
            </div>
            <div className="info-row">
              <Navigation size={20}/>
              <div className="info-text">
                <h5>Thời gian tham quan</h5>
                <p>{poi.quickInfo.duration}</p>
              </div>
            </div>
            
            <div className="mini-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15286.079237666492!2d107.570192537248!3d16.46747535492929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a13e583cda7f%3A0xc6a8c4c1a5d625d9!2sHue%20Imperial%20City!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s" 
                width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
