import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { replanData } from '../../data/replanMockData';

// Fix for default Leaflet icons in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const createNodeIcon = (color) => {
  return L.divIcon({
    html: `<div style="width:20px;height:20px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 0 10px rgba(0,0,0,0.5);"></div>`,
    className: 'custom-node-icon',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
};

export default function ReplanMap() {
  const { mapData } = replanData;

  return (
    <div className="rp-map-panel">
      <div className="rp-map-legend">
        <div className="rpl-item"><div className="rpl-line" style={{background:'#E65100'}}></div> Lộ trình hiện tại (có trễ)</div>
        <div className="rpl-item"><div className="rpl-line" style={{background:'var(--emerald)'}}></div> Phương án tối ưu (AI đề xuất)</div>
        <div className="rpl-item"><div className="rpl-line" style={{background:'#999', borderTop:'2px dashed #999', height:'0'}}></div> Điểm có thể bỏ qua</div>
      </div>
      
      <MapContainer 
        center={mapData.center} 
        zoom={13} 
        style={{ width: '100%', height: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="&copy; Esri"
        />
        <TileLayer
          url="https://stamen-tiles.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.png"
        />

        {/* Old Route (Red) */}
        <Polyline positions={mapData.oldRoute} pathOptions={{ color: '#E65100', weight: 4, dashArray: '10, 10' }} />
        
        {/* New Route (Emerald) */}
        <Polyline positions={mapData.newRoute.slice(0,2)} pathOptions={{ color: '#12715B', weight: 6 }} />
        
        {mapData.newRoute.map((pos, idx) => (
           <Marker key={idx} position={pos} icon={createNodeIcon(idx === 0 ? '#E65100' : '#12715B')} />
        ))}
      </MapContainer>
    </div>
  );
}
