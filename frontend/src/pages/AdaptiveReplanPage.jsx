import React from 'react';
import ReplanHeader from '../components/replan/ReplanHeader';
import CurrentSchedulePanel from '../components/replan/CurrentSchedulePanel';
import ReplanMap from '../components/replan/ReplanMap';
import ReplanAIPanel from '../components/replan/ReplanAIPanel';
import ReplanOptionsGrid from '../components/replan/ReplanOptionsGrid';
import '../styles/replan.css';

export default function AdaptiveReplanPage() {
  return (
    <div className="replan-page">
      <ReplanHeader />
      
      <div className="rp-workspace">
        <CurrentSchedulePanel />
        <ReplanMap />
        <ReplanAIPanel />
      </div>
      
      <ReplanOptionsGrid />
    </div>
  );
}
