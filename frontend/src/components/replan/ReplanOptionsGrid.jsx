import React from 'react';
import { Map, Clock, Navigation, Wallet } from 'lucide-react';
import { replanData } from '../../data/replanMockData';
import { useNavigate } from 'react-router-dom';

export default function ReplanOptionsGrid() {
  const { options, tripId } = replanData;
  const navigate = useNavigate();

  const handleApply = () => {
    // Navigate back to live trip simulating application
    navigate(`/trips/${tripId}/live`);
  };

  return (
    <div className="rp-options-section">
      <div className="rp-options-header">
        <div>
          <h2><div style={{width:'32px', height:'32px', background:'var(--emerald)', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center'}}><img src="https://api.dicebear.com/7.x/bottts/svg?seed=vietvista&backgroundColor=transparent" alt="AI" style={{width:'24px'}}/></div> Các phương án điều chỉnh</h2>
          <p>VietVista AI đã tạo 3 phương án dựa trên ưu tiên của bạn. Hãy chọn phương án phù hợp nhất.</p>
        </div>
        <button className="rp-btn-compare"><Map size={16}/> So sánh trên bản đồ</button>
      </div>
      
      <div className="rp-options-grid">
        {options.map(opt => (
          <div key={opt.id} className={`rp-opt-card ${opt.isRecommended ? 'recommended' : ''}`}>
            {opt.isRecommended && <div className="rp-opt-badge">✨ Đề xuất</div>}
            
            <div className="rp-opt-header">
              <div className="rp-opt-num">{opt.id}</div>
              <div>
                <h3>{opt.name}</h3>
                <p className="rp-opt-desc">{opt.desc}</p>
              </div>
            </div>
            
            <div className="rp-opt-metrics">
              <div className="rp-opt-metric">
                <h6><Clock size={12}/> Kết thúc ngày</h6>
                <p>{opt.metrics.end}</p>
                <span style={{color: opt.metrics.endDiff.includes('Trễ') ? '#E65100' : 'var(--emerald)'}}>{opt.metrics.endDiff}</span>
              </div>
              <div className="rp-opt-metric">
                <h6><Navigation size={12}/> Tổng di chuyển</h6>
                <p>{opt.metrics.travel}</p>
              </div>
              <div className="rp-opt-metric">
                <h6><Wallet size={12}/> Chi phí ước tính</h6>
                <p style={{color: opt.metrics.cost.includes('-') ? 'var(--emerald)' : '#B78726'}}>{opt.metrics.cost}</p>
              </div>
            </div>
            
            <div className="rp-opt-timeline">
              {opt.timelinePreview.map((node, i) => (
                <React.Fragment key={i}>
                  <div className={`rp-opt-node ${node.alert ? 'alert' : ''}`}>
                    <img src={`https://images.unsplash.com/photo-1542640244-7e672d6cb461?auto=format&fit=crop&q=80&w=100&h=60&sig=${i}`} alt={node.name}/>
                    <p>{node.time}</p>
                    <span>{node.name}</span>
                  </div>
                  {i < opt.timelinePreview.length - 1 && (
                    <div style={{color:'#ccc', alignSelf:'center', paddingBottom:'24px'}}>&rarr;</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <button className="rp-opt-btn" onClick={handleApply}>Chọn phương án này</button>
          </div>
        ))}
      </div>
    </div>
  );
}
