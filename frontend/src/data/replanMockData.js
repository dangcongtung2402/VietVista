export const replanData = {
  tripId: 'hue-central-2026',
  trigger: {
    type: 'DELAY',
    minutes: 45,
    poi: 'Đại Nội Huế',
    message: 'Bạn đã ở Đại Nội Huế lâu hơn dự kiến. Nếu giữ nguyên lịch trình, bạn có thể đến Chùa Thiên Mụ muộn và ảnh hưởng các điểm tiếp theo.'
  },
  contextSummary: {
    weather: { temp: '28°C', condition: 'Trời nắng đẹp', impact: 'Không ảnh hưởng lịch trình' },
    traffic: { status: 'Bình thường', desc: 'Thời gian di chuyển ổn định' },
    budget: { used: '420.000đ', remaining: '580.000đ', status: 'Trong mức dự kiến' }
  },
  currentSchedule: [
    { id: 'khach-san', time: '08:00', name: 'Khách sạn', status: 'DONE', label: 'Đã hoàn thành' },
    { id: 'dai-noi', time: '08:20', name: 'Đại Nội Huế', status: 'CURRENT_DELAYED', delayMin: 45, label: 'Đang tham quan' },
    { id: 'thien-mu', time: '10:40', name: 'Chùa Thiên Mụ', status: 'AFFECTED', newTime: '11:39', label: 'Sẽ đến muộn ~ 11:39' },
    { id: 'lunch', time: '12:30', name: 'Ăn trưa - Ẩm thực Huế', status: 'AT_RISK', label: 'Có thể bị trễ' },
    { id: 'khai-dinh', time: '14:00', name: 'Lăng Khải Định', status: 'AT_RISK', label: 'Có thể bị trễ' },
    { id: 'lang-huong', time: '16:00', name: 'Làng hương Thủy Xuân', status: 'AT_RISK', label: 'Có thể bị trễ' },
    { id: 'tu-do', time: '18:00', name: 'Tự do khám phá', status: 'AT_RISK', label: 'Có thể bị trễ' }
  ],
  aiAnalysis: {
    text: 'Dựa trên thời gian thực, giao thông, giờ mở cửa, sở thích của bạn và ngân sách, tôi đã tạo 3 phương án điều chỉnh lịch trình.',
    factors: [
      { label: 'Thời gian thực', val: 'Trễ 45 phút', icon: 'Clock' },
      { label: 'Giờ mở cửa', val: 'Tất cả điểm đều mở', icon: 'Calendar' },
      { label: 'Sở thích của bạn', val: 'Lịch sử, văn hóa', icon: 'Heart' },
      { label: 'Giao thông', val: 'Bình thường', icon: 'Car' },
      { label: 'Ngân sách', val: 'Trong mức dự kiến', icon: 'Wallet' },
      { label: 'Thời gian còn lại', val: '6 giờ 20 phút', icon: 'Hourglass' }
    ],
    quickTip: 'Bạn rất quan tâm lịch sử. Tôi đề xuất Phương án 1 để vẫn giữ được các điểm quan trọng nhất.'
  },
  options: [
    {
      id: 1,
      name: 'Giữ các điểm quan trọng',
      desc: 'Điều chỉnh thời gian, vẫn tham quan đầy đủ các điểm chính.',
      isRecommended: true,
      metrics: { end: '19:10', endDiff: '(Trễ 1 giờ 10 phút)', travel: '58 phút', cost: '+0đ' },
      timelinePreview: [
        { time: '11:10', name: 'Rời Đại Nội', alert: true },
        { time: '11:45', name: 'Chùa Thiên Mụ' },
        { time: '14:10', name: 'Lăng Khải Định' },
        { time: '16:30', name: 'Làng hương Thủy Xuân' }
      ]
    },
    {
      id: 2,
      name: 'Tối ưu thời gian',
      desc: 'Bỏ 1 điểm ít phù hợp, vẫn giữ trải nghiệm chính.',
      isRecommended: false,
      metrics: { end: '17:30', endDiff: '(Đúng lịch)', travel: '42 phút', cost: '+0đ' },
      timelinePreview: [
        { time: '11:10', name: 'Rời Đại Nội' },
        { time: '11:45', name: 'Chùa Thiên Mụ' },
        { time: '14:00', name: 'Làng hương Thủy Xuân', crossed: false },
        { time: '16:30', name: 'Tự do khám phá' }
      ]
    },
    {
      id: 3,
      name: 'Trải nghiệm thư giãn',
      desc: 'Tập trung trải nghiệm sâu hơn, ít điểm nhưng chất lượng hơn.',
      isRecommended: false,
      metrics: { end: '17:10', endDiff: '(Sớm hơn 50 phút)', travel: '36 phút', cost: '-50.000đ' },
      timelinePreview: [
        { time: '11:15', name: 'Rời Đại Nội' },
        { time: '11:50', name: 'Chùa Thiên Mụ' },
        { time: '14:30', name: 'Café sông Hương' },
        { time: '16:00', name: 'Tự do khám phá' }
      ]
    }
  ],
  mapData: {
    center: [16.4675, 107.5702],
    oldRoute: [
      [16.4675, 107.5702], // Dai Noi
      [16.4534, 107.5372], // Thien Mu
      [16.4020, 107.5921], // Khai Dinh
      [16.4350, 107.5710]  // Thuy Xuan
    ],
    newRoute: [
      [16.4675, 107.5702], // Dai Noi
      [16.4534, 107.5372], // Thien Mu
      [16.4020, 107.5921], // Khai Dinh (delayed)
      [16.4350, 107.5710]  // Thuy Xuan (delayed)
    ]
  }
};
