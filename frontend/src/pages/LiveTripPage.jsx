import React from 'react';
import LiveTripSidebar from '../components/liveTrip/LiveTripSidebar';
import LiveTripMap from '../components/liveTrip/LiveTripMap';
import LiveAIAssistant from '../components/liveTrip/LiveAIAssistant';
import LiveTripBottomBar from '../components/liveTrip/LiveTripBottomBar';
import '../styles/liveTrip.css';

export default function LiveTripPage() {
  return (
    <div className="live-trip-page">
      <div className="lt-workspace">
        <LiveTripSidebar />
        <LiveTripMap />
        <LiveAIAssistant />
      </div>
      <LiveTripBottomBar />
    </div>
  );
}
