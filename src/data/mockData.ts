// src/data/mockData.ts
import React from 'react';

// Configuration for homepage content - specify which items to display by ID
export const HOMEPAGE_CONFIG = {
  // Specify which recognition posts to show on homepage (by ID)
  featuredRecognitionPosts: [1, 2],
  
  // Specify which news articles to show on homepage (by ID)
  featuredNewsArticles: [1, 2, 3, 4],
  
  // Specify which initiatives to show on homepage (by ID)
  featuredInitiatives: [1, 2, 3],
  
  // Specify which dashboard cards to show on homepage (by ID)
  featuredDashboardCards: [1, 2, 3, 4]
};

// Dashboard highlight cards data
export const dashboardCards = [
  {
    id: 1,
    title: "TOI",
    value: "$45,231",
    trendValue: "+20.1%",
    trendDirection: "up" as const,
    description: "vs tháng trước",
    icon: React.createElement('svg', {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement('path', {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"
    }))
  },
  {
    id: 2,
    title: "MAU",
    value: "2,350",
    trendValue: "+15.3%",
    trendDirection: "up" as const,
    description: "vs tháng trước",
    icon: React.createElement('svg', {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement('path', {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    }))
  },
  {
    id: 3,
    title: "Mức độ hài lòng",
    value: "78%",
    trendValue: "-3.2%",
    trendDirection: "down" as const,
    description: "vs tháng trước",
    icon: React.createElement('svg', {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement('path', {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }))
  },
  {
    id: 4,
    title: "Tỷ lệ chuyển đổi",
    value: "2.4%",
    trendValue: "+8.7%",
    trendDirection: "up" as const,
    description: "vs tháng trước",
    icon: React.createElement('svg', {
      xmlns: "http://www.w3.org/2000/svg",
      className: "h-8 w-8",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor"
    }, React.createElement('path', {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M13 7l5 5m0 0l-5 5m5-5H6"
    }))
  }
];

// Sample news articles data
export const newsArticles = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
    category: 'Chuyển đổi số',
    title: 'VietinBank ra mắt nền tảng ngân hàng số thế hệ mới',
    summary: 'Ngân hàng TMCP Công thương Việt Nam (VietinBank) vừa chính thức ra mắt nền tảng ngân hàng số thế hệ mới với nhiều tính năng ưu việt, đáp ứng nhu cầu ngày càng cao của khách hàng trong kỷ nguyên số.',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    category: 'Công nghệ',
    title: 'Ứng dụng AI trong quy trình thẩm định tín dụng',
    summary: 'VietinBank đã triển khai thành công hệ thống AI trong quy trình thẩm định tín dụng, giúp giảm thời gian xử lý hồ sơ và nâng cao độ chính xác trong đánh giá rủi ro.',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-3151cf794014?w=800',
    category: 'Đổi mới',
    title: 'Tự động hóa quy trình nội bộ với RPA',
    summary: 'Dự án tự động hóa quy trình nội bộ sử dụng công nghệ RPA đã mang lại hiệu quả đáng kể, tiết kiệm hàng nghìn giờ làm việc mỗi tháng cho nhân viên.',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    category: 'Trải nghiệm khách hàng',
    title: 'Chatbot thông minh hỗ trợ khách hàng 24/7',
    summary: 'VietinBank triển khai chatbot thông minh với khả năng xử lý hơn 10,000 câu hỏi mỗi ngày, mang lại trải nghiệm dịch vụ tốt hơn cho khách hàng.',
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Bảo mật',
    title: 'Nâng cấp hệ thống bảo mật thông tin',
    summary: 'VietinBank đã triển khai hệ thống bảo mật thông tin thế hệ mới với công nghệ blockchain.',
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    category: 'Đào tạo',
    title: 'Chương trình đào tạo nhân viên về công nghệ mới',
    summary: 'VietinBank khởi động chương trình đào tạo toàn diện cho nhân viên về các công nghệ mới.',
  },
];

// Sample recognition posts data for homepage
export const recognitionPosts = [
  {
    id: 1,
    posterAvatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    posterName: 'Vinh danh Chi nhánh trong chương trình thi đua năm 2024',
    timestamp: '2 giờ trước',
    content: '🎉 Năm 2024, các Chi nhánh đã rất tích cực tham gia vào chương trình thi đua năm 2024. 10 Chi nhánh đã đạt được thành tích và được BLĐ vinh danh tại Hội nghị tổng kết năm 2024.',
    honorees: [
      { avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'Chi nhánh TP.HCM' },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Chi nhánh Đà Nẵng' },
      { avatarUrl: 'https://randomuser.me/api/portraits/men/55.jpg', name: 'Chi nhánh Hà Nội' },
    ],
    likeCount: 156,
    commentCount: 23,
  },
  {
    id: 2,
    posterAvatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    posterName: 'Vinh danh các đội nhóm sáng kiến tích cực năm 2024',
    timestamp: '1 ngày trước',
    content: '🌟 Năm 2024, các đội nhóm đã rất tích cực triển khai xây dựng và thúc đẩy sáng kiến. 05 Sáng kiến đã đạt được thành tích và được BLĐ vinh danh tại Hội nghị tổng kết năm 2024.',
    honorees: [
      { avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg', name: 'Đội AI Chatbot' },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg', name: 'Đội RPA' },
      { avatarUrl: 'https://randomuser.me/api/portraits/men/67.jpg', name: 'Đội Mobile App' },
    ],
    likeCount: 89,
    commentCount: 15,
  },
  {
    id: 3,
    posterAvatarUrl: 'https://randomuser.me/api/portraits/men/55.jpg',
    posterName: 'Ban Chuyển đổi số',
    timestamp: '3 ngày trước',
    content: '🏆 Chi nhánh TP.HCM xứng đáng nhận được sự ghi nhận đặc biệt! Với việc triển khai thành công nền tảng đào tạo trực tuyến, chi nhánh đã đào tạo được hơn 1,000 nhân viên trong 3 tháng qua.',
    honorees: [
      { avatarUrl: 'https://randomuser.me/api/portraits/women/76.jpg', name: 'Phòng Đào tạo' },
      { avatarUrl: 'https://randomuser.me/api/portraits/men/23.jpg', name: 'Phòng Công nghệ' },
    ],
    likeCount: 203,
    commentCount: 31,
  },
  {
    id: 4,
    posterAvatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    posterName: 'Phòng Kinh doanh',
    timestamp: '1 tuần trước',
    content: '💡 Dự án "Hệ thống Báo cáo Thông minh" đã mang lại hiệu quả vượt trội! Với việc tự động hóa 100% quy trình báo cáo, dự án đã tiết kiệm 300 giờ làm việc mỗi tháng.',
    honorees: [
      { avatarUrl: 'https://randomuser.me/api/portraits/women/41.jpg', name: 'Đội Báo cáo' },
      { avatarUrl: 'https://randomuser.me/api/portraits/men/88.jpg', name: 'Đội Phân tích' },
    ],
    likeCount: 134,
    commentCount: 19,
  },
];

// Sample initiatives data
export const initiativesData = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
    avatarUrl: 'https://placehold.co/100x100/005AAB/FFFFFF?text=GNO',
    title: 'Giải ngân online',
    shortDescription: 'Tự động hóa hoàn toàn quy trình cấp tín dụng cho khách hàng doanh nghiệp.',
    fullDescription: 'Sáng kiến "Giải ngân online" tập trung vào việc xây dựng một nền tảng số hóa hoàn toàn quy trình cấp tín dụng cho khách hàng doanh nghiệp, từ lúc nộp hồ sơ, thẩm định, phê duyệt cho đến khi giải ngân. Mục tiêu là giảm thiểu các bước thủ công, rút ngắn thời gian chờ đợi và nâng cao trải nghiệm khách hàng.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    status: 'Đang thực hiện',
    io: 'Trần Văn Mạnh',
    backupIo: 'Lê Thuỳ Trang',
    contact: 'Phòng Hỗ trợ Dự án',
    email: 'giainganonlinesupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/giainganonine',
    documents: [
      { name: 'Quyết định triển khai dự án.pdf', url: '#' },
      { name: 'Kế hoạch chi tiết giai đoạn 1.docx', url: '#' },
      { name: 'Báo cáo tiến độ tuần 24.xlsx', url: '#' },
    ],
    summary: 'Xây dựng nền tảng số hóa hoàn toàn quy trình cấp tín dụng cho khách hàng doanh nghiệp, từ lúc nộp hồ sơ đến khi giải ngân.',
    members: [
      { avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'Trần Văn Mạnh', role: 'IO' as const },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Lê Thuỳ Trang', role: 'Backup IO' as const },
    ],
    highlightResults: [
      'Giảm 70% thời gian xử lý hồ sơ.',
      'Tăng 25% số lượng hồ sơ được xử lý ngày.',
      'CSAT đạt 95%.',
    ],
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    avatarUrl: 'https://placehold.co/100x100/005AAB/FFFFFF?text=IPF',
    title: 'iPay & eFast',
    shortDescription: 'Xây dựng lại ứng dụng di động với giao diện hiện đại và tính năng mới.',
    fullDescription: 'Dự án "iPay & eFast" tập trung vào việc xây dựng lại ứng dụng di động với giao diện hiện đại và thêm các tính năng eKYC, soft OTP và hệ sinh thái đối tác. Mục tiêu là tạo ra một ứng dụng ngân hàng số hàng đầu với trải nghiệm người dùng tối ưu và bảo mật cao.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    status: 'Hoàn thành',
    io: 'Mai Anh Thư',
    backupIo: 'Bùi Thế Hùng',
    contact: 'Phòng Phát triển Ứng dụng',
    email: 'ipayefastsupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/ipayefast',
    documents: [
      { name: 'Tài liệu thiết kế UI/UX.pdf', url: '#' },
      { name: 'Báo cáo kiểm thử bảo mật.docx', url: '#' },
      { name: 'Hướng dẫn triển khai.xlsx', url: '#' },
    ],
    summary: 'Xây dựng lại ứng dụng di động với giao diện hiện đại và thêm các tính năng eKYC, soft OTP và hệ sinh thái đối tác.',
    members: [
      { avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg', name: 'Mai Anh Thư', role: 'IO' as const },
      { avatarUrl: 'https://randomuser.me/api/portraits/men/62.jpg', name: 'Bùi Thế Hùng', role: 'Backup IO' as const },
    ],
    highlightResults: [
      'Người dùng mới tăng 10% sau 3 tháng.',
      'Số lượng giao dịch tăng 10% sau 3 tháng.',
      'Top 3 ứng dụng tài chính trên App Store.',
    ],
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-3151cf794014?w=800',
    avatarUrl: 'https://placehold.co/100x100/005AAB/FFFFFF?text=BPM',
    title: 'Tự động hoá quy trình BPM',
    shortDescription: 'Tái cấu trúc quy trình kinh doanh và sử dụng RPA để tự động hóa.',
    fullDescription: 'Dự án "Tự động hoá quy trình BPM" tập trung vào việc tái cấu trúc các quy trình kinh doanh và sử dụng RPA để tự động hóa quy trình phục vụ khách hàng và quy trình nội bộ. Mục tiêu là tối ưu hóa hiệu quả hoạt động, giảm thiểu lỗi thủ công và nâng cao chất lượng dịch vụ.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    status: 'Đang thực hiện',
    io: 'Lý Quốc Trung',
    backupIo: 'Hồ Phương Nga',
    contact: 'Phòng Quy trình & Tự động hóa',
    email: 'bpmsupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/bpm',
    documents: [
      { name: 'Bản đồ quy trình hiện tại.pdf', url: '#' },
      { name: 'Kế hoạch triển khai RPA.docx', url: '#' },
      { name: 'Báo cáo tiết kiệm chi phí.xlsx', url: '#' },
    ],
    summary: 'Tái cấu trúc các quy trình kinh doanh và sử dụng RPA để tự động hóa quy trình phục vụ khách hàng và quy trình nội bộ.',
    members: [
      { avatarUrl: 'https://randomuser.me/api/portraits/men/55.jpg', name: 'Lý Quốc Trung', role: 'IO' as const },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/58.jpg', name: 'Hồ Phương Nga', role: 'Thành viên' as const },
    ],
    highlightResults: [
      'Tiết kiệm 500 giờ làm việc mỗi tháng.',
      'Số lượng hồ sơ tăng 20%.',
      'Có thể xử lý từ xa.',
    ],
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    avatarUrl: 'https://placehold.co/100x100/005AAB/FFFFFF?text=AI',
    title: 'AI Chatbot Hỗ trợ',
    shortDescription: 'Phát triển chatbot thông minh sử dụng AI để hỗ trợ khách hàng 24/7.',
    fullDescription: 'Dự án "AI Chatbot Hỗ trợ" tập trung vào việc phát triển chatbot thông minh sử dụng AI để hỗ trợ khách hàng 24/7 với khả năng hiểu và trả lời các câu hỏi phức tạp. Mục tiêu là cung cấp dịch vụ hỗ trợ khách hàng liên tục, giảm tải cho đội ngũ nhân viên và nâng cao trải nghiệm khách hàng.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    status: 'Hoàn thành',
    io: 'Nguyễn Hoàng Nam',
    backupIo: 'Trần Minh Anh',
    contact: 'Phòng AI & Machine Learning',
    email: 'aichatbotsupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/aichatbot',
    documents: [
      { name: 'Tài liệu thiết kế AI.pdf', url: '#' },
      { name: 'Báo cáo hiệu suất chatbot.docx', url: '#' },
      { name: 'Hướng dẫn sử dụng.xlsx', url: '#' },
    ],
    summary: 'Phát triển chatbot thông minh sử dụng AI để hỗ trợ khách hàng 24/7 với khả năng hiểu và trả lời các câu hỏi phức tạp.',
    members: [
      { avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg', name: 'Nguyễn Hoàng Nam', role: 'IO' as const },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg', name: 'Trần Minh Anh', role: 'Backup IO' as const },
    ],
    highlightResults: [
      'Giảm 60% thời gian chờ đợi của khách hàng.',
      'Tỷ lệ hài lòng đạt 92%.',
      'Xử lý 10,000+ câu hỏi mỗi ngày.',
    ],
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    avatarUrl: 'https://placehold.co/100x100/005AAB/FFFFFF?text=BR',
    title: 'Hệ thống Báo cáo Thông minh',
    shortDescription: 'Xây dựng hệ thống báo cáo tự động với dashboard tương tác.',
    fullDescription: 'Dự án "Hệ thống Báo cáo Thông minh" tập trung vào việc xây dựng hệ thống báo cáo tự động với dashboard tương tác và phân tích dữ liệu thời gian thực cho ban lãnh đạo. Mục tiêu là cung cấp thông tin chính xác và kịp thời để hỗ trợ ra quyết định chiến lược.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    status: 'Hoàn thành',
    io: 'Vũ Thị Mai',
    backupIo: 'Hoàng Văn Sơn',
    contact: 'Phòng Phân tích Dữ liệu',
    email: 'bireportingsupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/bireporting',
    documents: [
      { name: 'Yêu cầu hệ thống báo cáo.pdf', url: '#' },
      { name: 'Thiết kế dashboard.docx', url: '#' },
      { name: 'Báo cáo triển khai.xlsx', url: '#' },
    ],
    summary: 'Xây dựng hệ thống báo cáo tự động với dashboard tương tác và phân tích dữ liệu thời gian thực cho ban lãnh đạo.',
    members: [
      { avatarUrl: 'https://randomuser.me/api/portraits/women/76.jpg', name: 'Vũ Thị Mai', role: 'IO' as const },
      { avatarUrl: 'https://randomuser.me/api/portraits/men/23.jpg', name: 'Hoàng Văn Sơn', role: 'Backup IO' as const },
    ],
    highlightResults: [
      'Tạo báo cáo tự động 100%.',
      'Tiết kiệm 300 giờ làm việc mỗi tháng.',
      'Độ chính xác dữ liệu đạt 99.9%.',
    ],
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    avatarUrl: 'https://placehold.co/100x100/005AAB/FFFFFF?text=ET',
    title: 'Nền tảng Đào tạo Trực tuyến',
    shortDescription: 'Phát triển hệ thống đào tạo nội bộ với khóa học tương tác.',
    fullDescription: 'Dự án "Nền tảng Đào tạo Trực tuyến" tập trung vào việc phát triển hệ thống đào tạo nội bộ với các khóa học tương tác, đánh giá tự động và theo dõi tiến độ học tập. Mục tiêu là nâng cao năng lực nhân viên thông qua đào tạo liên tục và hiệu quả.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    status: 'Đang thực hiện',
    io: 'Bùi Văn Thành',
    backupIo: 'Lý Thị Ngọc',
    contact: 'Phòng Đào tạo & Phát triển',
    email: 'e-learningsupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/e-learning',
    documents: [
      { name: 'Kế hoạch đào tạo năm 2024.pdf', url: '#' },
      { name: 'Danh sách khóa học.docx', url: '#' },
      { name: 'Báo cáo tiến độ đào tạo.xlsx', url: '#' },
    ],
    summary: 'Phát triển hệ thống đào tạo nội bộ với các khóa học tương tác, đánh giá tự động và theo dõi tiến độ học tập.',
    members: [
      { avatarUrl: 'https://randomuser.me/api/portraits/men/88.jpg', name: 'Bùi Văn Thành', role: 'IO' as const },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/95.jpg', name: 'Lý Thị Ngọc', role: 'Backup IO' as const },
    ],
    highlightResults: [
      'Đào tạo 5,000+ nhân viên mỗi năm.',
      'Tỷ lệ hoàn thành khóa học đạt 85%.',
      'Tiết kiệm 40% chi phí đào tạo.',
    ],
  },
];

// Helper function to filter items by IDs
export const getItemsByIds = <T extends { id: number }>(items: T[], ids: number[]): T[] => {
  return items.filter(item => ids.includes(item.id));
}; 