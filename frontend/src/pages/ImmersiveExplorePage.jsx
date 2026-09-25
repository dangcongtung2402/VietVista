import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ImmersiveHeader from '../components/immersive/ImmersiveHeader';
import ImmersiveViewer from '../components/immersive/ImmersiveViewer';
import ContextualAIGuide from '../components/immersive/ContextualAIGuide';
import GuidedTourBottom from '../components/immersive/GuidedTourBottom';
import { immersiveData } from '../data/immersiveMockData';
import '../styles/immersive.css';

export default function ImmersiveExplorePage() {
  const { id } = useParams();
  
  // State for immersive context
  const [activeAreaId, setActiveAreaId] = useState('ngo-mon');
  const [activeHotspotId, setActiveHotspotId] = useState('lau-ngu-phung');

  return (
    <div className="immersive-page">
      <ImmersiveHeader poiId={id || immersiveData.poiId} poiName={immersiveData.name} />
      
      <div className="imm-workspace">
        <ImmersiveViewer 
          activeAreaId={activeAreaId} 
          activeHotspotId={activeHotspotId}
          onSelectHotspot={setActiveHotspotId}
        />
        <ContextualAIGuide 
          activeAreaId={activeAreaId}
          activeHotspotId={activeHotspotId}
        />
      </div>
      
      <GuidedTourBottom />
    </div>
  );
}
