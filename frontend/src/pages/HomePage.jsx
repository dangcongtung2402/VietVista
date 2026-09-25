import React from 'react';
import { 
  Search, Map, Calendar, Compass, MessageCircle, Send, Star, Heart, 
  MapPin, Clock, Navigation, User, Landmark, Utensils, Mountain
} from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../styles/home.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <Header />

      {/* HERO SECTION */}
      <section className="hero-section" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=2070")' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-subtitle-top">VIETVISTA AI</div>
            <h1 className="hero-title">Việt Nam<br />Hơn cả một chuyến đi</h1>
            <p className="hero-desc">
              Cùng VietVista AI khám phá những vùng đất tuyệt đẹp,<br />
              trải nghiệm văn hóa độc đáo và tạo nên hành trình của riêng bạn<br />
              với sức mạnh của trí tuệ nhân tạo.
            </p>
            
            <div className="hero-search-box">
              <MapPin size={24} color="#666" />
              <input type="text" placeholder="Bạn muốn đi đâu?" />
              <button className="hero-search-btn"><Search size={20} /></button>
            </div>
            
            <div className="hero-tags">
              <span className="hero-tag">Hà Nội</span>
              <span className="hero-tag">Đà Nẵng</span>
              <span className="hero-tag">Hội An</span>
              <span className="hero-tag">Huế</span>
              <span className="hero-tag">Ninh Bình</span>
              <span className="hero-tag">Phú Quốc</span>
              <span className="hero-tag">Sapa</span>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">63</span>
                <span className="stat-label">Tỉnh thành</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">1000+</span>
                <span className="stat-label">Điểm đến hấp dẫn</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">10M+</span>
                <span className="stat-label">Du khách tin tưởng</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">🏆</span>
                <span className="stat-label">Top điểm đến<br/>hàng đầu châu Á</span>
              </div>
            </div>
          </div>
          
          <div className="hero-ai-widget">
            <div className="ai-header">
              <div className="ai-bot-info">
                <div className="ai-avatar"><User size={24} /></div>
                <div className="ai-bot-text">
                  <h4>VietVista AI</h4>
                  <span>Sẵn sàng hỗ trợ bạn</span>
                </div>
              </div>
              <div style={{color: '#ccc'}}>•••</div>
            </div>
            <div className="ai-message">
              <strong>Xin chào! 👋</strong><br />
              Tôi là VietVista AI, trợ lý du lịch thông minh dành cho bạn.<br />
              Bạn muốn khám phá điều gì hôm nay?
            </div>
            <div className="ai-suggestions">
              <button className="ai-suggestion-btn"><MapPin size={16} /> Gợi ý điểm đến</button>
              <button className="ai-suggestion-btn"><Calendar size={16} /> Lên lịch trình</button>
              <button className="ai-suggestion-btn"><MessageCircle size={16} /> Chi phí chuyến đi</button>
              <button className="ai-suggestion-btn"><Navigation size={16} /> Khám phá 360°</button>
            </div>
            <div className="ai-input-box">
              <input type="text" placeholder="Nhập câu hỏi của bạn..." />
              <button><Send size={20} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES SECTION */}
      <section className="experiences-section">
        <div className="section-header">
          <div className="section-tagline">KHÁM PHÁ VIỆT NAM</div>
          <h2 className="section-title">Những trải nghiệm đáng nhớ</h2>
          <p className="section-desc">Việt Nam muôn màu với những câu chuyện, hương vị và cảnh sắc tuyệt vời đang chờ bạn khám phá</p>
        </div>
        
        <div className="experiences-grid">
          <div className="experience-card" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&q=80&w=2070")'}}>
            <div className="experience-content">
              <div className="exp-icon"><Landmark color="white" /></div>
              <h3>Lịch sử & Văn hóa</h3>
              <p>Hành trình ngược dòng thời gian, khám phá di sản và những câu chuyện hào hùng.</p>
              <button className="exp-btn">Khám phá ngay &rarr;</button>
            </div>
          </div>
          <div className="experience-card" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=2070")'}}>
            <div className="experience-content">
              <div className="exp-icon"><Utensils color="white" /></div>
              <h3>Ẩm thực</h3>
              <p>Thưởng thức hương vị đặc sắc từ Bắc vào Nam, tinh hoa ẩm thực Việt.</p>
              <button className="exp-btn">Khám phá ngay &rarr;</button>
            </div>
          </div>
          <div className="experience-card" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=2102")'}}>
            <div className="experience-content">
              <div className="exp-icon"><Mountain color="white" /></div>
              <h3>Thiên nhiên & Cảnh quan</h3>
              <p>Chiêm ngưỡng những kỳ quan thiên nhiên tuyệt đẹp, từ biển đảo đến núi rừng.</p>
              <button className="exp-btn">Khám phá ngay &rarr;</button>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section className="destinations-section">
        <div className="dest-header-row">
          <div className="dest-header-left">
            <h2>Điểm đến nổi bật</h2>
            <p>Những địa danh được yêu thích nhất, được gợi ý bởi VietVista AI</p>
          </div>
          <button className="view-all-btn">Xem tất cả &rarr;</button>
        </div>
        
        <div className="dest-grid">
          {[
            { name: 'Hà Nội', desc: 'Nghìn năm văn hiến', rate: '4.8', views: '12.3K', img: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&q=80&w=800' },
            { name: 'Hạ Long', desc: 'Kỳ quan thiên nhiên', rate: '4.9', views: '18.6K', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800' },
            { name: 'Hội An', desc: 'Phố cổ bình yên', rate: '4.7', views: '15.1K', img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=800' },
            { name: 'Huế', desc: 'Cố đô trầm mặc', rate: '4.8', views: '11.4K', img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=800' },
            { name: 'Đà Nẵng', desc: 'Thành phố đáng sống', rate: '4.6', views: '14.2K', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800' },
            { name: 'Ninh Bình', desc: 'Non nước hữu tình', rate: '4.7', views: '9.8K', img: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&q=80&w=800' }
          ].map((dest, i) => (
            <div className="dest-card" key={i}>
              <div className="dest-img" style={{backgroundImage: `url(${dest.img})`}}>
                <button className="like-btn"><Heart size={16} color="#666" /></button>
              </div>
              <div className="dest-info">
                <h4>{dest.name}</h4>
                <p>{dest.desc}</p>
                <div className="dest-stats">
                  <div className="dest-rating"><Star size={14} fill="#f5b041" color="#f5b041" /> {dest.rate}</div>
                  <div>{dest.views} lượt xem</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLANNING SECTION */}
      <section className="planning-section" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=2070")'}}>
        <div className="planning-overlay"></div>
        <div className="planning-content">
          <div style={{fontStyle: 'italic', marginBottom: '8px'}}>Cùng VietVista AI</div>
          <h2 className="planning-title">Lên kế hoạch chuyến đi hoàn hảo</h2>
          <div className="planning-features">
            <div className="p-feature"><Star size={18} /> Cá nhân hóa theo sở thích</div>
            <div className="p-feature"><Clock size={18} /> Tối ưu chi phí & thời gian</div>
            <div className="p-feature"><Compass size={18} /> Khám phá 360° trước chuyến đi</div>
          </div>
          <button className="btn-primary" style={{background: 'white', color: '#0b4a3a', borderRadius: '30px', padding: '12px 32px'}}>Bắt đầu ngay &rarr;</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
