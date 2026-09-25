import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, Star, X, Send } from 'lucide-react';
import { liveTripData } from '../../data/liveTripMockData';

// Fix for default Leaflet icons in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom DivIcons
const createMarker = (num, type) => {
  return L.divIcon({
    html: `<div class="lt-custom-marker ${type === 'current' ? 'lt-marker-current' : 'lt-marker-next'}">${num}</div>`,
    className: 'custom-div-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });
};

export default function LiveTripMap() {
  const { mapConfig, timeline } = liveTripData;
  const currentPOI = timeline.find(t => t.status === 'CURRENT');
  const nextPOI = timeline.find(t => t.status === 'NEXT');
  
  const routePositions = [
    mapConfig.currentLocation,
    mapConfig.nextLocation
  ];

  return (
    <div className="lt-map-container">
      <div className="lt-map-ui-top">
        <div className="lt-map-pill">
          <div style={{width:'12px', height:'12px', background:'var(--emerald)', borderRadius:'50%'}}></div>
          <div>
            <div style={{fontSize:'0.7rem', color:'rgba(255,255,255,0.7)'}}>Vị trí hiện tại</div>
            <div style={{fontWeight:600}}>{currentPOI?.name}</div>
          </div>
        </div>
        
        <div className="lt-map-pill">
          <MapPin size={20} color="var(--emerald)"/>
          <div>
            <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.7rem', color:'rgba(255,255,255,0.7)', gap:'16px'}}>
              <span>GPS chính xác</span>
            </div>
            <div style={{fontWeight:600, display:'flex', alignItems:'center', gap:'4px'}}><Navigation size={14}/> 2.3 km/h</div>
          </div>
        </div>
      </div>
      
      <MapContainer 
        center={mapConfig.center} 
        zoom={mapConfig.zoom} 
        style={{ width: '100%', height: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="&copy; Esri"
        />
        <TileLayer
          url="https://stamen-tiles.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.png"
        />

        <Marker position={mapConfig.currentLocation} icon={createMarker(1, 'current')} />
        <Marker position={mapConfig.nextLocation} icon={createMarker(2, 'next')} />
        
        <Polyline positions={routePositions} pathOptions={{ color: '#4da6ff', weight: 4, dashArray: '10, 10' }} />
      </MapContainer>
      
      {/* Bottom Next Stop Overlay */}
      {nextPOI && (
        <div className="lt-next-stop-overlay">
          <div style={{position:'absolute', top:'12px', right:'12px', cursor:'pointer'}}><X size={16} color="rgba(255,255,255,0.5)"/></div>
          <img src={nextPOI.img} alt={nextPOI.name} className="lt-nso-img" />
          <div className="lt-nso-content">
            <div className="lt-nso-header">
              <div>
                <h5>Next Stop</h5>
                <h3>{nextPOI.name}</h3>
              </div>
            </div>
            <div className="lt-nso-tags">
              {nextPOI.tags?.map(t => <span key={t} className="lt-nso-tag">{t}</span>)}
            </div>
            
            <div style={{display:'flex', alignItems:'center', gap:'12px', marginBottom:'16px', fontSize:'0.85rem'}}>
              <span style={{display:'flex', alignItems:'center', gap:'4px', color:'var(--gold)'}}><Star size={14} fill="currentColor"/> {nextPOI.rating}</span>
              <span style={{color:'rgba(255,255,255,0.6)'}}>({nextPOI.reviews} đánh giá)</span>
              <span>•</span>
              <span>{nextPOI.distance} - {nextPOI.eta}</span>
            </div>
            
            <div className="lt-nso-metrics">
              <div className="lt-nso-metric">
                <span>Dự kiến đến</span>
                <strong>{nextPOI.expectedArrival}</strong>
              </div>
              <div className="lt-nso-metric">
                <span>Thời gian tham quan</span>
                <strong>{nextPOI.durationEst}</strong>
              </div>
              <div className="lt-nso-metric">
                <span>Giá vé</span>
                <strong>{nextPOI.price}</strong>
              </div>
              <button className="lt-nso-btn">Xem chi tiết &rarr;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
