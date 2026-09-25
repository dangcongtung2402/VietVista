import React from 'react';
import { CalendarDays } from 'lucide-react';
import { replanData } from '../../data/replanMockData';

export default function CurrentSchedulePanel() {
  const { currentSchedule, trigger } = replanData;

  return (
    <div className="rp-schedule-panel">
      <div className="rps-header">
        <h3><CalendarDays size={20}/> Lịch trình hiện tại</h3>
        <span className="rps-badge">Đang trễ {trigger.minutes} phút</span>
      </div>
      <div className="rps-content">
        <div className="rps-line"></div>
        {currentSchedule.map((item, idx) => {
          let statusClass = '';
          if (item.status === 'DONE') statusClass = 'done';
          if (item.status === 'CURRENT_DELAYED') statusClass = 'delayed';
          if (item.status === 'AFFECTED' || item.status === 'AT_RISK') statusClass = 'affected';
          
          return (
            <div key={item.id} className={`rps-item ${statusClass}`}>
              <div className="rps-time">{item.time}</div>
              <div className="rps-node"></div>
              <div className="rps-info">
                <h4>{item.name} {item.status === 'CURRENT_DELAYED' && `+${item.delayMin} phút`}</h4>
                <p>{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
