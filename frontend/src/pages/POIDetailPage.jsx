import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import POIHero from '../components/poi/POIHero';
import POIOverview from '../components/poi/POIOverview';
import POITimeline from '../components/poi/POITimeline';
import POIMediaGallery from '../components/poi/POIMediaGallery';
import POIImmersive from '../components/poi/POIImmersive';
import POIRelated from '../components/poi/POIRelated';
import { poiData } from '../data/poiMockData';
import '../styles/poi.css';

export default function POIDetailPage() {
  const [activeTab, setActiveTab] = useState('TongQuan');
  const tabs = [
    { id: 'TongQuan', label: 'Tổng quan' },
    { id: 'CauChuyen', label: 'Câu chuyện' },
    { id: 'HinhAnh', label: 'Hình ảnh & Video' },
    { id: '360', label: '360°' },
    { id: '3D', label: 'Mô hình 3D' },
    { id: 'ThongTin', label: 'Thông tin' },
    { id: 'BanDo', label: 'Bản đồ' },
    { id: 'AI', label: 'Gợi ý AI', icon: '✨' },
    { id: 'DanhGia', label: 'Đánh giá' }
  ];

  return (
    <div className="poi-page-wrapper">
      <Header />
      
      <POIHero poi={poiData} />
      
      <div className="poi-tabs-nav">
        {tabs.map(tab => (
          <div 
            key={tab.id} 
            className={`poi-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon && <span style={{marginRight: '6px'}}>{tab.icon}</span>}
            {tab.label}
          </div>
        ))}
      </div>
      
      <POIOverview poi={poiData} />
      
      <POITimeline timeline={poiData.timeline} />
      
      <POIMediaGallery />
      
      <POIImmersive />
      
      <POIRelated related={poiData.related} />
      
      <div style={{marginTop: '80px'}}>
        <Footer />
      </div>
    </div>
  );
}
