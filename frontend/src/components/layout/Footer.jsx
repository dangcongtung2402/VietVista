import React from 'react';
import { Heart } from 'lucide-react';

const FacebookIcon = () => (<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-icon"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>);
const YoutubeIcon = () => (<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-icon"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>);
const InstagramIcon = () => (<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
const TwitterIcon = () => (<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="social-icon"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>VietVista AI</h3>
          <p className="footer-desc">Nền tảng du lịch thông minh ứng dụng AI,<br/>đồng hành cùng bạn trên mọi hành trình khám phá Việt Nam.</p>
          <div className="social-links">
            <FacebookIcon />
            <YoutubeIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        <div className="footer-col">
          <h4>Khám phá</h4>
          <ul>
            <li><a href="#">Điểm đến</a></li>
            <li><a href="#">Trải nghiệm 360°</a></li>
            <li><a href="#">Ẩm thực</a></li>
            <li><a href="#">Văn hóa - Lịch sử</a></li>
            <li><a href="#">Gợi ý của AI</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Hỗ trợ</h4>
          <ul>
            <li><a href="#">Trung tâm trợ giúp</a></li>
            <li><a href="#">Liên hệ</a></li>
            <li><a href="#">Câu hỏi thường gặp</a></li>
            <li><a href="#">Điều khoản sử dụng</a></li>
            <li><a href="#">Chính sách bảo mật</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Tải ứng dụng</h4>
          <p style={{fontSize: '0.9rem', marginBottom: '16px'}}>Trải nghiệm VietVista AI trên điện thoại để tiện lợi hơn trong chuyến đi của bạn.</p>
          <div className="app-buttons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="app-btn" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="app-btn" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2024 VietVista AI. All rights reserved.</div>
        <div>Việt Nam đẹp hơn khi bạn khám phá <Heart size={14} fill="white" style={{display: 'inline', marginLeft: '4px'}}/></div>
      </div>
    </footer>
  );
}
