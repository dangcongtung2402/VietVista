import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { POIs } from '../../data/mapMockData';

// Fix leaflet default icons issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// A dashed line connecting all POIs like in the screenshot
const connectionLine = POIs.map(p => p.coords);

export default function VietnamMap({ activePOIId, onSelectPOI }) {
  const getAvatarIcon = (poi, isActive) => {
    return L.divIcon({
      className: 'custom-avatar-icon',
      html: `
        <div class="map-avatar-marker ${isActive ? 'active' : ''}">
          <div class="map-avatar-img-wrap">
            <img src="${poi.img}" class="map-avatar-img" />
          </div>
          <div class="map-avatar-label">${poi.name}</div>
        </div>
      `,
      iconSize: isActive ? [80, 80] : [60, 60],
      iconAnchor: isActive ? [40, 40] : [30, 30]
    });
  };

  return (
    <div className="main-leaflet-map">
      <MapContainer 
        center={[16.0, 106.0]} 
        zoom={6} 
        zoomControl={false} 
        style={{ height: '100%', width: '100%', background: '#073D35' }}
      >
        {/* Esri World Imagery - Satellite Map */}
        <TileLayer 
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" 
          opacity={0.6}
        />
        {/* Dark overlay to match design */}
        <div style={{position: 'absolute', inset: 0, background: 'rgba(7, 61, 53, 0.4)', zIndex: 400, pointerEvents: 'none'}}></div>
        
        <Polyline positions={connectionLine} color="#D6A63A" weight={2} dashArray="8, 12" opacity={0.6} />

        {POIs.map(poi => (
          <Marker 
            key={poi.id}
            position={poi.coords}
            icon={getAvatarIcon(poi, poi.id === activePOIId)}
            eventHandlers={{
              click: () => onSelectPOI(poi.id)
            }}
          />
        ))}
      </MapContainer>
    </div>
  );
}
