import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TripOverview from '../components/trip/TripOverview';
import TripDayTabs from '../components/trip/TripDayTabs';
import ItineraryTimeline from '../components/trip/ItineraryTimeline';
import TripMap from '../components/trip/TripMap';
import AIInsightPanel from '../components/trip/AIInsightPanel';
import TripMetrics from '../components/trip/TripMetrics';
import { AIExplanation, NaturalLanguageEditor } from '../components/trip/AIExplanation';
import { mockTrip } from '../data/tripMockData';
import '../styles/trip.css';
import { Settings2, Sparkles, Play } from 'lucide-react';

export default function TripPage() {
  const [activeDay, setActiveDay] = useState(2);
  
  // Current active data
  const dayStat = mockTrip.dailyStats.find(d => d.day === activeDay) || mockTrip.dailyStats[0];
  const timelineActs = mockTrip.timeline[activeDay] || [];

  return (
    <div className="trip-workspace">
      <Header />
      
      <div className="trip-container">
        <TripOverview trip={mockTrip} />
        
        <TripDayTabs 
          days={mockTrip.dailyStats} 
          activeDay={activeDay} 
          onSelectDay={setActiveDay} 
        />
        
        <div className="workspace-grid">
          {/* LEFT: TIMELINE */}
          <div className="workspace-left">
            <ItineraryTimeline activities={timelineActs} dayStat={dayStat} />
          </div>
          
          {/* RIGHT: MAP & AI */}
          <div className="trip-sidebar">
            <TripMap activities={timelineActs} />
            <AIInsightPanel />
          </div>
        </div>
        
        <TripMetrics dayStat={dayStat} />
        
        <div className="bottom-sections">
          <AIExplanation />
          <NaturalLanguageEditor />
        </div>
      </div>
      
      {/* STICKY BOTTOM BAR */}
      <div className="sticky-bottom-bar">
        <div className="sbb-left">
          Việt Nam<br/>luôn có vô vàn điều thú vị để khám phá
        </div>
        <div className="sbb-center">
          <button className="sbb-btn sbb-outline"><Settings2 size={18}/> Chỉnh hành trình</button>
          <button className="sbb-btn sbb-ai"><Sparkles size={18}/> AI tối ưu lại</button>
          <button className="sbb-btn sbb-primary"><Play size={18}/> Bắt đầu chuyến đi</button>
        </div>
        <div className="sbb-right">
          Sẵn sàng cho<br/>hành trình đáng nhớ?
        </div>
      </div>
      
    </div>
  );
}
