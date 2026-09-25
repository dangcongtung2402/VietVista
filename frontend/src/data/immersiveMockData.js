export const immersiveData = {
  poiId: 'hue-imperial-city',
  name: 'Đại Nội Huế',
  
  areas: [
    { id: 'ngo-mon', name: 'Ngọ Môn', img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=400' },
    { id: 'thai-hoa', name: 'Điện Thái Hòa', img: 'https://images.unsplash.com/photo-1542640244-7e672d6cb461?auto=format&fit=crop&q=80&w=400' },
    { id: 'the-mieu', name: 'Thế Miếu', img: 'https://images.unsplash.com/photo-1610486001097-2a13dc8803cf?auto=format&fit=crop&q=80&w=400' },
    { id: 'hien-lam-cac', name: 'Hiển Lâm Các', img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=400' },
    { id: 'cung-dien-tho', name: 'Cung Diên Thọ', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=400' },
    { id: 'thai-binh-lau', name: 'Thái Bình Lâu', img: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&q=80&w=400' },
  ],

  hotspots: {
    'ngo-mon': [
      { id: 'lau-ngu-phung', label: 'Lầu Ngũ Phụng', x: 55, y: 30, active: true, desc: 'Phần kiến trúc nằm trên nền đài Ngọ Môn, biểu tượng quyền uy của triều Nguyễn.' },
      { id: 'tuong-thanh', label: 'Tường thành', x: 25, y: 55, active: false },
      { id: 'ho-thai-dich', label: 'Hồ Thái Dịch', x: 75, y: 65, active: false }
    ]
  },

  aiContext: {
    'ngo-mon': {
      title: 'Ngọ Môn',
      tags: ['Kiến trúc', 'Lịch sử', 'Triều Nguyễn'],
      story: 'Ngọ Môn là cổng chính phía Nam của Đại Nội, được xây dựng vào năm 1833 dưới triều Minh Mạng. Đây là biểu tượng quyền uy, chỉ dành cho vua và các nghi lễ quan trọng.',
      audio: 'Nghe thuyết minh (1:28)',
      media: [
        { type: 'image', label: 'Ảnh hiện tại', img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=200' },
        { type: 'image', label: 'Ảnh lịch sử', img: 'https://images.unsplash.com/photo-1610486001097-2a13dc8803cf?auto=format&fit=crop&q=80&w=200&grayscale=1' },
        { type: 'video', label: 'Video ngắn', img: 'https://images.unsplash.com/photo-1542640244-7e672d6cb461?auto=format&fit=crop&q=80&w=200' },
        { type: '3d', label: 'Mô hình 3D', img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=200' }
      ],
      aiQuestions: [
        'Tại sao Ngọ Môn có 5 cửa?',
        'Ý nghĩa của Lầu Ngũ Phụng?',
        'So sánh ảnh xưa và nay',
        'Xem cấu trúc 3D của Ngọ Môn'
      ],
      quickPrompts: ['Phần này có gì đặc biệt?', 'Kể câu chuyện lịch sử', 'Có sự kiện nào diễn ra ở đây?', 'Xem góc khác']
    }
  },

  guidedTour: [
    { id: 1, name: 'Ngọ Môn', duration: '~ 2 phút', desc: 'Biểu tượng quyền uy của triều Nguyễn.', img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: 'Điện Thái Hòa', duration: '~ 2 phút', desc: 'Trung tâm nghi lễ của triều đình.', img: 'https://images.unsplash.com/photo-1542640244-7e672d6cb461?auto=format&fit=crop&q=80&w=200' },
    { id: 3, name: 'Thế Miếu', duration: '~ 2 phút', desc: 'Nơi thờ các vị vua triều Nguyễn.', img: 'https://images.unsplash.com/photo-1610486001097-2a13dc8803cf?auto=format&fit=crop&q=80&w=200' },
    { id: 4, name: 'Hiển Lâm Các', duration: '~ 2 phút', desc: 'Công trình kiến trúc độc đáo.', img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=200' },
    { id: 5, name: 'Cung Diên Thọ', duration: '~ 2 phút', desc: 'Không gian sống của Hoàng Thái Hậu.', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=200' },
  ],

  tripDecision: {
    day: 'ngày 2',
    time: '08:00 - 10:30 (2.5 giờ)',
    cost: '200.000đ / người',
    commute: '~ 18 phút (3.4 km)'
  }
};
