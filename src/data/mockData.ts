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
  featuredDashboardCards: [1, 2, 3, 4],
  
  // Specify which missions to show on homepage (by ID)
  featuredMissions: [1, 2]
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
    posterAvatarUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop&crop=center',
    posterName: 'Vinh danh Chi nhánh trong chương trình thi đua năm 2024',
    timestamp: '2 giờ trước',
    content: '🎉 Năm 2024, các Chi nhánh đã rất tích cực tham gia vào chương trình thi đua năm 2024. 10 Chi nhánh đã đạt được thành tích và được BLĐ vinh danh tại Hội nghị tổng kết năm 2024.',
    honorees: [
      { avatarUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop&crop=center', name: 'Chi nhánh TP.HCM' },
      { avatarUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&h=150&fit=crop&crop=center', name: 'Chi nhánh Đà Nẵng' },
      { avatarUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop&crop=center', name: 'Chi nhánh Hà Nội' },
    ],
    likeCount: 156,
    commentCount: 23,
    type: 'branch' as const,
  },
  {
    id: 2,
    posterAvatarUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop&crop=center',
    posterName: 'Vinh danh các đội nhóm sáng kiến tích cực năm 2024',
    timestamp: '1 ngày trước',
    content: '🌟 Năm 2024, các đội nhóm đã rất tích cực triển khai xây dựng và thúc đẩy sáng kiến. 05 Sáng kiến đã đạt được thành tích và được BLĐ vinh danh tại Hội nghị tổng kết năm 2024.',
    honorees: [
      { avatarUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop&crop=center', name: 'Đội AI Chatbot' },
      { avatarUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop&crop=center', name: 'Đội RPA' },
      { avatarUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=150&h=150&fit=crop&crop=center', name: 'Đội Mobile App' },
    ],
    likeCount: 89,
    commentCount: 15,
    type: 'team' as const,
  },
  {
    id: 3,
    posterAvatarUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop&crop=center',
    posterName: 'Ban Chuyển đổi số',
    timestamp: '3 ngày trước',
    content: '🏆 Chi nhánh TP.HCM xứng đáng nhận được sự ghi nhận đặc biệt! Với việc triển khai thành công nền tảng đào tạo trực tuyến, chi nhánh đã đào tạo được hơn 1,000 nhân viên trong 3 tháng qua.',
    honorees: [
      { avatarUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=150&h=150&fit=crop&crop=center', name: 'Phòng Đào tạo' },
      { avatarUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop&crop=center', name: 'Phòng Công nghệ' },
    ],
    likeCount: 203,
    commentCount: 31,
    type: 'branch' as const,
  },
  {
    id: 4,
    posterAvatarUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop&crop=center',
    posterName: 'Phòng Kinh doanh',
    timestamp: '1 tuần trước',
    content: '💡 Dự án "Hệ thống Báo cáo Thông minh" đã mang lại hiệu quả vượt trội! Với việc tự động hóa 100% quy trình báo cáo, dự án đã tiết kiệm 300 giờ làm việc mỗi tháng.',
    honorees: [
      { avatarUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop&crop=center', name: 'Đội Báo cáo' },
      { avatarUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=150&h=150&fit=crop&crop=center', name: 'Đội Phân tích' },
    ],
    likeCount: 134,
    commentCount: 19,
    type: 'team' as const,
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
    status: 'Xây dựng' as const,
    pilotDate: '30/09/2025',
    io: 'Trần Văn Mạnh',
    backupIo: 'Lê Thuỳ Trang',
    contact: 'Phòng Hỗ trợ Dự án',
    email: 'giainganonlinesupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/giainganonine',
    dashboardLink: 'https://dashboard.vietinbank.vn/giainganonline',
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
      {
        title: 'Giảm 70% thời gian xử lý hồ sơ.',
        description: "Thời gian xử lý được đo từ khi khách hàng nộp bộ hồ sơ đầy đủ trên hệ thống cho đến khi khoản vay được phê duyệt và giải ngân. Trước khi áp dụng, thời gian trung bình là 10 ngày làm việc. Sau khi áp dụng, thời gian xử lý trung bình chỉ còn 3 ngày. Phép tính: ((10 - 3) / 10) * 100% = 70%."
      },
      {
        title: 'Tăng 25% số lượng hồ sơ được xử lý ngày.',
        description: "Năng suất xử lý của mỗi cán bộ tín dụng được đo bằng số lượng hồ sơ họ hoàn thành trong một ngày làm việc. Nhờ tự động hóa các tác vụ thủ công như nhập liệu và kiểm tra chéo, mỗi cán bộ có thể xử lý trung bình 5 hồ sơ/ngày so với 4 hồ sơ/ngày trước đây, tương đương mức tăng 25%."
      },
      {
        title: 'CSAT đạt 95%.',
        description: "Chỉ số hài lòng của khách hàng (Customer Satisfaction Score - CSAT) được đo lường thông qua một khảo sát ngắn gửi cho khách hàng sau khi họ hoàn tất quá trình vay vốn. 95% khách hàng tham gia khảo sát đã đánh giá trải nghiệm của họ là 'Hài lòng' hoặc 'Rất hài lòng' (4 hoặc 5 trên thang điểm 5)."
      }
    ],
    qa: [
      { question: "Sáng kiến này giải quyết vấn đề cốt lõi nào?", answer: "Sáng kiến 'Giải ngân online' giải quyết vấn đề về thời gian xử lý hồ sơ tín dụng kéo dài và quy trình thủ công phức tạp, dẫn đến trải nghiệm không tốt cho khách hàng doanh nghiệp." },
      { question: "Kết quả 'Giảm 70% thời gian xử lý hồ sơ' được tính toán như thế nào?", answer: "Chúng tôi đã đo lường thời gian trung bình từ lúc khách hàng nộp hồ sơ đến khi nhận được giải ngân trước và sau khi triển khai hệ thống. Trước đây, quy trình mất trung bình 10 ngày làm việc. Hiện tại, với hệ thống mới, thời gian trung bình chỉ còn 3 ngày. Mức giảm 7 ngày tương đương với 70%." },
      { question: "Hệ thống mới có đảm bảo an toàn và bảo mật không?", answer: "Tuyệt đối. Hệ thống được xây dựng trên nền tảng công nghệ bảo mật nhiều lớp, bao gồm mã hóa đầu cuối, xác thực đa yếu tố (MFA) và tuân thủ các tiêu chuẩn bảo mật quốc tế như ISO 27001." },
      { question: "Khách hàng doanh nghiệp cần chuẩn bị những gì để sử dụng nền tảng này?", answer: "Khách hàng chỉ cần có tài khoản doanh nghiệp tại VietinBank và chuẩn bị các hồ sơ pháp lý, tài chính dưới dạng file mềm (scan hoặc file PDF) để tải lên hệ thống theo hướng dẫn." },
      { question: "Lộ trình phát triển tiếp theo của sáng kiến là gì?", answer: "Trong giai đoạn tiếp theo, chúng tôi sẽ tích hợp trí tuệ nhân tạo (AI) để tự động hóa một phần quá trình thẩm định sơ bộ và mở rộng nền tảng cho các sản phẩm vay vốn phức tạp hơn." }
    ],
    dashboardData: [
        { name: "Thời gian xử lý (ngày)", data: [{ month: 'Jan', value: 10 }, { month: 'Feb', value: 9.5 }, { month: 'Mar', value: 8 }, { month: 'Apr', value: 6 }, { month: 'May', value: 4.5 }, { month: 'Jun', value: 3 }] },
        { name: "Số hồ sơ/tháng", data: [{ month: 'Jan', value: 320 }, { month: 'Feb', value: 340 }, { month: 'Mar', value: 370 }, { month: 'Apr', value: 400 }, { month: 'May', value: 450 }, { month: 'Jun', value: 510 }] },
        { name: "Tỷ lệ duyệt tự động (%)", data: [{ month: 'Jan', value: 10 }, { month: 'Feb', value: 15 }, { month: 'Mar', value: 25 }, { month: 'Apr', value: 40 }, { month: 'May', value: 55 }, { month: 'Jun', value: 70 }] }
    ]
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    avatarUrl: 'https://placehold.co/100x100/005AAB/FFFFFF?text=IPF',
    title: 'iPay & eFast',
    shortDescription: 'Xây dựng lại ứng dụng di động với giao diện hiện đại và tính năng mới.',
    fullDescription: 'Dự án "iPay & eFast" tập trung vào việc xây dựng lại ứng dụng di động với giao diện hiện đại và thêm các tính năng eKYC, soft OTP và hệ sinh thái đối tác. Mục tiêu là tạo ra một ứng dụng ngân hàng số hàng đầu với trải nghiệm người dùng tối ưu và bảo mật cao.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    status: 'Triển khai rộng' as const,
    io: 'Mai Anh Thư',
    backupIo: 'Bùi Thế Hùng',
    contact: 'Phòng Phát triển Ứng dụng',
    email: 'ipayefastsupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/ipayefast',
    dashboardLink: 'https://dashboard.vietinbank.vn/ipayefast',
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
      { title: 'Người dùng mới tăng 10% sau 3 tháng.', description: "Số lượng người dùng mới được tính là tổng số khách hàng đăng ký và kích hoạt thành công ứng dụng iPay/eFast. Chúng tôi đã so sánh tổng số người dùng mới trong 3 tháng sau khi ra mắt phiên bản mới với tổng số của 3 tháng liền kề trước đó. Kết quả cho thấy sự tăng trưởng 10%." },
      { title: 'Số lượng giao dịch tăng 10% sau 3 tháng.', description: "Chỉ số này đo lường tổng số lượng giao dịch tài chính (chuyển khoản, thanh toán hóa đơn, nạp tiền) được thực hiện qua ứng dụng. Dữ liệu được so sánh giữa quý sau và quý trước khi ra mắt phiên bản mới." },
      { title: 'Top 3 ứng dụng tài chính trên App Store.', description: "Thứ hạng được ghi nhận trên bảng xếp hạng 'Ứng dụng Tài chính Miễn phí' của Apple App Store tại thị trường Việt Nam. Thứ hạng này được duy trì ổn định trong vòng 2 tháng sau khi ra mắt." }
    ],
    qa: [
      { question: "Tại sao cần phải xây dựng lại ứng dụng iPay & eFast?", answer: "Phiên bản cũ của iPay & eFast có giao diện đã lỗi thời và thiếu các tính năng cạnh tranh như eKYC hay soft OTP. Việc xây dựng lại nhằm mục đích cải thiện trải nghiệm người dùng, nâng cao bảo mật và bắt kịp xu hướng thị trường." },
      { question: "Làm thế nào để đo lường 'Người dùng mới tăng 10%'?", answer: "Chúng tôi so sánh số lượng người dùng đăng ký và kích hoạt thành công tài khoản trong 3 tháng sau khi ra mắt phiên bản mới so với 3 tháng ngay trước đó. Dữ liệu được thu thập từ hệ thống phân tích người dùng của chúng tôi." },
      { question: "Hệ sinh thái đối tác bao gồm những gì?", answer: "Hệ sinh thái đối tác cho phép người dùng thanh toán trực tiếp các hóa đơn điện, nước, internet, mua vé xem phim, đặt phòng khách sạn và nhiều dịch vụ khác ngay trên ứng dụng mà không cần chuyển qua nền tảng khác." },
      { question: "Tính năng eKYC (định danh khách hàng điện tử) hoạt động như thế nào?", answer: "eKYC cho phép khách hàng mở tài khoản trực tuyến 100% bằng cách chụp ảnh giấy tờ tùy thân (CMND/CCCD) và xác thực khuôn mặt qua camera điện thoại. Công nghệ AI sẽ tự động kiểm tra và đối chiếu thông tin." },
      { question: "Soft OTP có an toàn hơn SMS OTP truyền thống không?", answer: "Có. Soft OTP được tích hợp ngay trong ứng dụng và mã OTP được tạo ra theo thời gian thực, không phụ thuộc vào sóng di động và giảm thiểu rủi ro bị kẻ gian chiếm đoạt SIM để đọc trộm mã OTP." }
    ],
    dashboardData: [
        { name: "Lượng người dùng hoạt động (MAU)", data: [{ month: 'Jan', value: 1.2 }, { month: 'Feb', value: 1.3 }, { month: 'Mar', value: 1.5 }, { month: 'Apr', value: 1.8 }, { month: 'May', value: 2.1 }, { month: 'Jun', value: 2.5 }] },
        { name: "Số lượng giao dịch (triệu)", data: [{ month: 'Jan', value: 15 }, { month: 'Feb', value: 17 }, { month: 'Mar', value: 20 }, { month: 'Apr', value: 24 }, { month: 'May', value: 28 }, { month: 'Jun', value: 35 }] },
        { name: "Đánh giá App Store", data: [{ month: 'Jan', value: 4.2 }, { month: 'Feb', value: 4.3 }, { month: 'Mar', value: 4.5 }, { month: 'Apr', value: 4.7 }, { month: 'May', value: 4.8 }, { month: 'Jun', value: 4.9 }] }
    ]
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-3151cf794014?w=800',
    avatarUrl: 'https://placehold.co/100x100/005AAB/FFFFFF?text=BPM',
    title: 'Tự động hoá quy trình BPM',
    shortDescription: 'Tái cấu trúc quy trình kinh doanh và sử dụng RPA để tự động hóa.',
    fullDescription: 'Dự án "Tự động hoá quy trình BPM" tập trung vào việc tái cấu trúc các quy trình kinh doanh và sử dụng RPA để tự động hóa quy trình phục vụ khách hàng và quy trình nội bộ. Mục tiêu là tối ưu hóa hiệu quả hoạt động, giảm thiểu lỗi thủ công và nâng cao chất lượng dịch vụ.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    status: 'Thí điểm' as const,
    goLiveDate: '15/11/2025',
    io: 'Lý Quốc Trung',
    backupIo: 'Hồ Phương Nga',
    contact: 'Phòng Quy trình & Tự động hóa',
    email: 'bpmsupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/bpm',
    dashboardLink: 'https://dashboard.vietinbank.vn/bpm',
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
      { title: 'Tiết kiệm 500 giờ làm việc mỗi tháng.', description: "Số giờ tiết kiệm được tính bằng cách nhân (thời gian xử lý thủ công - thời gian xử lý bằng robot) với số lần thực hiện quy trình mỗi tháng. Ví dụ, việc đối soát giao dịch cuối ngày trước đây tốn 2 giờ/ngày bởi 2 nhân viên, nay robot chỉ mất 10 phút giám sát, tiết kiệm gần 4 giờ/ngày cho quy trình đó." },
      { title: 'Số lượng hồ sơ tăng 20%.', description: "Với thời gian được giải phóng khỏi các công việc thủ công, các cán bộ có thêm thời gian để tư vấn và xử lý các hồ sơ phức tạp hơn, dẫn đến năng suất tổng thể của phòng ban tăng 20%." },
      { title: 'Có thể xử lý từ xa.', description: "Việc áp dụng BPM và RPA cho phép các quy trình được chuẩn hóa và thực hiện trên nền tảng số. Nhờ đó, nhân viên có thể khởi tạo, theo dõi và phê duyệt các tác vụ từ xa mà không cần phải có mặt tại văn phòng, đảm bảo hoạt động kinh doanh liên tục." }
    ],
    qa: [
      { question: "RPA (Robotic Process Automation) được áp dụng vào những quy trình cụ thể nào?", answer: "Chúng tôi đã áp dụng RPA vào các quy trình lặp đi lặp lại và có quy tắc rõ ràng như: nhập liệu báo cáo, đối soát giao dịch cuối ngày, và gửi thông báo tự động cho khách hàng." },
      { question: "Con số 'Tiết kiệm 500 giờ làm việc mỗi tháng' được tính như thế nào?", answer: "Con số này được tính bằng cách lấy tổng thời gian nhân viên phải bỏ ra để thực hiện các công việc thủ công trước đây, trừ đi thời gian giám sát robot sau khi tự động hóa. Ví dụ, một quy trình mất 30 phút thủ công, robot chỉ cần 2 phút, tiết kiệm 28 phút cho mỗi lần thực hiện." },
      { question: "Việc tự động hóa có làm giảm số lượng nhân sự không?", answer: "Mục tiêu của dự án không phải là cắt giảm nhân sự. Thay vào đó, chúng tôi giải phóng nhân viên khỏi các công việc nhàm chán, lặp đi lặp lại để họ có thể tập trung vào các nhiệm vụ có giá trị cao hơn như phân tích, tư vấn và chăm sóc khách hàng." },
      { question: "Nhân viên có cần kỹ năng lập trình để sử dụng RPA không?", answer: "Không. Đội ngũ dự án sẽ xây dựng và cấu hình các robot. Nhân viên chỉ cần khởi chạy các robot này thông qua một giao diện đơn giản hoặc robot sẽ tự động chạy theo lịch trình đã được cài đặt sẵn." },
      { question: "Lợi ích lớn nhất mà BPM và RPA mang lại là gì?", answer: "Lợi ích lớn nhất là việc tiêu chuẩn hóa và tối ưu hóa quy trình. Điều này không chỉ giúp tăng năng suất, giảm sai sót mà còn tạo ra một nền tảng vững chắc để ngân hàng có thể mở rộng quy mô hoạt động một cách hiệu quả." }
    ],
    dashboardData: [
        { name: "Giờ làm việc tiết kiệm", data: [{ month: 'Jan', value: 100 }, { month: 'Feb', value: 150 }, { month: 'Mar', value: 250 }, { month: 'Apr', value: 350 }, { month: 'May', value: 420 }, { month: 'Jun', value: 500 }] },
        { name: "Hiệu suất quy trình (%)", data: [{ month: 'Jan', value: 10 }, { month: 'Feb', value: 18 }, { month: 'Mar', value: 30 }, { month: 'Apr', value: 45 }, { month: 'May', value: 55 }, { month: 'Jun', value: 65 }] },
        { name: "Tỷ lệ lỗi (%)", data: [{ month: 'Jan', value: 5 }, { month: 'Feb', value: 4.5 }, { month: 'Mar', value: 3 }, { month: 'Apr', value: 2 }, { month: 'May', value: 1.5 }, { month: 'Jun', value: 1 }] }
    ]
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    avatarUrl: 'https://placehold.co/100x100/005AAB/FFFFFF?text=AI',
    title: 'AI Chatbot Hỗ trợ',
    shortDescription: 'Phát triển chatbot thông minh sử dụng AI để hỗ trợ khách hàng 24/7.',
    fullDescription: 'Dự án "AI Chatbot Hỗ trợ" tập trung vào việc phát triển chatbot thông minh sử dụng AI để hỗ trợ khách hàng 24/7 với khả năng hiểu và trả lời các câu hỏi phức tạp. Mục tiêu là cung cấp dịch vụ hỗ trợ khách hàng liên tục, giảm tải cho đội ngũ nhân viên và nâng cao trải nghiệm khách hàng.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    status: 'Triển khai rộng' as const,
    io: 'Nguyễn Hoàng Nam',
    backupIo: 'Trần Minh Anh',
    contact: 'Phòng AI & Machine Learning',
    email: 'aichatbotsupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/aichatbot',
    dashboardLink: 'https://dashboard.vietinbank.vn/aichatbot',
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
      { title: 'Giảm 60% thời gian chờ đợi của khách hàng.', description: "Thời gian chờ đợi được tính từ lúc khách hàng đặt câu hỏi cho đến khi nhận được phản hồi đầu tiên từ nhân viên hỗ trợ. Với chatbot, khách hàng nhận được câu trả lời ngay lập tức, giảm đáng kể so với việc phải chờ kết nối với nhân viên." },
      { title: 'Tỷ lệ hài lòng đạt 92%.', description: "Sau mỗi cuộc hội thoại, chatbot sẽ đưa ra một khảo sát nhanh yêu cầu người dùng đánh giá mức độ hài lòng trên thang điểm 5. Tỷ lệ 92% là tổng số lượt đánh giá 4 và 5 sao trên tổng số lượt đánh giá nhận được." },
      { title: 'Xử lý 10,000+ câu hỏi mỗi ngày.', description: "Đây là tổng số lượng câu hỏi mà chatbot đã tiếp nhận và xử lý thành công trong một ngày cao điểm. Con số này cho thấy khả năng mở rộng và đáp ứng nhu cầu lớn của hệ thống." }
    ],
    qa: [
      { question: "AI Chatbot có thể xử lý những loại câu hỏi nào?", answer: "Chatbot có thể xử lý một loạt các câu hỏi phổ biến như: thông tin về sản phẩm (lãi suất, phí dịch vụ), hướng dẫn sử dụng iPay, tra cứu địa điểm ATM/chi nhánh, và các câu hỏi chung về chính sách của ngân hàng." },
      { question: "Tỷ lệ hài lòng 92% được đo lường ra sao?", answer: "Sau mỗi cuộc hội thoại, chatbot sẽ đưa ra một khảo sát nhanh yêu cầu người dùng đánh giá mức độ hài lòng trên thang điểm 5. Tỷ lệ 92% là tổng số lượt đánh giá 4 và 5 sao trên tổng số lượt đánh giá nhận được." },
      { question: "Điều gì xảy ra nếu chatbot không hiểu câu hỏi của khách hàng?", answer: "Nếu chatbot không thể trả lời câu hỏi sau 2 lần thử, nó sẽ tự động đưa ra tùy chọn để kết nối trực tiếp với nhân viên hỗ trợ. Cuộc trò chuyện và lịch sử sẽ được chuyển liền mạch để nhân viên có thể nắm bắt bối cảnh." },
      { question: "Chatbot có được đào tạo và cập nhật liên tục không?", answer: "Có. Đội ngũ của chúng tôi liên tục phân tích các cuộc hội thoại (đã được ẩn danh) để xác định các điểm yếu và bổ sung kiến thức mới cho chatbot hàng tuần, giúp nó ngày càng thông minh hơn." },
      { question: "Công nghệ xử lý ngôn ngữ tự nhiên (NLP) nào đang được sử dụng?", answer: "Chúng tôi đang sử dụng một mô hình NLP tùy chỉnh được xây dựng dựa trên kiến trúc Transformer, kết hợp với các dịch vụ của Google Dialogflow để có khả năng hiểu ngữ cảnh và ý định của người dùng một cách tốt nhất." }
    ],
    dashboardData: [
        { name: "Số hội thoại/ngày (nghìn)", data: [{ month: 'Jan', value: 5 }, { month: 'Feb', value: 6 }, { month: 'Mar', value: 7.5 }, { month: 'Apr', value: 8.5 }, { month: 'May', value: 9.5 }, { month: 'Jun', value: 10.2 }] },
        { name: "Tỷ lệ giải quyết lần đầu (%)", data: [{ month: 'Jan', value: 75 }, { month: 'Feb', value: 78 }, { month: 'Mar', value: 82 }, { month: 'Apr', value: 85 }, { month: 'May', value: 88 }, { month: 'Jun', value: 91 }] },
        { name: "CSAT (%)", data: [{ month: 'Jan', value: 85 }, { month: 'Feb', value: 86 }, { month: 'Mar', value: 88 }, { month: 'Apr', value: 90 }, { month: 'May', value: 91 }, { month: 'Jun', value: 92 }] }
    ]
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    avatarUrl: 'https://placehold.co/100x100/005AAB/FFFFFF?text=BR',
    title: 'Hệ thống Báo cáo Thông minh',
    shortDescription: 'Xây dựng hệ thống báo cáo tự động với dashboard tương tác.',
    fullDescription: 'Dự án "Hệ thống Báo cáo Thông minh" tập trung vào việc xây dựng hệ thống báo cáo tự động với dashboard tương tác và phân tích dữ liệu thời gian thực cho ban lãnh đạo. Mục tiêu là cung cấp thông tin chính xác và kịp thời để hỗ trợ ra quyết định chiến lược.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    status: 'Triển khai rộng' as const,
    io: 'Vũ Thị Mai',
    backupIo: 'Hoàng Văn Sơn',
    contact: 'Phòng Phân tích Dữ liệu',
    email: 'bireportingsupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/bireporting',
    dashboardLink: 'https://dashboard.vietinbank.vn/bireporting',
    documents: [
      { name: 'Yêu cầu hệ thống báo cáo.pdf', url: '#' },
      { name: 'Thiết kế dashboard.docx', url: '#' },
      { name: 'Báo cáo triển khai.xlsx', url: '#' },
      { name: 'Hướng dẫn sử dụng dashboard.pdf', url: '#' },
    ],
    summary: 'Xây dựng hệ thống báo cáo tự động với dashboard tương tác và phân tích dữ liệu thời gian thực cho ban lãnh đạo.',
    members: [
      { avatarUrl: 'https://randomuser.me/api/portraits/women/76.jpg', name: 'Vũ Thị Mai', role: 'IO' as const },
      { avatarUrl: 'https://randomuser.me/api/portraits/men/23.jpg', name: 'Hoàng Văn Sơn', role: 'Backup IO' as const },
    ],
    highlightResults: [
      { title: 'Tạo báo cáo tự động 100%.', description: "Tất cả các báo cáo hoạt động định kỳ trước đây được thực hiện thủ công nay đã được tự động hóa hoàn toàn. Hệ thống tự động trích xuất, xử lý và trình bày dữ liệu mà không cần sự can thiệp của con người." },
      { title: 'Tiết kiệm 300 giờ làm việc mỗi tháng.', description: "Đây là tổng thời gian mà các chuyên viên phân tích tiết kiệm được từ việc không phải tổng hợp dữ liệu thủ công. Thời gian này được chuyển sang các hoạt động phân tích chuyên sâu và đưa ra các đề xuất kinh doanh." },
      { title: 'Độ chính xác dữ liệu đạt 99.9%.', description: "Độ chính xác được đảm bảo bằng cách kết nối trực tiếp với các hệ thống nguồn (core banking, CRM) thông qua API, loại bỏ hoàn toàn bước nhập liệu thủ công. Con số 99.9% được xác định thông qua các quy trình đối soát và kiểm toán dữ liệu tự động." }
    ],
    qa: [
      { question: "Hệ thống này tự động hóa những loại báo cáo nào?", answer: "Hệ thống có thể tự động hóa hầu hết các báo cáo hoạt động hàng ngày, hàng tuần và hàng tháng, chẳng hạn như báo cáo kinh doanh, báo cáo rủi ro, và báo cáo hiệu suất hoạt động của các chi nhánh." },
      { question: "Làm thế nào để đảm bảo 'Độ chính xác dữ liệu đạt 99.9%'?", answer: "Độ chính xác được đảm bảo bằng cách kết nối trực tiếp với các hệ thống nguồn (core banking, CRM) thông qua API, loại bỏ hoàn toàn bước nhập liệu thủ công. Con số 99.9% được xác định thông qua các quy trình đối soát và kiểm toán dữ liệu tự động." },
      { question: "Ban lãnh đạo tương tác với dashboard này như thế nào?", answer: "Ban lãnh đạo có thể truy cập dashboard thông qua trình duyệt web trên máy tính hoặc máy tính bảng. Dashboard có giao diện tương tác, cho phép lọc, sắp xếp và xem chi tiết dữ liệu (drill-down) chỉ với vài cú nhấp chuột." },
      { question: "Dữ liệu trên dashboard có phải là dữ liệu thời gian thực không?", answer: "Dữ liệu được cập nhật gần như thời gian thực. Hầu hết các chỉ số được làm mới sau mỗi 15 phút, đảm bảo ban lãnh đạo luôn có thông tin mới nhất để ra quyết định." },
      { question: "Việc xây dựng hệ thống này có phức tạp không?", answer: "Việc xây dựng đòi hỏi chuyên môn về kỹ thuật dữ liệu và phân tích kinh doanh. Thách thức lớn nhất là việc làm sạch và hợp nhất dữ liệu từ nhiều hệ thống nguồn khác nhau để tạo ra một nguồn dữ liệu duy nhất và đáng tin cậy (Single Source of Truth)." }
    ],
    dashboardData: [
        { name: "Thời gian tạo báo cáo (phút)", data: [{ month: 'Jan', value: 120 }, { month: 'Feb', value: 90 }, { month: 'Mar', value: 60 }, { month: 'Apr', value: 30 }, { month: 'May', value: 15 }, { month: 'Jun', value: 5 }] },
        { name: "Tỷ lệ truy cập dashboard/tuần", data: [{ month: 'Jan', value: 10 }, { month: 'Feb', value: 25 }, { month: 'Mar', value: 40 }, { month: 'Apr', value: 60 }, { month: 'May', value: 75 }, { month: 'Jun', value: 95 }] },
        { name: "Độ chính xác dữ liệu (%)", data: [{ month: 'Jan', value: 95 }, { month: 'Feb', value: 97 }, { month: 'Mar', value: 98 }, { month: 'Apr', value: 99 }, { month: 'May', value: 99.5 }, { month: 'Jun', value: 99.9 }] }
    ]
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    avatarUrl: 'https://placehold.co/100x100/005AAB/FFFFFF?text=ET',
    title: 'Nền tảng Đào tạo Trực tuyến',
    shortDescription: 'Phát triển hệ thống đào tạo nội bộ với khóa học tương tác.',
    fullDescription: 'Dự án "Nền tảng Đào tạo Trực tuyến" tập trung vào việc phát triển hệ thống đào tạo nội bộ với các khóa học tương tác, đánh giá tự động và theo dõi tiến độ học tập. Mục tiêu là nâng cao năng lực nhân viên thông qua đào tạo liên tục và hiệu quả.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    status: 'Nghiên cứu' as const,
    io: 'Bùi Văn Thành',
    backupIo: 'Lý Thị Ngọc',
    contact: 'Phòng Đào tạo & Phát triển',
    email: 'e-learningsupport@vietinbank.vn',
    grouplink: 'https://workplace.example.com/groups/e-learning',
    dashboardLink: 'https://dashboard.vietinbank.vn/elearning',
    documents: [
      { name: 'Kế hoạch đào tạo năm 2024.pdf', url: '#' },
      { name: 'Danh sách khóa học.docx', url: '#' },
      { name: 'Báo cáo tiến độ đào tạo.xlsx', url: '#' },
      { name: 'Hướng dẫn sử dụng nền tảng.pdf', url: '#' },
    ],
    summary: 'Phát triển hệ thống đào tạo nội bộ với các khóa học tương tác, đánh giá tự động và theo dõi tiến độ học tập.',
    members: [
      { avatarUrl: 'https://randomuser.me/api/portraits/men/88.jpg', name: 'Bùi Văn Thành', role: 'IO' as const },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/95.jpg', name: 'Lý Thị Ngọc', role: 'Backup IO' as const },
    ],
    highlightResults: [
      { title: 'Đào tạo 5,000+ nhân viên mỗi năm.', description: "Đây là tổng số lượt nhân viên hoàn thành ít nhất một khóa học trên nền tảng trong một năm. Con số này cho thấy sự tham gia tích cực và quy mô của chương trình đào tạo." },
      { title: 'Tỷ lệ hoàn thành khóa học đạt 85%.', description: "Tỷ lệ này được tính bằng số học viên hoàn thành 100% nội dung khóa học chia cho tổng số học viên đã đăng ký. Tỷ lệ cao cho thấy nội dung hấp dẫn và nền tảng dễ sử dụng." },
      { title: 'Tiết kiệm 40% chi phí đào tạo.', description: "Chi phí tiết kiệm được tính bằng cách so sánh tổng chi phí tổ chức các lớp học truyền thống (thuê địa điểm, in ấn tài liệu, chi phí đi lại) với chi phí vận hành và phát triển nội dung cho nền tảng e-learning. Việc chuyển đổi sang hình thức trực tuyến đã cắt giảm đáng kể các chi phí logistics." }
    ],
    qa: [
      { question: "Nền tảng này cung cấp những loại khóa học nào?", answer: "Nền tảng cung cấp đa dạng các khóa học, từ các kỹ năng nghiệp vụ (sản phẩm, quy trình) đến các kỹ năng mềm (giao tiếp, quản lý thời gian) và kiến thức về chuyển đổi số, an toàn thông tin." },
      { question: "Chỉ số 'Tiết kiệm 40% chi phí đào tạo' được tính như thế nào?", answer: "Chi phí tiết kiệm được tính bằng cách so sánh tổng chi phí tổ chức các lớp học truyền thống (thuê địa điểm, in ấn tài liệu, chi phí đi lại) với chi phí vận hành và phát triển nội dung cho nền tảng e-learning. Việc chuyển đổi sang hình thức trực tuyến đã cắt giảm đáng kể các chi phí logistics." },
      { question: "Làm thế nào để theo dõi và đánh giá tiến độ học tập của nhân viên?", answer: "Hệ thống có một dashboard dành riêng cho quản lý, cho phép theo dõi tỷ lệ tham gia, tiến độ hoàn thành và kết quả các bài kiểm tra của từng nhân viên hoặc từng phòng ban. Hệ thống cũng tự động gửi báo cáo và nhắc nhở." },
      { question: "Các khóa học có tính tương tác không?", answer: "Có. Chúng tôi thiết kế các khóa học với nhiều yếu tố tương tác như video, câu đố (quiz), bài tập tình huống và diễn đàn thảo luận để học viên không cảm thấy nhàm chán và có thể áp dụng kiến thức ngay." },
      { question: "Nhân viên có thể học trên thiết bị di động không?", answer: "Chắc chắn rồi. Nền tảng được thiết kế theo phương pháp 'mobile-first', đảm bảo trải nghiệm học tập mượt mà và đầy đủ tính năng trên cả điện thoại thông minh và máy tính bảng." }
    ],
    dashboardData: [
        { name: "Lượt hoàn thành/tháng", data: [{ month: 'Jan', value: 200 }, { month: 'Feb', value: 250 }, { month: 'Mar', value: 350 }, { month: 'Apr', value: 450 }, { month: 'May', value: 550 }, { month: 'Jun', value: 700 }] },
        { name: "Tỷ lệ hài lòng (%)", data: [{ month: 'Jan', value: 80 }, { month: 'Feb', value: 82 }, { month: 'Mar', value: 85 }, { month: 'Apr', value: 88 }, { month: 'May', avalue: 90 }, { month: 'Jun', value: 94 }] },
        { name: "Chi phí/nhân viên (triệu VNĐ)", data: [{ month: 'Jan', value: 5 }, { month: 'Feb', value: 4.8 }, { month: 'Mar', value: 4.5 }, { month: 'Apr', value: 4 }, { month: 'May', value: 3.5 }, { month: 'Jun', value: 3 }] }
    ]
  },
];

// Sample missions data
export const missionsData = [
  {
    id: 1,
    title: 'Hoàn thiện hệ thống AI Chatbot',
    summary: 'Nâng cấp và hoàn thiện hệ thống chatbot thông minh với khả năng xử lý đa ngôn ngữ và tích hợp với các hệ thống nội bộ để cung cấp dịch vụ hỗ trợ khách hàng 24/7.',
    fullDescription: 'Dự án "Hoàn thiện hệ thống AI Chatbot" tập trung vào việc nâng cấp và hoàn thiện hệ thống chatbot thông minh hiện có với các tính năng mới và cải tiến. Mục tiêu chính là tạo ra một chatbot có khả năng xử lý đa ngôn ngữ (Tiếng Việt, Tiếng Anh), tích hợp sâu với các hệ thống nội bộ của ngân hàng, và cung cấp dịch vụ hỗ trợ khách hàng 24/7 với độ chính xác cao. Dự án bao gồm việc cải thiện thuật toán xử lý ngôn ngữ tự nhiên (NLP), tích hợp với hệ thống CRM, và phát triển các tính năng mới như chuyển tiếp thông minh đến nhân viên hỗ trợ khi cần thiết.',
    status: 'Đang diễn ra' as const,
    deadline: '31/12/2024',
    participants: 15,
    io: 'Nguyễn Hoàng Nam',
    backupIo: 'Trần Minh Anh',
    contact: 'Phòng AI & Machine Learning',
    email: 'aichatbotsupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/aichatbot',
    dashboardLink: 'https://dashboard.vietinbank.vn/aichatbot',
    documents: [
      { name: 'Tài liệu thiết kế AI Chatbot.pdf', url: '#' },
      { name: 'Báo cáo hiệu suất chatbot.docx', url: '#' },
      { name: 'Hướng dẫn sử dụng hệ thống.xlsx', url: '#' },
      { name: 'Kế hoạch triển khai giai đoạn 2.pdf', url: '#' },
    ],
    highlightResults: [
      { title: 'Giảm 60% thời gian chờ đợi của khách hàng.', description: "Thời gian chờ đợi được tính từ lúc khách hàng đặt câu hỏi cho đến khi nhận được phản hồi đầu tiên từ nhân viên hỗ trợ. Với chatbot, khách hàng nhận được câu trả lời ngay lập tức, giảm đáng kể so với việc phải chờ kết nối với nhân viên." },
      { title: 'Tỷ lệ hài lòng đạt 92%.', description: "Sau mỗi cuộc hội thoại, chatbot sẽ đưa ra một khảo sát nhanh yêu cầu người dùng đánh giá mức độ hài lòng trên thang điểm 5. Tỷ lệ 92% là tổng số lượt đánh giá 4 và 5 sao trên tổng số lượt đánh giá nhận được." },
      { title: 'Xử lý 10,000+ câu hỏi mỗi ngày.', description: "Đây là tổng số lượng câu hỏi mà chatbot đã tiếp nhận và xử lý thành công trong một ngày cao điểm. Con số này cho thấy khả năng mở rộng và đáp ứng nhu cầu lớn của hệ thống." }
    ],
    qa: [
      { question: "AI Chatbot có thể xử lý những loại câu hỏi nào?", answer: "Chatbot có thể xử lý một loạt các câu hỏi phổ biến như: thông tin về sản phẩm (lãi suất, phí dịch vụ), hướng dẫn sử dụng iPay, tra cứu địa điểm ATM/chi nhánh, và các câu hỏi chung về chính sách của ngân hàng." },
      { question: "Tỷ lệ hài lòng 92% được đo lường ra sao?", answer: "Sau mỗi cuộc hội thoại, chatbot sẽ đưa ra một khảo sát nhanh yêu cầu người dùng đánh giá mức độ hài lòng trên thang điểm 5. Tỷ lệ 92% là tổng số lượt đánh giá 4 và 5 sao trên tổng số lượt đánh giá nhận được." },
      { question: "Điều gì xảy ra nếu chatbot không hiểu câu hỏi của khách hàng?", answer: "Nếu chatbot không thể trả lời câu hỏi sau 2 lần thử, nó sẽ tự động đưa ra tùy chọn để kết nối trực tiếp với nhân viên hỗ trợ. Cuộc trò chuyện và lịch sử sẽ được chuyển liền mạch để nhân viên có thể nắm bắt bối cảnh." },
      { question: "Chatbot có được đào tạo và cập nhật liên tục không?", answer: "Có. Đội ngũ của chúng tôi liên tục phân tích các cuộc hội thoại (đã được ẩn danh) để xác định các điểm yếu và bổ sung kiến thức mới cho chatbot hàng tuần, giúp nó ngày càng thông minh hơn." },
      { question: "Công nghệ xử lý ngôn ngữ tự nhiên (NLP) nào đang được sử dụng?", answer: "Chúng tôi đang sử dụng một mô hình NLP tùy chỉnh được xây dựng dựa trên kiến trúc Transformer, kết hợp với các dịch vụ của Google Dialogflow để có khả năng hiểu ngữ cảnh và ý định của người dùng một cách tốt nhất." }
    ]
  },
  {
    id: 2,
    title: 'Triển khai nền tảng đào tạo trực tuyến',
    summary: 'Xây dựng và triển khai hệ thống đào tạo nội bộ với các khóa học tương tác, đánh giá tự động và theo dõi tiến độ học tập cho toàn bộ nhân viên.',
    fullDescription: 'Dự án "Triển khai nền tảng đào tạo trực tuyến" nhằm mục đích xây dựng một hệ thống đào tạo nội bộ toàn diện cho VietinBank. Nền tảng này sẽ cung cấp các khóa học tương tác với nhiều định dạng nội dung khác nhau như video, bài giảng, câu đố, và bài tập thực hành. Hệ thống sẽ có khả năng đánh giá tự động kết quả học tập, theo dõi tiến độ của từng nhân viên, và tạo ra các báo cáo chi tiết cho quản lý. Mục tiêu là nâng cao năng lực nhân viên thông qua đào tạo liên tục và hiệu quả, đồng thời giảm chi phí đào tạo truyền thống.',
    status: 'Đang diễn ra' as const,
    deadline: '30/11/2024',
    participants: 8,
    io: 'Bùi Văn Thành',
    backupIo: 'Lý Thị Ngọc',
    contact: 'Phòng Đào tạo & Phát triển',
    email: 'e-learningsupport@vietinbank.vn',
    grouplink: 'https://workplace.example.com/groups/e-learning',
    documents: [
      { name: 'Kế hoạch đào tạo năm 2024.pdf', url: '#' },
      { name: 'Danh sách khóa học.docx', url: '#' },
      { name: 'Báo cáo tiến độ đào tạo.xlsx', url: '#' },
      { name: 'Hướng dẫn sử dụng nền tảng.pdf', url: '#' },
    ],
    highlightResults: [
      { title: 'Đào tạo 5,000+ nhân viên mỗi năm.', description: "Đây là tổng số lượt nhân viên hoàn thành ít nhất một khóa học trên nền tảng trong một năm. Con số này cho thấy sự tham gia tích cực và quy mô của chương trình đào tạo." },
      { title: 'Tỷ lệ hoàn thành khóa học đạt 85%.', description: "Tỷ lệ này được tính bằng số học viên hoàn thành 100% nội dung khóa học chia cho tổng số học viên đã đăng ký. Tỷ lệ cao cho thấy nội dung hấp dẫn và nền tảng dễ sử dụng." },
      { title: 'Tiết kiệm 40% chi phí đào tạo.', description: "Chi phí tiết kiệm được tính bằng cách so sánh tổng chi phí tổ chức các lớp học truyền thống (thuê địa điểm, in ấn tài liệu, chi phí đi lại) với chi phí vận hành và phát triển nội dung cho nền tảng e-learning. Việc chuyển đổi sang hình thức trực tuyến đã cắt giảm đáng kể các chi phí logistics." }
    ],
    qa: [
      { question: "Nền tảng này cung cấp những loại khóa học nào?", answer: "Nền tảng cung cấp đa dạng các khóa học, từ các kỹ năng nghiệp vụ (sản phẩm, quy trình) đến các kỹ năng mềm (giao tiếp, quản lý thời gian) và kiến thức về chuyển đổi số, an toàn thông tin." },
      { question: "Chỉ số 'Tiết kiệm 40% chi phí đào tạo' được tính như thế nào?", answer: "Chi phí tiết kiệm được tính bằng cách so sánh tổng chi phí tổ chức các lớp học truyền thống (thuê địa điểm, in ấn tài liệu, chi phí đi lại) với chi phí vận hành và phát triển nội dung cho nền tảng e-learning. Việc chuyển đổi sang hình thức trực tuyến đã cắt giảm đáng kể các chi phí logistics." },
      { question: "Làm thế nào để theo dõi và đánh giá tiến độ học tập của nhân viên?", answer: "Hệ thống có một dashboard dành riêng cho quản lý, cho phép theo dõi tỷ lệ tham gia, tiến độ hoàn thành và kết quả các bài kiểm tra của từng nhân viên hoặc từng phòng ban. Hệ thống cũng tự động gửi báo cáo và nhắc nhở." },
      { question: "Các khóa học có tính tương tác không?", answer: "Có. Chúng tôi thiết kế các khóa học với nhiều yếu tố tương tác như video, câu đố (quiz), bài tập tình huống và diễn đàn thảo luận để học viên không cảm thấy nhàm chán và có thể áp dụng kiến thức ngay." },
      { question: "Nhân viên có thể học trên thiết bị di động không?", answer: "Chắc chắn rồi. Nền tảng được thiết kế theo phương pháp 'mobile-first', đảm bảo trải nghiệm học tập mượt mà và đầy đủ tính năng trên cả điện thoại thông minh và máy tính bảng." }
    ]
  },
  {
    id: 3,
    title: 'Nâng cấp hệ thống bảo mật thông tin',
    summary: 'Cập nhật và nâng cấp toàn bộ hệ thống bảo mật thông tin với các công nghệ mới nhất để đảm bảo an toàn cho dữ liệu khách hàng và hoạt động nội bộ.',
    fullDescription: 'Dự án "Nâng cấp hệ thống bảo mật thông tin" tập trung vào việc cập nhật và nâng cấp toàn bộ hệ thống bảo mật của VietinBank với các công nghệ mới nhất. Dự án bao gồm việc triển khai các giải pháp bảo mật đa lớp, cập nhật các giao thức mã hóa, và nâng cấp hệ thống phát hiện xâm nhập. Mục tiêu là đảm bảo an toàn tuyệt đối cho dữ liệu khách hàng và các hoạt động nội bộ của ngân hàng, đồng thời tuân thủ các tiêu chuẩn bảo mật quốc tế.',
    status: 'Đã kết thúc' as const,
    deadline: '15/10/2024',
    participants: 12,
    io: 'Phạm Văn Hùng',
    backupIo: 'Nguyễn Thị Lan',
    contact: 'Phòng Bảo mật & An toàn thông tin',
    email: 'securitysupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/security',
    documents: [
      { name: 'Báo cáo đánh giá bảo mật.pdf', url: '#' },
      { name: 'Kế hoạch triển khai bảo mật.docx', url: '#' },
      { name: 'Hướng dẫn sử dụng hệ thống.xlsx', url: '#' },
    ],
    highlightResults: [
      { title: 'Nâng cấp 100% hệ thống bảo mật.', description: "Tất cả các hệ thống bảo mật đã được nâng cấp lên phiên bản mới nhất với các tính năng bảo mật tiên tiến, bao gồm mã hóa đầu cuối, xác thực đa yếu tố, và giám sát bảo mật 24/7." },
      { title: 'Tuân thủ 100% tiêu chuẩn quốc tế.', description: "Hệ thống đã được chứng nhận tuân thủ các tiêu chuẩn bảo mật quốc tế như ISO 27001, PCI DSS, và các quy định của Ngân hàng Nhà nước Việt Nam." },
      { title: 'Giảm 95% các mối đe dọa bảo mật.', description: "Sau khi triển khai hệ thống bảo mật mới, số lượng các mối đe dọa bảo mật đã giảm đáng kể, đảm bảo an toàn cho toàn bộ hệ thống thông tin của ngân hàng." }
    ],
    qa: [
      { question: "Hệ thống bảo mật mới có những tính năng gì?", answer: "Hệ thống bảo mật mới bao gồm mã hóa đầu cuối, xác thực đa yếu tố (MFA), giám sát bảo mật 24/7, phát hiện xâm nhập thông minh, và các công cụ phân tích bảo mật tiên tiến." },
      { question: "Làm thế nào để đảm bảo tuân thủ các tiêu chuẩn quốc tế?", answer: "Chúng tôi đã thực hiện đánh giá toàn diện và triển khai các biện pháp bảo mật theo đúng yêu cầu của các tiêu chuẩn ISO 27001, PCI DSS, và các quy định của Ngân hàng Nhà nước." },
      { question: "Nhân viên có cần đào tạo về hệ thống bảo mật mới không?", answer: "Có, tất cả nhân viên đã được đào tạo về các quy trình bảo mật mới, cách sử dụng xác thực đa yếu tố, và các biện pháp bảo mật cơ bản để đảm bảo an toàn thông tin." }
    ]
  },
  {
    id: 4,
    title: 'Tự động hóa quy trình phê duyệt tín dụng',
    summary: 'Phát triển hệ thống tự động hóa quy trình phê duyệt tín dụng với AI để giảm thời gian xử lý và nâng cao độ chính xác trong đánh giá rủi ro.',
    fullDescription: 'Dự án "Tự động hóa quy trình phê duyệt tín dụng" nhằm mục đích phát triển một hệ thống thông minh sử dụng trí tuệ nhân tạo để tự động hóa quy trình phê duyệt tín dụng. Hệ thống sẽ tích hợp với các nguồn dữ liệu khác nhau để đánh giá rủi ro một cách toàn diện, từ đó đưa ra quyết định phê duyệt hoặc từ chối khoản vay một cách nhanh chóng và chính xác. Mục tiêu là giảm thời gian xử lý hồ sơ, nâng cao độ chính xác trong đánh giá rủi ro, và cải thiện trải nghiệm khách hàng.',
    status: 'Đang diễn ra' as const,
    deadline: '28/02/2025',
    participants: 20,
    io: 'Lê Văn Dũng',
    backupIo: 'Trần Thị Hương',
    contact: 'Phòng Tín dụng & Rủi ro',
    email: 'creditapprovalsupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/creditapproval',
    documents: [
      { name: 'Thiết kế hệ thống AI.pdf', url: '#' },
      { name: 'Quy trình phê duyệt tự động.docx', url: '#' },
      { name: 'Báo cáo đánh giá rủi ro.xlsx', url: '#' },
      { name: 'Hướng dẫn sử dụng hệ thống.pdf', url: '#' },
    ],
    highlightResults: [
      { title: 'Giảm 70% thời gian phê duyệt.', description: "Thời gian phê duyệt trung bình đã giảm từ 5 ngày xuống còn 1.5 ngày nhờ việc tự động hóa các bước đánh giá và tích hợp AI trong quy trình ra quyết định." },
      { title: 'Tăng 30% độ chính xác đánh giá rủi ro.', description: "Hệ thống AI đã cải thiện độ chính xác trong việc đánh giá rủi ro tín dụng bằng cách phân tích đa chiều các yếu tố và dữ liệu lịch sử." },
      { title: 'Xử lý 500+ hồ sơ mỗi ngày.', description: "Hệ thống có khả năng xử lý hơn 500 hồ sơ tín dụng mỗi ngày, tăng đáng kể so với năng lực xử lý thủ công trước đây." }
    ],
    qa: [
      { question: "Hệ thống AI đánh giá rủi ro như thế nào?", answer: "Hệ thống AI phân tích đa chiều các yếu tố như lịch sử tín dụng, thu nhập, tài sản, và các chỉ số tài chính khác để đưa ra đánh giá rủi ro toàn diện và chính xác." },
      { question: "Làm thế nào để đảm bảo tính minh bạch trong quyết định AI?", answer: "Hệ thống cung cấp báo cáo chi tiết về các yếu tố ảnh hưởng đến quyết định, cho phép nhân viên hiểu rõ lý do đằng sau mỗi quyết định phê duyệt hoặc từ chối." },
      { question: "Có cần sự can thiệp của con người trong quy trình không?", answer: "Hệ thống tự động xử lý 80% các hồ sơ đơn giản, trong khi 20% hồ sơ phức tạp sẽ được chuyển cho nhân viên có kinh nghiệm để đánh giá thêm." },
      { question: "Hệ thống có thể xử lý các loại tín dụng nào?", answer: "Hiện tại hệ thống xử lý tín dụng tiêu dùng và tín dụng doanh nghiệp vừa và nhỏ. Chúng tôi đang mở rộng để xử lý các loại tín dụng phức tạp hơn." }
    ]
  },
  {
    id: 5,
    title: 'Xây dựng hệ thống báo cáo thời gian thực',
    summary: 'Phát triển dashboard báo cáo thời gian thực cho ban lãnh đạo với khả năng phân tích dữ liệu và đưa ra các chỉ số KPI quan trọng.',
    fullDescription: 'Dự án "Xây dựng hệ thống báo cáo thời gian thực" tập trung vào việc phát triển một dashboard báo cáo thông minh cho ban lãnh đạo VietinBank. Hệ thống sẽ tích hợp dữ liệu từ nhiều nguồn khác nhau để tạo ra các báo cáo thời gian thực với các chỉ số KPI quan trọng. Dashboard sẽ có khả năng phân tích dữ liệu, tạo ra các biểu đồ trực quan, và đưa ra các cảnh báo tự động khi có sự thay đổi bất thường. Mục tiêu là cung cấp thông tin chính xác và kịp thời để hỗ trợ ra quyết định chiến lược.',
    status: 'Đã kết thúc' as const,
    deadline: '30/09/2024',
    participants: 10,
    io: 'Vũ Thị Mai',
    backupIo: 'Hoàng Văn Sơn',
    contact: 'Phòng Phân tích Dữ liệu',
    email: 'bireportingsupport@vietinbank.vn',
    grouplink: 'https://zalo.com/groups/bireporting',
    documents: [
      { name: 'Yêu cầu hệ thống báo cáo.pdf', url: '#' },
      { name: 'Thiết kế dashboard.docx', url: '#' },
      { name: 'Báo cáo triển khai.xlsx', url: '#' },
      { name: 'Hướng dẫn sử dụng dashboard.pdf', url: '#' },
    ],
    highlightResults: [
      { title: 'Tạo báo cáo tự động 100%.', description: "Tất cả các báo cáo hoạt động định kỳ trước đây được thực hiện thủ công nay đã được tự động hóa hoàn toàn. Hệ thống tự động trích xuất, xử lý và trình bày dữ liệu mà không cần sự can thiệp của con người." },
      { title: 'Tiết kiệm 300 giờ làm việc mỗi tháng.', description: "Đây là tổng thời gian mà các chuyên viên phân tích tiết kiệm được từ việc không phải tổng hợp dữ liệu thủ công. Thời gian này được chuyển sang các hoạt động phân tích chuyên sâu và đưa ra các đề xuất kinh doanh." },
      { title: 'Độ chính xác dữ liệu đạt 99.9%.', description: "Độ chính xác được đảm bảo bằng cách kết nối trực tiếp với các hệ thống nguồn (core banking, CRM) thông qua API, loại bỏ hoàn toàn bước nhập liệu thủ công. Con số 99.9% được xác định thông qua các quy trình đối soát và kiểm toán dữ liệu tự động." }
    ],
    qa: [
      { question: "Hệ thống này tự động hóa những loại báo cáo nào?", answer: "Hệ thống có thể tự động hóa hầu hết các báo cáo hoạt động hàng ngày, hàng tuần và hàng tháng, chẳng hạn như báo cáo kinh doanh, báo cáo rủi ro, và báo cáo hiệu suất hoạt động của các chi nhánh." },
      { question: "Làm thế nào để đảm bảo 'Độ chính xác dữ liệu đạt 99.9%'?", answer: "Độ chính xác được đảm bảo bằng cách kết nối trực tiếp với các hệ thống nguồn (core banking, CRM) thông qua API, loại bỏ hoàn toàn bước nhập liệu thủ công. Con số 99.9% được xác định thông qua các quy trình đối soát và kiểm toán dữ liệu tự động." },
      { question: "Ban lãnh đạo tương tác với dashboard này như thế nào?", answer: "Ban lãnh đạo có thể truy cập dashboard thông qua trình duyệt web trên máy tính hoặc máy tính bảng. Dashboard có giao diện tương tác, cho phép lọc, sắp xếp và xem chi tiết dữ liệu (drill-down) chỉ với vài cú nhấp chuột." },
      { question: "Dữ liệu trên dashboard có phải là dữ liệu thời gian thực không?", answer: "Dữ liệu được cập nhật gần như thời gian thực. Hầu hết các chỉ số được làm mới sau mỗi 15 phút, đảm bảo ban lãnh đạo luôn có thông tin mới nhất để ra quyết định." },
      { question: "Việc xây dựng hệ thống này có phức tạp không?", answer: "Việc xây dựng đòi hỏi chuyên môn về kỹ thuật dữ liệu và phân tích kinh doanh. Thách thức lớn nhất là việc làm sạch và hợp nhất dữ liệu từ nhiều hệ thống nguồn khác nhau để tạo ra một nguồn dữ liệu duy nhất và đáng tin cậy (Single Source of Truth)." }
    ]
  },
];

// Helper function to filter items by IDs
export const getItemsByIds = <T extends { id: number }>(items: T[], ids: number[]): T[] => {
  return items.filter(item => ids.includes(item.id));
}