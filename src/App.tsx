import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DashboardHighlightCard from './components/DashboardHighlightCard';
import NewsArticleCard from './components/NewArticleCard';
import RecognitionPost from './components/RecognitionPostCard';
import { Separator } from './components/Separator';
import InitiativesPage from './pages/InitiativesPage';
import NewsUpdatePage from './pages/NewsUpdatePage';
import RecognitionPage from './pages/RecognitionPage';
import ViewAllButton from './components/ViewAllButton';
import InitiativeCard from './components/InitiativeCard'; // <<--- BƯỚC 1: IMPORT INITIATIVECARD

// Configuration for homepage content - specify which items to display by ID
const HOMEPAGE_CONFIG = {
  // Specify which recognition posts to show on homepage (by ID)
  featuredRecognitionPosts: [1, 2],
  
  // Specify which news articles to show on homepage (by ID)
  featuredNewsArticles: [1, 2, 3, 4],
  
  // Specify which initiatives to show on homepage (by ID)
  featuredInitiatives: [1, 2, 4]
};

// Sample news articles data
const newsArticles = [
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
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
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
const recognitionPosts = [
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
const initiativesData = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
    title: 'Giải ngân online',
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
    title: 'iPay & eFast',
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
    title: 'Tự động hoá quy trình BPM',
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
    title: 'AI Chatbot Hỗ trợ',
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
    title: 'Hệ thống Báo cáo Thông minh',
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
    title: 'Nền tảng Đào tạo Trực tuyến',
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
const getItemsByIds = <T extends { id: number }>(items: T[], ids: number[]): T[] => {
  return items.filter(item => ids.includes(item.id));
};

function HomePage() {
  const navigate = useNavigate(); // Hook để điều hướng

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get featured items based on configuration
  const featuredRecognitionPosts = getItemsByIds(recognitionPosts, HOMEPAGE_CONFIG.featuredRecognitionPosts);
  const featuredNewsArticles = getItemsByIds(newsArticles, HOMEPAGE_CONFIG.featuredNewsArticles);
  const featuredInitiatives = getItemsByIds(initiativesData, HOMEPAGE_CONFIG.featuredInitiatives);

  const handleReadMore = (articleId: number) => {
    alert(`Đang mở bài viết có ID: ${articleId}`);
  };

  const handleLike = (postId: number) => {
    alert(`Đã thích bài đăng ${postId}`);
  };

  const handleComment = (postId: number) => {
    alert(`Mở bình luận cho bài đăng ${postId}`);
  };

  const handleShare = (postId: number) => {
    alert(`Chia sẻ bài đăng ${postId}`);
  };

  const handleViewInitiative = (initiativeId: number) => {
    alert(`Đang xem chi tiết sáng kiến có ID: ${initiativeId}`);
  };

  return (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
          {/* Header and Dashboard Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            
            {/* Left Column: Header */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-center mb-4">
                <img 
                  src="./X01-logo-nobackground.png" 
                  alt="X01 logo" 
                  className="h-64 w-auto"
                />
              </div>
              <p className="text-xl text-center text-gray-600">
                Hành trình Chuyển đổi của VietinBank
              </p>
            </div>

            {/* Right Column: Dashboard Section */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6 text-center lg:text-left">
                Thông tin nổi bật
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <DashboardHighlightCard
                  title="TOI"
                  value="$45,231"
                  trendValue="+20.1%"
                  trendDirection="up"
                  description="vs tháng trước"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>}
                />
                <DashboardHighlightCard
                  title="MAU"
                  value="2,350"
                  trendValue="+15.3%"
                  trendDirection="up"
                  description="vs tháng trước"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                />
                <DashboardHighlightCard
                  title="Mức độ hài lòng"
                  value="78%"
                  trendValue="-3.2%"
                  trendDirection="down"
                  description="vs tháng trước"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                />
                <DashboardHighlightCard
                  title="Tỷ lệ chuyển đổi"
                  value="2.4%"
                  trendValue="+8.7%"
                  trendDirection="up"
                  description="vs tháng trước"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>}
                />
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Recognition Posts Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-900">Vinh danh & Ghi nhận</h2>
              <ViewAllButton label="Xem tất cả" onClick={() => navigate('/recognition')} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredRecognitionPosts.map((post) => (
                <RecognitionPost
                  key={post.id}
                  posterAvatarUrl={post.posterAvatarUrl}
                  posterName={post.posterName}
                  timestamp={post.timestamp}
                  content={post.content}
                  honorees={post.honorees}
                  likeCount={post.likeCount}
                  commentCount={post.commentCount}
                  onLike={() => handleLike(post.id)}
                  onComment={() => handleComment(post.id)}
                  onShare={() => handleShare(post.id)}
                />
              ))}
            </div>
          </section>

          <Separator className="my-8" />

          {/* Featured Initiatives Section -- ĐÃ ĐƯỢC TÁI CẤU TRÚC */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-900">Sáng kiến nổi bật</h2>
              <ViewAllButton label="Xem tất cả" onClick={() => navigate('/initiatives')} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredInitiatives.map((initiative) => (
                <InitiativeCard
                  key={initiative.id}
                  imageUrl={initiative.imageUrl}
                  title={initiative.title}
                  summary={initiative.summary}
                  members={initiative.members}
                  highlightResults={initiative.highlightResults}
                  onViewDetails={() => handleViewInitiative(initiative.id)}
                />
              ))}
            </div>
          </section>

          <Separator className="my-8" />

          {/* News Articles Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-900">Tin tức & Cập nhật</h2>
              <ViewAllButton label="Xem tất cả tin tức" onClick={() => navigate('/newsupdate')} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredNewsArticles.map((article) => (
                <NewsArticleCard
                  key={article.id}
                  imageUrl={article.imageUrl}
                  category={article.category}
                  title={article.title}
                  summary={article.summary}
                  onReadMore={() => handleReadMore(article.id)}
                />
              ))}
            </div>
          </section>

          <Separator className="my-8" />

          {/* Footer */}
          <div className="text-center text-gray-500">
            <p>Vibe coded and fast shipped by TO</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Navigation() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-blue-600">
              <div className="flex justify-center lg:justify-center mb-4">
                <img 
                  src="./X01-logo-nobackground.png" 
                  alt="X01 logo" 
                  className="h-10 w-auto"
                />
              </div>
            </Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Trang chủ
            </Link>
            <Link to="/initiatives" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sáng kiến
            </Link>
            <Link to="/newsupdate" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tin tức & Cập nhật
            </Link>
            <Link to="/recognition" className="text-gray-700 hover:text-blue-600 transition-colors">
              Vinh danh
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recognition" element={<RecognitionPage />} />
          <Route path="/initiatives" element={<InitiativesPage />} />
          <Route path="/newsupdate" element={<NewsUpdatePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;