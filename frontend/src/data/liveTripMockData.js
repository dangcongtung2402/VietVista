export const liveTripData = {
  tripId: 'hue-central-2026',
  title: 'Hành trình Huế',
  dateRange: '10 - 13 Tháng 4, 2026',
  duration: '4 ngày 3 đêm',
  currentDay: 2,
  totalDays: 4,
  completedPOIs: 5,
  totalPOIs: 8,
  aiMatch: 93,
  status: 'Đang diễn ra',
  heroImg: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=400',
  
  weather: {
    temp: '32°C',
    condition: 'Trời quang',
    location: 'Huế'
  },

  timeline: [
    { id: 1, name: 'Đại Nội Huế', time: '08:00 - 10:30', status: 'CURRENT', img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&q=80&w=150' },
    { id: 2, name: 'Chùa Thiên Mụ', time: '10:50 - 12:00', status: 'NEXT', distance: '3.4 km', eta: '12 phút', img: 'https://images.unsplash.com/photo-1542640244-7e672d6cb461?auto=format&fit=crop&q=80&w=150', tags: ['Văn hóa', 'Tâm linh', 'Kiến trúc'], rating: 4.7, reviews: '12.6K', expectedArrival: '10:50', durationEst: '1 - 1.5 giờ', price: 'Miễn phí' },
    { id: 3, name: 'Chợ Đông Ba', time: '13:00 - 15:00', status: 'UPCOMING', distance: '2.1 km', eta: '8 phút', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=150' },
    { id: 4, name: 'Lăng Khải Định', time: '15:30 - 17:30', status: 'UPCOMING', distance: '3.1 km', eta: '45 phút', img: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=150' }
  ],

  mapConfig: {
    center: [16.4675, 107.5702], // Huế
    zoom: 14,
    currentLocation: [16.4675, 107.5702], // Near Đại Nội
    nextLocation: [16.4534, 107.5372], // Thiên Mụ approx
  },

  aiContext: {
    message: 'Bạn đang trên đường rời Đại Nội Huế. Để tiết kiệm thời gian, bạn có thể ghé Chùa Thiên Mụ vào buổi sáng. Đây là một địa điểm rất phù hợp với sở thích lịch sử và văn hóa của bạn.',
    time: '10:24',
    suggestions: [
      'Tại sao chùa Thiên Mụ lại nổi tiếng?',
      'Có gì đặc biệt tại đây?',
      'Chụp ảnh đẹp nhất ở đâu?',
      'Có món ăn nào gần đây?'
    ],
    media: {
      type: 'video',
      title: 'Chùa Thiên Mụ – Biểu tượng tâm linh trên sông Hương',
      duration: '01:45',
      img: 'https://images.unsplash.com/photo-1542640244-7e672d6cb461?auto=format&fit=crop&q=80&w=300'
    },
    proactiveTip: 'Bạn có thể kết hợp Chùa Thiên Mụ với buổi trưa tại Chợ Đông Ba để tối ưu lịch trình.'
  }
};
