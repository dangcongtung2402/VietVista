import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function AIInsightPanel() {
  return (
    <div className="ai-insight-card">
      <div className="insight-header">
        <Lightbulb size={18} /> Gợi ý thông minh từ VietVista AI
      </div>
      <div className="insight-body">
        <div className="insight-icon">
          <img src="https://api.dicebear.com/7.x/bottts/svg?seed=vietvista&backgroundColor=transparent" alt="AI" style={{width:'32px'}}/>
        </div>
        <div className="insight-text">
          <p>
            <strong>VietVista AI phát hiện:</strong><br />
            Nếu đổi thứ tự Chùa Thiên Mụ và Lăng Khải Định, bạn có thể tiết kiệm <strong>32 phút</strong> di chuyển.
          </p>
          <div className="insight-actions">
            <button className="btn-ai-apply">Áp dụng</button>
            <button className="btn-ai-reject">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  );
}
