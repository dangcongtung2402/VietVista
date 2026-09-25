import React from 'react';
import { Search, Map, Calendar, Compass, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="navbar">
      <Link to="/home" className="nav-brand">
        <svg viewBox="0 0 100 30" className="logo-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 20 L50 10 L60 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 20 L40 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M60 10 L70 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="nav-brand-text">
          <strong>VietVista AI</strong>
          <span>Khám phá Việt Nam theo cách của bạn</span>
        </div>
      </Link>
      
      <div className="nav-links">
        <Link to="/home" className={`nav-link ${path === '/home' ? 'active' : ''}`}><MapPin size={18} /> Trang chủ</Link>
        <Link to="/explore" className={`nav-link ${path === '/explore' ? 'active' : ''}`}><Compass size={18} /> Khám phá</Link>
        <Link to="/trips/current" className={`nav-link ${path.includes('/trips') ? 'active' : ''}`}><Calendar size={18} /> Lịch trình</Link>
        <Link to="/map" className={`nav-link ${path === '/map' ? 'active' : ''}`}><Map size={18} /> Bản đồ</Link>
      </div>
      
      <div className="nav-actions">
        <div className="nav-search">
          <Search size={18} color="#666" />
          <input type="text" placeholder="Tìm điểm đến, trải nghiệm..." />
        </div>
        <div className="nav-lang">VI ▾</div>
        <button className="btn-outline">Đăng nhập</button>
        <button className="btn-primary">Đăng ký</button>
      </div>
    </nav>
  );
}
