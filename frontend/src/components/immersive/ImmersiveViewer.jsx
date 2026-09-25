import React from 'react';
import { Target, Plus, Minus, Maximize, Headphones, Map as MapIcon, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { immersiveData } from '../../data/immersiveMockData';

export default function ImmersiveViewer({ activeAreaId, activeHotspotId, onSelectHotspot }) {
  const activeArea = immersiveData.areas.find(a => a.id === activeAreaId) || immersiveData.areas[0];
  const hotspots = immersiveData.hotspots[activeAreaId] || [];

  return (
    <div className="imm-viewer-container">
      {/* Background Image mocking 360 viewer */}
      <img src={activeArea.img} alt={activeArea.name} className="imm-viewer-bg" />
      
      {/* Controls */}
      <div className="imm-controls-left">
        <div className="imm-btn-circle"><Target size={20}/></div>
        <div className="imm-controls-group">
          <button><Plus size={20}/></button>
          <button><Minus size={20}/></button>
        </div>
        <div className="imm-btn-circle"><Maximize size={20}/></div>
        <div className="imm-btn-circle"><Headphones size={20}/></div>
      </div>
      
      {/* Hotspots */}
      {hotspots.map(spot => (
        <div 
          key={spot.id} 
          className={`imm-hotspot ${spot.id === activeHotspotId ? 'active' : ''}`}
          style={{left: `${spot.x}%`, top: `${spot.y}%`}}
          onClick={() => onSelectHotspot(spot.id)}
        >
          {spot.id === activeHotspotId && spot.desc && (
            <div className="imm-hotspot-active-card">
              <h4>{spot.label}</h4>
              <p>{spot.desc}</p>
            </div>
          )}
          <div className="imm-hotspot-dot"></div>
          <div className="imm-hotspot-label"><MapIcon size={14}/> {spot.label}</div>
        </div>
      ))}
      
      {/* Mini Map */}
      <div className="imm-minimap">
        <h5>Bản đồ khu vực</h5>
        <div className="imm-minimap-img">
          <div className="imm-minimap-dot"></div>
        </div>
      </div>
      
      {/* Spatial Nav */}
      <div className="imm-spatial-nav">
        <button style={{background:'transparent', border:'none', color:'white', cursor:'pointer'}}><ChevronLeft/></button>
        {immersiveData.areas.map(area => (
          <div key={area.id} className={`spatial-item ${area.id === activeAreaId ? 'active' : ''}`}>
            <img src={area.img} alt={area.name} />
            <div className="spatial-label">{area.name}</div>
            {area.id === activeAreaId && <PlayCircle size={20} color="white" style={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}}/>}
          </div>
        ))}
        <button style={{background:'transparent', border:'none', color:'white', cursor:'pointer'}}><ChevronRight/></button>
      </div>
    </div>
  );
}
