// src/pages/RecognitionPage.tsx

import { useState, useMemo, useEffect } from 'react';
import RecognitionPost from '../components/RecognitionPostCard';

// --- Dữ liệu giả lập (Mock Data) ---
const recognitionPostsData = [
  {
    id: 1,
    posterAvatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    posterName: 'Phòng Truyền thông',
    timestamp: '2 giờ trước',
    content: '🎉 Năm 2024, các Chi nhánh đã rất tích cực tham gia vào chương trình thi đua năm 2024. 10 Chi nhánh đã đạt được thành tích và được BLĐ vinh danh tại Hội nghị tổng kết năm 2024.',
    honorees: [
      { avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'Chi nhánh TP.HCM' },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Chi nhánh Đà Nẵng' },
      { avatarUrl: 'https://randomuser.me/api/portraits/men/55.jpg', name: 'Chi nhánh Hà Nội' },
    ],
    likeCount: 156,
    commentCount: 23,
    type: 'branch'
  },
  {
    id: 2,
    posterAvatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    posterName: 'Khối Công nghệ Thông tin',
    timestamp: '1 ngày trước',
    content: '🌟 Năm 2024, các đội nhóm đã rất tích cực triển khai xây dựng và thúc đẩy sáng kiến. 05 Sáng kiến đã đạt được thành tích và được BLĐ vinh danh tại Hội nghị tổng kết năm 2024.',
    honorees: [
      { avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg', name: 'Đội AI Chatbot' },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg', name: 'Đội RPA' },
      { avatarUrl: 'https://randomuser.me/api/portraits/men/67.jpg', name: 'Đội Mobile App' },
    ],
    likeCount: 89,
    commentCount: 15,
    type: 'initiative'
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
    type: 'branch'
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
    type: 'initiative'
  },
  {
    id: 5,
    posterAvatarUrl: 'https://randomuser.me/api/portraits/men/88.jpg',
    posterName: 'Ban Điều hành',
    timestamp: '2 tuần trước',
    content: '🎯 Chi nhánh Đà Nẵng đã thể hiện xuất sắc trong việc áp dụng công nghệ RPA! Với dự án tự động hóa quy trình nội bộ, chi nhánh đã tăng 20% năng suất làm việc.',
    honorees: [
      { avatarUrl: 'https://randomuser.me/api/portraits/women/95.jpg', name: 'Chi nhánh Đà Nẵng' },
      { avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg', name: 'Phòng Vận hành' },
    ],
    likeCount: 178,
    commentCount: 27,
    type: 'branch'
  },
  {
    id: 6,
    posterAvatarUrl: 'https://randomuser.me/api/portraits/women/95.jpg',
    posterName: 'Phòng Sản phẩm Số',
    timestamp: '3 tuần trước',
    content: '🚀 Dự án "iPay & eFast" đã đạt được những thành tựu đáng tự hào! Ứng dụng đã thu hút 10% người dùng mới sau 3 tháng và lọt vào top 3 ứng dụng tài chính.',
    honorees: [
      { avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg', name: 'Đội Mobile' },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg', name: 'Đội UX/UI' },
      { avatarUrl: 'https://randomuser.me/api/portraits/men/67.jpg', name: 'Đội Backend' },
    ],
    likeCount: 245,
    commentCount: 42,
    type: 'initiative'
  }
];

// --- Component Trang Vinh danh ---

const RecognitionPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter recognition posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return recognitionPostsData;
    }
    
    const query = searchQuery.toLowerCase();
    return recognitionPostsData.filter(post => 
      post.content.toLowerCase().includes(query) ||
      post.posterName.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Handle post interactions
  const handleLike = (postId: number) => {
    alert(`Đã thích bài đăng ${postId}`);
  };

  const handleComment = (postId: number) => {
    alert(`Mở bình luận cho bài đăng ${postId}`);
  };

  const handleShare = (postId: number) => {
    alert(`Chia sẻ bài đăng ${postId}`);
  };

  return (
    // Container chính của trang với màu nền xám nhạt và padding
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with View Mode Toggle and Search */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Left side - View Mode Toggle */}
            <div className="bg-gray-50 rounded-lg p-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 text-sm ${
                  viewMode === 'grid'
                    ? 'bg-blue-300 text-navy-400 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <svg className="w-4 h-4 inline mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 text-sm ${
                  viewMode === 'list'
                    ? 'bg-blue-300 text-navy-400 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <svg className="w-4 h-4 inline mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                List
              </button>
            </div>

            {/* Center - Page Title */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-900">Vinh danh & Ghi nhận</h1>
              <p className="mt-1 text-gray-500">
                Chia sẻ những thành tựu và sự đổi mới của VietinBank
              </p>
            </div>

            {/* Right side - Search Box */}
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>
        </header>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="text-center mb-6">
            <p className="text-sm text-gray-600">
              Tìm thấy {filteredPosts.length} bài đăng cho "{searchQuery}"
            </p>
          </div>
        )}

        {/* Content based on view mode */}
        {viewMode === 'grid' ? (
          // Grid View
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Không tìm thấy bài đăng</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Thử tìm kiếm với từ khóa khác.
                </p>
              </div>
            )}
          </main>
        ) : (
          // List View
          <main className="space-y-6">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Ghi nhận và vinh danh</h4>
                        <div className="flex space-x-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                          {post.honorees.map((honoree, index) => (
                            <div key={index} className="flex-shrink-0 w-24 text-center">
                              <img className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-blue-200" src={honoree.avatarUrl} alt={honoree.name} />
                              <p className="mt-2 text-sm font-semibold text-gray-800">{honoree.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <img className="w-12 h-12 rounded-full object-cover" src={post.posterAvatarUrl} alt={`Avatar của ${post.posterName}`} />
                          <div>
                            <p className="font-bold text-gray-800">{post.posterName}</p>
                            <p className="text-xs text-gray-500">{post.timestamp}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{post.content}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <p>{post.likeCount} lượt thích</p>
                          <p>{post.commentCount} bình luận</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex justify-around items-center">
                          <button
                            onClick={() => handleLike(post.id)}
                            className="flex items-center space-x-2 text-gray-600 hover:text-[#DD0031] transition-colors"
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                            </svg>
                            <span>Thích</span>
                          </button>
                          <button
                            onClick={() => handleComment(post.id)}
                            className="flex items-center space-x-2 text-gray-600 hover:text-[#005AAB] transition-colors"
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>Bình luận</span>
                          </button>
                          <button
                            onClick={() => handleShare(post.id)}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                            </svg>
                            <span>Chia sẻ</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Không tìm thấy bài đăng</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Thử tìm kiếm với từ khóa khác.
                </p>
              </div>
            )}
          </main>
        )}

      </div>
    </div>
  );
};

export default RecognitionPage; 