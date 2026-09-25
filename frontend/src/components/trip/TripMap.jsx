import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import { Maximize2 } from 'lucide-react';
import L from 'leaflet';

export default function TripMap({ activities }) {
  // Simple bounds and route for demo
  const route = activities.map(a => a.coords);
  const center = route.length > 0 ? route[0] : [16.4637, 107.5909];

  const customIcon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="width:16px;height:16px;background:var(--primary-green);border-radius:50%;border:2px solid white;box-shadow:0 0 4px rgba(0,0,0,0.5)"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });

  return (
    <div className="trip-map-card">
      <div className="trip-map-header">
        <h3>Bản đồ hành trình</h3>
        <button className="btn-expand"><Maximize2 size={14} /> Toàn màn hình</button>
      </div>
      
      <div className="trip-map-container">
        <MapContainer center={center} zoom={11} zoomControl={false} style={{height: '100%', width: '100%'}}>
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
          <Polyline positions={route} color="#0B5D4B" weight={3} dashArray="5, 10" />
          {activities.map(act => (
            <Marker key={act.id} position={act.coords} icon={customIcon} />
          ))}
        </MapContainer>
        
        <div className="map-controls" style={{position:'absolute', bottom:'16px', right:'16px', zIndex:1000}}>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
}
