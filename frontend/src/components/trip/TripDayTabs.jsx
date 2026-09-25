import React from 'react';

export default function TripDayTabs({ days, activeDay, onSelectDay }) {
  return (
    <div className="day-tabs">
      {days.map(d => (
        <div 
          key={d.day} 
          className={`day-tab ${activeDay === d.day ? 'active' : ''}`}
          onClick={() => onSelectDay(d.day)}
        >
          <strong>Ngày {d.day}</strong>
          <span>{d.date} • {d.loc}</span>
        </div>
      ))}
      <div className="trip-quote-right">
        Những hành trình đẹp hơn<br/>nhờ trí tuệ Việt
      </div>
    </div>
  );
}
