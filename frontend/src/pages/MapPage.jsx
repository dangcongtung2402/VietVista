import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MapIntro from '../components/map/MapIntro';
import MapSearchPanel from '../components/map/MapSearchPanel';
import POIDetailPanel from '../components/map/POIDetailPanel';
import VietnamMap from '../components/map/VietnamMap';
import AIMapRecommendations from '../components/map/AIMapRecommendations';
import RegionalDiscovery from '../components/map/RegionalDiscovery';
import { POIs } from '../data/mapMockData';
import '../styles/map.css';

export default function MapPage() {
  const [activePOIId, setActivePOIId] = useState('hue');
  
  const activePOI = activePOIId ? POIs.find(p => p.id === activePOIId) : null;

  return (
    <div className="map-page-wrapper">
      <Header />
      
      <MapIntro />
      
      <div className="map-workspace-container">
        <VietnamMap 
          activePOIId={activePOIId} 
          onSelectPOI={setActivePOIId} 
        />
        
        <MapSearchPanel />
        
        <POIDetailPanel 
          poi={activePOI} 
          onClose={() => setActivePOIId(null)} 
        />
      </div>
      
      <div className="map-bottom-sections">
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <AIMapRecommendations />
          <RegionalDiscovery />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
