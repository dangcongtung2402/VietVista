export const mockTrip = {
  id: 'trip-001',
  title: 'Chuyến đi của bạn',
  destinations: 'Huế – Hội An – Đà Nẵng',
  startDate: '15/10',
  endDate: '18/10',
  durationDays: 4,
  pax: 2,
  budget: {
    estimated: 6.8,
    total: 8.0,
    currency: 'M',
    formattedEstimated: '6.800.000đ',
    formattedTotal: '8.000.000đ',
    percent: 85
  },
  aiMatch: 91,
  dailyStats: [
    { day: 1, date: '15/10', loc: 'Huế', cost: '6.000.000đ', time: '8h20', distance: '42km', match: 91, activitiesCount: 4 },
    { day: 2, date: '16/10', loc: 'Huế', cost: '6.000.000đ', time: '8h20', distance: '42km', match: 91, activitiesCount: 4 },
    { day: 3, date: '17/10', loc: 'Hội An', cost: '5.200.000đ', time: '6h30', distance: '12km', match: 88, activitiesCount: 3 },
    { day: 4, date: '18/10', loc: 'Đà Nẵng', cost: '7.500.000đ', time: '9h00', distance: '35km', match: 95, activitiesCount: 5 }
  ],
  timeline: {
    2: [
      {
        id: 'act-1',
        timeStart: '08:00',
        timeEnd: '09:30',
        title: 'Đại Nội Huế',
        tags: ['Lịch sử', 'Kiến trúc'],
        desc: 'Quần thể di tích Hoàng thành với hơn 200 năm lịch sử triều Nguyễn.',
        duration: '1h30',
        nextTransit: 'Di chuyển 15 phút đến điểm tiếp theo',
        locked: true,
        img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=200',
        coords: [16.468, 107.577]
      },
      {
        id: 'act-2',
        timeStart: '11:30',
        timeEnd: '12:30',
        title: 'Ăn trưa – Bún bò Huế',
        tags: ['Ẩm thực'],
        desc: 'Thưởng thức đặc sản trứ danh với hương vị đậm đà xứ Huế.',
        duration: '1h00',
        nextTransit: 'Di chuyển 10 phút đến điểm tiếp theo',
        locked: false,
        img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=200',
        coords: [16.465, 107.585]
      },
      {
        id: 'act-3',
        timeStart: '11:30', // From screenshot, this has a time overlap/bug in UI but let's follow the screenshot: 11:30 -> 14:30
        timeEnd: '14:30',
        title: 'Chùa Thiên Mụ',
        tags: ['Lịch sử', 'Tâm linh'],
        desc: 'Ngôi chùa cổ biểu tượng của Huế, nằm bên dòng sông Hương thơ mộng.',
        duration: '1h00',
        nextTransit: 'Di chuyển 35 phút đến điểm tiếp theo',
        locked: false,
        img: 'https://images.unsplash.com/photo-1542640244-7e672d6cb461?auto=format&fit=crop&q=80&w=200',
        coords: [16.453, 107.545]
      },
      {
        id: 'act-4',
        timeStart: '13:45',
        timeEnd: '17:00',
        title: 'Lăng Khải Định',
        tags: ['Lịch sử', 'Kiến trúc'],
        desc: 'Công trình độc đáo kết hợp kiến trúc Á – Âu, nổi bật với nghệ thuật khảm sứ.',
        duration: '1h15',
        nextTransit: 'Di chuyển 2h đến điểm tiếp theo',
        locked: false,
        img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=200',
        coords: [16.398, 107.590]
      },
      {
        id: 'act-5',
        timeStart: '19:00',
        timeEnd: '21:00',
        title: 'Phố cổ Hội An',
        tags: ['Văn hóa', 'Ẩm thực', 'Mua sắm'],
        desc: 'Dạo bước phố đèn lồng, thưởng thức ẩm thực và không khí cổ kính.',
        duration: '2h00',
        nextTransit: '',
        locked: false,
        img: 'https://images.unsplash.com/photo-1610486001097-2a13dc8803cf?auto=format&fit=crop&q=80&w=200',
        coords: [15.880, 108.338]
      }
    ]
  }
};
