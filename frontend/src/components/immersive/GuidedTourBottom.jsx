import React from 'react';
import { Flag, CalendarPlus, ChevronRight } from 'lucide-react';
import { immersiveData } from '../../data/immersiveMockData';

export default function GuidedTourBottom() {
  const { guidedTour, tripDecision } = immersiveData;

  return (
    <div className="imm-bottom-bar">
      <div className="imm-bottom-tour">
        <div className="imm-tour-header">
          <div className="imm-tour-title">
            <Flag size={20} color="var(--gold)"/> 
            <div>
              Hành trình khám phá gợi ý
              <div style={{fontSize:'0.8rem', color:'#666', fontWeight:400, marginTop:'4px'}}>Khám phá Đại Nội theo lộ trình được thiết kế bởi VietVista AI</div>
            </div>
          </div>
          <div className="imm-tour-filters">
            <span className="imm-tour-filter">5 phút</span>
            <span className="imm-tour-filter active">10 phút</span>
            <span className="imm-tour-filter">15 phút</span>
            <span style={{width:'1px', background:'#ddd', margin:'0 8px'}}></span>
            <span className="imm-tour-filter active">Lịch sử</span>
            <span className="imm-tour-filter">Kiến trúc</span>
            <span className="imm-tour-filter">Văn hóa</span>
            <span className="imm-tour-filter">Điều ít người biết</span>
          </div>
        </div>
        
        <div className="imm-tour-timeline">
          {guidedTour.map((stop, idx) => (
            <React.Fragment key={stop.id}>
              <div className="imm-tour-stop">
                <div className="imm-tour-stop-num">{stop.id}</div>
                <img src={stop.img} alt={stop.name} className="imm-tour-stop-img" />
                <h5>{stop.name}</h5>
                <p>{stop.duration}</p>
                <p style={{marginTop:'4px'}}>{stop.desc}</p>
              </div>
              {idx < guidedTour.length - 1 && (
                <div style={{alignSelf:'center', color:'#ccc'}}><ChevronRight size={20}/></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div className="imm-bottom-trip">
        <div className="imm-trip-header">
          <CalendarPlus size={20} color="var(--gold)"/> Đưa vào hành trình của bạn
        </div>
        <div className="imm-trip-desc">
          Đại Nội phù hợp nhất với <strong>{tripDecision.day}</strong>
        </div>
        <div className="imm-trip-stats">
          <span><span style={{color:'rgba(255,255,255,0.5)', width:'100px'}}>Thời gian gợi ý:</span> {tripDecision.time}</span>
          <span><span style={{color:'rgba(255,255,255,0.5)', width:'100px'}}>Chi phí dự kiến:</span> {tripDecision.cost}</span>
          <span><span style={{color:'rgba(255,255,255,0.5)', width:'100px'}}>Di chuyển từ chỗ ở:</span> {tripDecision.commute}</span>
        </div>
        <button className="btn-trip-add">Thêm vào lịch trình <ChevronRight size={16}/></button>
      </div>
    </div>
  );
}
