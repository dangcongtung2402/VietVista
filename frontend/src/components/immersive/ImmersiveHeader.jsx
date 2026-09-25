import React from 'react';
import { ArrowLeft, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ImmersiveHeader({ poiId, poiName }) {
  const navigate = useNavigate();

  return (
    <div className="immersive-header">
      <div>
        <div className="imm-breadcrumb">
          <ArrowLeft size={16} onClick={() => navigate(-1)} style={{cursor: 'pointer'}} />
          <span onClick={() => navigate(-1)}>Quay lại</span>
          <span>|</span>
          <span onClick={() => navigate(`/poi/${poiId}`)}>{poiName}</span>
          <span>&gt;</span>
          <span style={{color:'white', fontWeight:600}}>Khám phá trước</span>
        </div>
        <div className="imm-title-row">
          <h1>{poiName}</h1>
          <span className="imm-tag"><Crown size={14}/> Di sản thế giới UNESCO</span>
        </div>
      </div>
      
      <div className="imm-mode-switch">
        <button className="imm-mode-btn active">360° Khám phá</button>
        <button className="imm-mode-btn">3D Mô hình</button>
        <button className="imm-mode-btn">Hành trình cùng AI</button>
      </div>
    </div>
  );
}
