export const cameraMockData = {
  recognizedPOI: {
    id: 'ngo-mon',
    name: 'Ngọ Môn',
    parentPOI: 'Đại Nội Huế',
    confidence: 94,
    desc: 'Công trình kiến trúc cung đình tiêu biểu của triều Nguyễn.',
    img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=400',
    audioContext: {
      title: 'VietVista AI đang kể...',
      text: 'Ngọ Môn là cổng chính phía Nam của Đại Nội, được xây dựng vào năm 1833 dưới triều Minh Mạng. Đây là biểu tượng quyền uy của triều Nguyễn, chỉ dành cho vua đi lại hoặc để tiếp đón các sứ thần ngoại quốc.',
      duration: '02:18'
    },
    nearby: [
      { id: 'thai-hoa', name: 'Điện Thái Hòa', distance: '150 m', time: '3 phút', type: 'Kiến trúc • Lịch sử', img: 'https://images.unsplash.com/photo-1542640244-7e672d6cb461?auto=format&fit=crop&q=80&w=150' },
      { id: 'the-mieu', name: 'Thế Miếu', distance: '350 m', time: '6 phút', type: 'Triều Nguyễn • Văn hóa', img: 'https://images.unsplash.com/photo-1610486001097-2a13dc8803cf?auto=format&fit=crop&q=80&w=150' },
      { id: 'hien-lam-cac', name: 'Hiển Lâm Các', distance: '420 m', time: '7 phút', type: 'Kiến trúc • Check-in', img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=150' },
    ],
    aiSuggestions: [
      'Ý nghĩa của hình rồng?',
      'Có hình ảnh lịch sử không?',
      'Xem vị trí trong cung điện',
      'So sánh với các triều đại khác'
    ]
  }
};
