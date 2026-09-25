import React from 'react';
import { liveTripData } from '../../data/liveTripMockData';
import { Sun, Navigation } from 'lucide-react';

export default function LiveTripBottomBar() {
  const { title, currentDay, weather, timeline } = liveTripData;

  return (
    <div className="lt-bottom-bar">
      <div style={{width:'240px'}}>
        <h4 style={{margin:'0 0 4px 0', fontSize:'1rem', display:'flex', alignItems:'center', gap:'8px'}}><Navigation size={16} color="var(--gold)"/> Hành trình của bạn</h4>
        <p style={{margin:0, fontSize:'0.8rem', color:'rgba(255,255,255,0.7)'}}>Day {currentDay} • Huế</p>
      </div>
      
      <div className="lt-bb-timeline">
        {timeline.map(item => (
          <div key={item.id} className={`lt-bb-node ${item.status==='CURRENT' ? 'current' : item.status==='NEXT' ? '' : 'done'}`}>
            <div className="lt-bb-dot"></div>
            <h6>{item.name}</h6>
            <p>{item.time}</p>
          </div>
        ))}
      </div>
      
      <div className="lt-bb-weather">
        <Sun size={28} color="var(--gold)"/>
        <div>
          <h4>{weather.temp}</h4>
          <p>{weather.location} • {weather.condition}</p>
        </div>
      </div>
      
      <div className="lt-bb-cta">
        <div style={{transform:'rotate(-45deg)'}}><Navigation size={20} color="var(--gold)"/></div>
        <div>
          <h4>Khám phá tiếp</h4>
          <p>VietVista luôn đồng hành cùng bạn!</p>
        </div>
      </div>
    </div>
  );
}
