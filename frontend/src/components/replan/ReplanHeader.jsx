import React from 'react';
import { ArrowLeft, Clock, CloudSun, Car, Wallet } from 'lucide-react';
import { replanData } from '../../data/replanMockData';
import { useNavigate } from 'react-router-dom';

export default function ReplanHeader() {
  const navigate = useNavigate();
  const { trigger, contextSummary } = replanData;

  return (
    <div>
      <div className="rp-header-bar">
        <div className="rp-back" onClick={() => navigate(-1)}><ArrowLeft size={16}/> Quay lại</div>
        <div className="rp-title">
          <h1>AI đề xuất điều chỉnh lịch trình</h1>
          <p>Dựa trên tình huống hiện tại, VietVista AI đã tính toán các phương án tối ưu cho phần còn lại của ngày.</p>
        </div>
      </div>
      
      <div className="rp-summary-grid">
        <div className="rp-alert-card">
          <Clock size={32} className="rp-alert-icon" />
          <div>
            <h3>Bạn đang trễ {trigger.minutes} phút so với kế hoạch</h3>
            <p>{trigger.message}</p>
          </div>
        </div>
        
        <div className="rp-context-card">
          <CloudSun size={24} className="rp-context-icon" />
          <div>
            <h5>Thời tiết hiện tại</h5>
            <h4>{contextSummary.weather.temp}</h4>
            <p>{contextSummary.weather.condition} • {contextSummary.weather.impact}</p>
          </div>
        </div>
        
        <div className="rp-context-card">
          <Car size={24} className="rp-context-icon" />
          <div>
            <h5>Tình hình giao thông</h5>
            <h4>{contextSummary.traffic.status}</h4>
            <p>{contextSummary.traffic.desc}</p>
          </div>
        </div>
        
        <div className="rp-context-card">
          <Wallet size={24} className="rp-context-icon" />
          <div>
            <h5>Ngân sách hôm nay</h5>
            <h4>{contextSummary.budget.used}</h4>
            <p>Còn lại: {contextSummary.budget.remaining} • {contextSummary.budget.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
