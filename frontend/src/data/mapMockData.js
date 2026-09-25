export const POIs = [
  { id: 'hanoi', name: 'Hà Nội', region: 'Bắc Bộ', coords: [21.0285, 105.8542], img: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&q=80&w=200', desc: 'Thủ đô ngàn năm văn hiến với phố cổ và di sản.', stats: { stories: 42, poi: 120, video: 15, vr: 8 } },
  { id: 'halong', name: 'Hạ Long', region: 'Bắc Bộ', coords: [20.9599, 107.0448], img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=200', desc: 'Kỳ quan thiên nhiên thế giới tuyệt đẹp.', stats: { stories: 18, poi: 45, video: 12, vr: 5 } },
  { id: 'ninhbinh', name: 'Ninh Bình', region: 'Bắc Bộ', coords: [20.2539, 105.9750], img: 'https://images.unsplash.com/photo-1610486001097-2a13dc8803cf?auto=format&fit=crop&q=80&w=200', desc: 'Vịnh Hạ Long trên cạn với di sản Tràng An.', stats: { stories: 15, poi: 30, video: 5, vr: 2 } },
  { id: 'hue', name: 'Huế', region: 'Miền Trung', coords: [16.4637, 107.5909], img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=200', desc: 'Cố đô trầm mặc với những công trình kiến trúc cung đình, văn hóa đặc sắc và ẩm thực tinh tế.', stats: { stories: 24, poi: 16, video: 8, vr: 3 } },
  { id: 'danang', name: 'Đà Nẵng', region: 'Miền Trung', coords: [16.0544, 108.2022], img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=200', desc: 'Thành phố đáng sống với biển xanh và núi non.', stats: { stories: 25, poi: 40, video: 14, vr: 6 } },
  { id: 'hoian', name: 'Hội An', region: 'Miền Trung', coords: [15.8801, 108.3380], img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=200', desc: 'Phố cổ êm đềm với đèn lồng và kiến trúc cổ.', stats: { stories: 20, poi: 30, video: 10, vr: 4 } },
  { id: 'dalat', name: 'Đà Lạt', region: 'Nam Bộ', coords: [11.9404, 108.4583], img: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&q=80&w=200', desc: 'Thành phố ngàn hoa với khí hậu ôn đới mát mẻ.', stats: { stories: 12, poi: 25, video: 4, vr: 1 } },
  { id: 'hcm', name: 'TP.HCM', region: 'Nam Bộ', coords: [10.8231, 106.6297], img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=200', desc: 'Trung tâm kinh tế sầm uất và năng động.', stats: { stories: 35, poi: 150, video: 20, vr: 10 } },
  { id: 'phuquoc', name: 'Phú Quốc', region: 'Nam Bộ', coords: [10.2899, 103.9840], img: 'https://images.unsplash.com/photo-1610486001097-2a13dc8803cf?auto=format&fit=crop&q=80&w=200', desc: 'Đảo ngọc thiên đường nghỉ dưỡng.', stats: { stories: 15, poi: 25, video: 7, vr: 2 } }
];

export const regionalCards = [
  { id: 'bac-bo', title: 'Bắc Bộ', desc: 'Văn hóa ngàn năm, thiên nhiên hùng vĩ', tags: ['Hà Nội', 'Ninh Bình', 'Hạ Long', 'Sapa'], img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=600' },
  { id: 'mien-trung', title: 'Miền Trung', desc: 'Di sản đặc sắc, biển xanh nắng vàng', tags: ['Huế', 'Đà Nẵng', 'Hội An', 'Quảng Bình'], img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=600' },
  { id: 'nam-bo', title: 'Nam Bộ', desc: 'Sông nước hiền hòa, nhịp sống sôi động', tags: ['TP.HCM', 'Đà Lạt', 'Phú Quốc', 'Cần Thơ'], img: 'https://images.unsplash.com/photo-1610486001097-2a13dc8803cf?auto=format&fit=crop&q=80&w=600' }
];

export const aiSuggestions = [
  { id: 's1', tag: 'Gợi ý nổi bật', title: 'Cụm di sản miền Trung', meta: 'Huế • Đà Nẵng • Hội An', tags: ['Phù hợp với lịch sử + văn hóa + ẩm thực'], desc: 'Khám phá hành trình di sản đặc sắc với những công trình lịch sử, phố cổ và ẩm thực miền Trung tinh tế.', img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=600' },
  { id: 's2', tag: 'Gợi ý cho bạn', title: 'Hành trình ẩm thực Hà Nội', meta: 'Hà Nội • Phố cổ • Ẩm thực đường phố', tags: ['Phù hợp với ẩm thực + văn hóa'], desc: 'Thưởng thức tinh hoa ẩm thực Hà Nội qua những món ăn đặc trưng và câu chuyện văn hóa lâu đời.', img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=600' },
  { id: 's3', tag: 'Xu hướng hiện nay', title: 'Thiên nhiên & non nước Ninh Bình', meta: 'Ninh Bình • Tràng An • Tam Cốc', tags: ['Phù hợp với thiên nhiên + khám phá'], desc: 'Trải nghiệm cảnh quan hùng vĩ, hang động kỳ thú và những làng quê yên bình.', img: 'https://images.unsplash.com/photo-1610486001097-2a13dc8803cf?auto=format&fit=crop&q=80&w=600' }
];
