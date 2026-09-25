import React, { useState, useEffect } from 'react';
import { 
  Search, Bot, MapPin, Play, BookOpen, Map, ChevronRight, 
  RefreshCcw, Video, Maximize, Box, Mic, Heart, LayoutList
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../styles/explore.css';

// Fix leaflet default marker icons in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Mock Data for Interactive Map
const LOCATIONS = [
  { id: 'hanoi', name: 'Hà Nội', coords: [21.0285, 105.8542], img: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&q=80&w=800', badge: 'Thủ đô ngàn năm', desc: 'Trung tâm văn hóa, chính trị với 36 phố phường và nét cổ kính thiêng liêng.', stats: { stories: 42, poi: 120, video: 15, vr: 8 } },
  { id: 'halong', name: 'Hạ Long', coords: [20.9599, 107.0448], img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800', badge: 'Di sản Thiên nhiên', desc: 'Kỳ quan thiên nhiên thế giới với hàng ngàn hòn đảo đá vôi kỳ vĩ.', stats: { stories: 18, poi: 45, video: 12, vr: 5 } },
  { id: 'hue', name: 'Huế', coords: [16.4637, 107.5909], img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=800', badge: 'Di sản Văn hóa Thế giới', desc: 'Vùng đất của di sản, thơ ca và ẩm thực cung đình, nơi quá khứ và hiện tại giao hòa.', stats: { stories: 24, poi: 16, video: 8, vr: 3 } },
  { id: 'hoian', name: 'Hội An', coords: [15.8801, 108.3380], img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=800', badge: 'Phố cổ', desc: 'Thương cảng sầm uất thế kỷ 16-17, nay là điểm đến bình yên với những chiếc lồng đèn lung linh.', stats: { stories: 20, poi: 30, video: 10, vr: 4 } },
  { id: 'danang', name: 'Đà Nẵng', coords: [16.0544, 108.2022], img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=800', badge: 'Thành phố đáng sống', desc: 'Giao thoa giữa vẻ đẹp hiện đại và thiên nhiên hùng vĩ của biển, núi và sông.', stats: { stories: 25, poi: 40, video: 14, vr: 6 } },
  { id: 'phuquoc', name: 'Phú Quốc', coords: [10.2899, 103.9840], img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800', badge: 'Đảo Ngọc', desc: 'Thiên đường nghỉ dưỡng với những bãi biển trong xanh và hoàng hôn tuyệt đẹp.', stats: { stories: 15, poi: 25, video: 7, vr: 2 } }
];

// Map FlyTo Component
function MapController({ activeLoc }) {
  const map = useMap();
  useEffect(() => {
    if (activeLoc) {
      map.flyTo(activeLoc.coords, 7, { duration: 1.5 });
    }
  }, [activeLoc, map]);
  return null;
}

export default function ExplorePage() {
  const [activeLocId, setActiveLocId] = useState('hue');
  const activeLoc = LOCATIONS.find(loc => loc.id === activeLocId);

  // Helper to create custom icon based on active state
  const getCustomIcon = (loc, isActive) => {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div class="map-pin-hue ${isActive ? 'active-pin' : ''}">
               <div class="pin-dot" style="background: ${isActive ? '#e74c3c' : '#0b5d4b'}"></div>
               ${loc.name}
             </div>`,
      iconSize: isActive ? [100, 30] : [80, 30],
      iconAnchor: isActive ? [50, 15] : [40, 15]
    });
  };

  return (
    <div className="explore-container">
      <Header />

      {/* SECTION 1 — DISCOVERY BANNER */}
      <section className="discovery-banner">
        <div className="banner-content">
          <div className="banner-left">
            <h1>Khám phá Việt Nam<br />theo điều bạn tò mò</h1>
            <p>
              VietVista AI giúp bạn kết nối những câu chuyện, địa điểm, 
              văn hóa, ẩm thực và trải nghiệm trên khắp Việt Nam.
            </p>
            
            <div className="ai-search-box">
              <Search size={20} color="#666" />
              <input type="text" placeholder="Tôi muốn tìm một nơi có lịch sử lâu đời và đồ ăn ngon..." />
              <button className="ai-search-btn"><Search size={20} /></button>
            </div>
            
            <div className="category-chips">
              <span className="cat-chip"><LandmarkIcon /> Lịch sử</span>
              <span className="cat-chip"><BookOpenIcon /> Văn hóa</span>
              <span className="cat-chip"><UtensilsIcon /> Ẩm thực</span>
              <span className="cat-chip"><ArchIcon /> Kiến trúc</span>
              <span className="cat-chip"><HandIcon /> Làng nghề</span>
              <span className="cat-chip"><MountainIcon /> Thiên nhiên</span>
              <span className="cat-chip"><MapPin size={14} /> Di sản</span>
            </div>
          </div>
          
          <div className="banner-right">
            <div className="vietnam-map-stylized" style={{ height: '450px', width: '100%', maxWidth: '400px', borderRadius: '32px', overflow: 'hidden', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))', opacity: 0.9, position: 'relative' }}>
              <MapContainer center={[15.5, 106.0]} zoom={5.2} zoomControl={false} dragging={false} scrollWheelZoom={false} doubleClickZoom={false} style={{ height: '100%', width: '100%', background: '#eaf2ed' }}>
                <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png" opacity={0.5} />
                
                {/* Hanoi */}
                <Marker position={[21.0285, 105.8542]} icon={L.divIcon({ className: 'custom-div-icon', html: `<div style="display: flex; align-items: center; gap: 4px;"><img src="https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&q=80&w=100" style="width:32px;height:32px;border-radius:50%;border:2px solid white;box-shadow:0 4px 10px rgba(0,0,0,0.2)"/><span style="background:white;padding:2px 6px;border-radius:10px;font-size:10px;font-weight:600">Hà Nội</span></div>`, iconSize: [100, 32], iconAnchor: [16, 16] })} />
                
                {/* Halong */}
                <Marker position={[20.9599, 107.0448]} icon={L.divIcon({ className: 'custom-div-icon', html: `<div style="display: flex; align-items: center; gap: 4px;"><img src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=100" style="width:32px;height:32px;border-radius:50%;border:2px solid white;box-shadow:0 4px 10px rgba(0,0,0,0.2)"/><span style="background:white;padding:2px 6px;border-radius:10px;font-size:10px;font-weight:600">Hạ Long</span></div>`, iconSize: [100, 32], iconAnchor: [16, 16] })} />
                
                {/* Hue */}
                <Marker position={[16.4637, 107.5909]} icon={L.divIcon({ className: 'custom-div-icon', html: `<div style="display: flex; align-items: center; gap: 4px;"><img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=100" style="width:40px;height:40px;border-radius:50%;border:2px solid #0b5d4b;box-shadow:0 4px 10px rgba(0,0,0,0.2)"/><span style="background:#0b5d4b;color:white;padding:2px 6px;border-radius:10px;font-size:10px;font-weight:600">Huế</span></div>`, iconSize: [100, 40], iconAnchor: [20, 20] })} />
                
                {/* Hoi An */}
                <Marker position={[15.8801, 108.3380]} icon={L.divIcon({ className: 'custom-div-icon', html: `<div style="display: flex; align-items: center; gap: 4px; flex-direction: row-reverse;"><img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=100" style="width:32px;height:32px;border-radius:50%;border:2px solid white;box-shadow:0 4px 10px rgba(0,0,0,0.2)"/><span style="background:white;padding:2px 6px;border-radius:10px;font-size:10px;font-weight:600">Hội An</span></div>`, iconSize: [100, 32], iconAnchor: [84, 16] })} />
                
                {/* Danang */}
                <Marker position={[16.0544, 108.2022]} icon={L.divIcon({ className: 'custom-div-icon', html: `<div style="display: flex; align-items: center; gap: 4px;"><img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=100" style="width:32px;height:32px;border-radius:50%;border:2px solid white;box-shadow:0 4px 10px rgba(0,0,0,0.2)"/><span style="background:white;padding:2px 6px;border-radius:10px;font-size:10px;font-weight:600">Đà Nẵng</span></div>`, iconSize: [100, 32], iconAnchor: [16, 16] })} />
                
                {/* Phu Quoc */}
                <Marker position={[10.2899, 103.9840]} icon={L.divIcon({ className: 'custom-div-icon', html: `<div style="display: flex; align-items: center; gap: 4px; flex-direction: row-reverse;"><img src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=100" style="width:32px;height:32px;border-radius:50%;border:2px solid white;box-shadow:0 4px 10px rgba(0,0,0,0.2)"/><span style="background:white;padding:2px 6px;border-radius:10px;font-size:10px;font-weight:600">Phú Quốc</span></div>`, iconSize: [100, 32], iconAnchor: [84, 16] })} />
              </MapContainer>
            </div>
                 
            <div className="ai-card-float">
              <div className="ai-card-header">
                <Bot size={20} />
                <span>Chưa biết bắt đầu từ đâu?</span>
              </div>
              <p>Hãy để AI gợi ý những điểm đến phù hợp với sở thích của bạn.</p>
              <button className="btn-ai-suggest">Gợi ý cho tôi &rarr;</button>
            </div>
          </div>
        </div>
      </section>

      {/* STORY COLLECTION */}
      <section className="section-wrapper">
        <div className="explore-section-header">
          <div className="explore-section-title">
            <h2>Khám phá theo câu chuyện</h2>
            <p>Mỗi vùng đất đều có những câu chuyện riêng. Cùng VietVista AI khám phá chiều sâu văn hóa Việt Nam qua những hành trình kể chuyện đặc sắc.</p>
          </div>
          <button className="view-all-btn">Xem tất cả &rarr;</button>
        </div>
        
        <div className="story-grid">
          {[
            { img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=800', badge: 'Lịch sử', title: 'Dấu ấn triều Nguyễn ở Huế', desc: 'Hành trình ngược dòng thời gian, khám phá một triều đại đã định hình hồn Việt.', meta: '12 bài viết • 3 video • 6 địa điểm' },
            { img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=800', badge: 'Ẩm thực', title: 'Hành trình của phở Việt', desc: 'Từ gánh phở đường phố đến tinh hoa ẩm thực vươn tầm thế giới.', meta: '8 bài viết • 4 video • 5 địa điểm' },
            { img: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&q=80&w=800', badge: 'Thương cảng', title: 'Thương cảng Hội An xưa', desc: 'Câu chuyện về một thương cảng quốc tế sầm uất bên bờ sông Thu Bồn.', meta: '10 bài viết • 5 video • 5 địa điểm' },
            { img: 'https://images.unsplash.com/photo-1610486001097-2a13dc8803cf?auto=format&fit=crop&q=80&w=800', badge: 'Làng nghề', title: 'Những làng nghề còn giữ hồn Việt', desc: 'Gặp gỡ những nghệ nhân đang gìn giữ tinh hoa truyền thống qua bao thế hệ.', meta: '11 bài viết • 4 video • 7 địa điểm' }
          ].map((s, i) => (
            <div className="story-card" key={i}>
              <div className="story-img-wrap">
                <img src={s.img} alt={s.title} className="story-img" />
                <div className="story-badge">{s.badge}</div>
                <div className="story-btn-play"><ChevronRight size={18} /></div>
              </div>
              <div className="story-info">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <div className="story-meta">
                  <LayoutList size={14}/> {s.meta.split('•')[0]}
                  <Video size={14} style={{marginLeft: '4px'}}/> {s.meta.split('•')[1]}
                  <MapPin size={14} style={{marginLeft: '4px'}}/> {s.meta.split('•')[2]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE MAP SECTION */}
      <section className="section-wrapper" style={{paddingTop: 0}}>
        <div className="explore-section-header">
          <div className="explore-section-title">
            <h2>Khám phá bằng bản đồ</h2>
            <p>Tương tác với bản đồ thông minh để khám phá câu chuyện, địa điểm và trải nghiệm trên khắp Việt Nam.</p>
          </div>
        </div>
        
        <div className="map-section-grid">
          <div className="map-filters">
            <button className="map-filter-btn active"><Map size={18}/> Tất cả</button>
            <button className="map-filter-btn"><LandmarkIcon /> Di sản</button>
            <button className="map-filter-btn"><UtensilsIcon /> Ẩm thực</button>
            <button className="map-filter-btn"><BookOpen size={18} /> Văn hóa</button>
            <button className="map-filter-btn"><MountainIcon /> Thiên nhiên</button>
            <button className="map-filter-btn"><HandIcon /> Làng nghề</button>
            <button className="map-filter-btn"><Maximize size={18} /> Trải nghiệm 360°</button>
          </div>
          
          <div className="map-container" style={{ position: 'relative' }}>
            <MapContainer center={[16.4637, 107.5909]} zoom={6} zoomControl={false} style={{ height: '100%', width: '100%', background: '#0b4a3a' }}>
              <TileLayer 
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" 
                opacity={0.8}
              />
              <MapController activeLoc={activeLoc} />
              {LOCATIONS.map(loc => (
                <Marker 
                  key={loc.id} 
                  position={loc.coords} 
                  icon={getCustomIcon(loc, activeLocId === loc.id)} 
                  eventHandlers={{
                    click: () => setActiveLocId(loc.id)
                  }}
                />
              ))}
            </MapContainer>
            
            <div className="map-controls" style={{ zIndex: 1000, position: 'absolute', bottom: '16px', left: '16px' }}>
              <button>+</button>
              <button>-</button>
            </div>
          </div>
          
          <div className="region-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="region-card" style={{ flexShrink: 0 }}>
              <div className="rc-img" style={{backgroundImage: `url(${activeLoc.img})`}}>
                <div className="rc-badge">{activeLoc.badge}</div>
              </div>
              <div className="rc-content">
                <h3>{activeLoc.name}</h3>
                <p>{activeLoc.desc}</p>
                <div className="rc-stats">
                  <div className="rc-stat"><strong>{activeLoc.stats.stories}</strong><span>câu chuyện</span></div>
                  <div className="rc-stat"><strong>{activeLoc.stats.poi}</strong><span>địa điểm (POI)</span></div>
                  <div className="rc-stat"><strong>{activeLoc.stats.video}</strong><span>video</span></div>
                  <div className="rc-stat"><strong>{activeLoc.stats.vr}</strong><span>trải nghiệm 360°</span></div>
                </div>
                <button className="btn-rc">Khám phá {activeLoc.name} trên bản đồ &rarr;</button>
              </div>
            </div>

            <div className="location-list" style={{ overflowY: 'auto', flex: 1, paddingRight: '4px' }}>
              {LOCATIONS.map(loc => (
                <div 
                  key={loc.id}
                  className={`loc-list-item ${activeLocId === loc.id ? 'active' : ''}`}
                  onClick={() => setActiveLocId(loc.id)}
                >
                  <img src={loc.img} alt={loc.name} />
                  <span>{loc.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MULTIMODAL DISCOVERY */}
      <section className="section-wrapper" style={{paddingTop: 0}}>
        <div className="explore-section-header">
          <div className="explore-section-title">
            <h2>Khám phá đa phương thức</h2>
            <p>Trải nghiệm Việt Nam sống động qua nhiều định dạng nội dung, được tuyển chọn và gợi ý bởi AI.</p>
          </div>
          <button className="view-all-btn">Xem tất cả &rarr;</button>
        </div>
        
        <div className="multimodal-grid">
          <div className="mm-card" style={{gridRow: 'span 2'}}>
            <img src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800" alt="Hạ Long" />
            <div className="mm-overlay">
              <div className="mm-badge"><Video size={14}/> Video</div>
              <div className="mm-play-btn"><Play fill="white" /></div>
              <div>
                <h3 className="mm-title">Vịnh Hạ Long kỳ quan<br/>thiên nhiên thế giới</h3>
                <span style={{fontSize: '0.8rem', opacity: 0.8}}>12:36</span>
              </div>
            </div>
          </div>
          
          <div className="mm-card">
            <img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=800" alt="Đại Nội" />
            <div className="mm-overlay">
              <div className="mm-badge"><Maximize size={14}/> 360°</div>
              <h3 className="mm-title">Tham quan Đại Nội Huế<br/>với trải nghiệm 360°</h3>
            </div>
          </div>
          
          <div className="mm-card">
            <img src="https://images.unsplash.com/photo-1542640244-7e672d6cb461?auto=format&fit=crop&q=80&w=800" alt="3D" />
            <div className="mm-overlay">
              <div className="mm-badge"><Box size={14}/> 3D</div>
              <h3 className="mm-title">Khám phá mô hình 3D<br/>Chùa Một Cột</h3>
            </div>
          </div>

          <div className="mm-card">
            <img src="https://images.unsplash.com/photo-1540306161986-7e50b8ef4d48?auto=format&fit=crop&q=80&w=800" alt="Audio" />
            <div className="mm-overlay" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))'}}>
              <div className="mm-badge"><Mic size={14}/> Audio Story</div>
              <div>
                <h3 className="mm-title">Nhã nhạc cung đình Huế</h3>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', fontSize: '0.8rem'}}>
                  <Play size={16} /> <span>••••••••••••••••</span> 08:24
                </div>
              </div>
            </div>
          </div>

          <div className="mm-card" style={{background: '#fff', color: '#333'}}>
            <img src="https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&q=80&w=800" alt="Article" style={{height: '60%'}}/>
            <div style={{padding: '16px'}}>
              <div className="mm-badge" style={{background: '#f0f0f0', color: '#666', position: 'absolute', top: '12px', left: '12px'}}><BookOpen size={14}/> Bài viết</div>
              <h3 className="mm-title" style={{color: '#1a1a1a', margin: '8px 0'}}>Mùa vàng Hoàng Su Phì</h3>
              <p style={{fontSize: '0.85rem', color: '#666', margin: '0 0 8px 0'}}>Vẻ đẹp của những thửa ruộng bậc thang nơi địa đầu Tổ quốc.</p>
              <span style={{fontSize: '0.75rem', color: '#999'}}>6 phút đọc</span>
            </div>
          </div>
        </div>
      </section>

      {/* HIDDEN DISCOVERY */}
      <section className="section-wrapper" style={{paddingTop: 0}}>
        <div className="explore-section-header">
          <div className="explore-section-title">
            <h2>Những điều ít người biết</h2>
            <p>Khám phá những vùng đất, câu chuyện và trải nghiệm đặc biệt, ít người biết nhưng đầy giá trị.</p>
          </div>
          <button className="view-all-btn">Xem tất cả &rarr;</button>
        </div>
        
        <div className="hidden-grid">
          {[
            { img: 'https://images.unsplash.com/photo-1542640244-7e672d6cb461?auto=format&fit=crop&q=80&w=500', name: 'Hang Tiên Sơn', loc: 'Quảng Bình', desc: 'Hang động kỳ ảo ít người biết' },
            { img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=500', name: 'Làng cổ Phước Tích', loc: 'Thừa Thiên Huế', desc: 'Ngôi làng hơn 500 năm tuổi' },
            { img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=500', name: 'Bánh canh Nam Phổ', loc: 'Huế', desc: 'Tinh hoa ẩm thực dân dã' },
            { img: 'https://images.unsplash.com/photo-1610486001097-2a13dc8803cf?auto=format&fit=crop&q=80&w=500', name: 'Làng dệt thổ cẩm Zèng', loc: 'Thừa Thiên Huế', desc: 'Giữ hồn diệt truyền thống' },
            { img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=500', name: 'Bãi Môn', loc: 'Phú Yên', desc: 'Bình minh đẹp như tranh vẽ' },
            { img: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&q=80&w=500', name: 'Thác Dray Nur', loc: 'Đắk Lắk', desc: 'Vẻ đẹp hoang sơ đại ngàn' }
          ].map((h, i) => (
            <div className="hidden-card" key={i}>
              <div className="hidden-img" style={{backgroundImage: `url(${h.img})`}}>
                <Heart size={16} className="like-icon" />
              </div>
              <div className="hidden-info">
                <h5>{h.name}</h5>
                <span>{h.loc}</span>
                <p>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI DISCOVERY JOURNEY */}
      <section className="ai-journey-section">
        <div className="ai-j-bg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=1000")'}}></div>
        
        <div className="ai-j-content">
          <div className="ai-j-header">
            <div>
              <h2>Hành trình khám phá cùng AI</h2>
              <p>Chỉ cần một điều bạn tò mò, AI sẽ kết nối những điểm đến, câu chuyện và trải nghiệm liên quan thành một hành trình khám phá đầy cảm hứng.</p>
            </div>
            <button className="btn-ai-reload"><RefreshCcw size={16} /> Thử chủ đề khác</button>
          </div>
          
          <div className="ai-path">
            <div className="ai-node" style={{background: 'rgba(255,255,255,0.2)'}}>
              <Bot size={20} />
              <div className="ai-node-text">
                <strong>Ví dụ:</strong>
                <span>Khám phá triều Nguyễn</span>
              </div>
            </div>
            <ChevronRight className="ai-arrow" />
            
            <div className="ai-node">
              <img src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=100" className="ai-node-img" alt="Huế" />
              <div className="ai-node-text">
                <strong>Huế triều Nguyễn</strong>
                <span>Bối cảnh lịch sử</span>
              </div>
            </div>
            <ChevronRight className="ai-arrow" />
            
            <div className="ai-node">
              <img src="https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&q=80&w=100" className="ai-node-img" alt="Ngọ Môn" />
              <div className="ai-node-text">
                <strong>Ngọ Môn</strong>
                <span>Biểu tượng quyền lực</span>
              </div>
            </div>
            <ChevronRight className="ai-arrow" />
            
            <div className="ai-node">
              <img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=100" className="ai-node-img" alt="Đại Nội" />
              <div className="ai-node-text">
                <strong>Đại Nội</strong>
                <span>Kiến trúc cung đình</span>
              </div>
            </div>
            <ChevronRight className="ai-arrow" />
            
            <div className="ai-node">
              <img src="https://images.unsplash.com/photo-1540306161986-7e50b8ef4d48?auto=format&fit=crop&q=80&w=100" className="ai-node-img" alt="Nhã nhạc" />
              <div className="ai-node-text">
                <strong>Nhã nhạc cung đình</strong>
                <span>Di sản phi vật thể</span>
              </div>
            </div>
            
            <button className="ai-j-btn">Khám phá hành trình này &rarr;</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Simple fallback SVGs for icons not directly available in lucide-react with the exact requested visual weight
const LandmarkIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22v-4"/><path d="M21 22v-4"/><path d="M12 2v20"/><path d="M3 7h18"/><path d="M3 12h18"/><path d="M3 17h18"/><path d="m12 2 9 5H3z"/></svg>;
const BookOpenIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const UtensilsIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>;
const ArchIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21V10a7 7 0 0 1 14 0v11"/><path d="M9 21v-8a3 3 0 1 1 6 0v8"/></svg>;
const HandIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>;
const MountainIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>;
