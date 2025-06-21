// src/pages/InitiativesPage.tsx

import { useState, useMemo, useEffect } from 'react';
import InitiativeCard from '../components/InitiativeCard';
import InitiativeCarousel from '../components/InitiativeCarousel';

// --- Dữ liệu giả lập (Mock Data) ---
// Trong một ứng dụng thực tế, dữ liệu này sẽ được lấy từ API

const initiativesData = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
    title: 'Giải ngân online',
    summary: 'Xây dựng nền tảng số hóa hoàn toàn quy trình cấp tín dụng cho khách hàng doanh nghiệp, từ lúc nộp hồ sơ đến khi giải ngân.',
    members: [
      { avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'Trần Văn Mạnh', role: 'IO' as const },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Lê Thuỳ Trang', role: 'Backup IO' as const },
      { avatarUrl: 'https://randomuser.me/api/portraits/men/35.jpg', name: 'Phạm Minh Tuấn', role: 'Thành viên' as const },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/52.jpg', name: 'Vũ Thị Lan', role: 'Thành viên' as const },
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
      { avatarUrl: 'https://randomuser.me/api/portraits/women/71.jpg', name: 'Đặng Ngọc Bích', role: 'Thành viên' as const },
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
      { avatarUrl: 'https://randomuser.me/api/portraits/men/18.jpg', name: 'Đinh Tuấn Kiệt', role: 'Thành viên' as const },
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
      { avatarUrl: 'https://randomuser.me/api/portraits/men/67.jpg', name: 'Lê Văn Dũng', role: 'Thành viên' as const },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/89.jpg', name: 'Phạm Thị Hương', role: 'Thành viên' as const },
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
      { avatarUrl: 'https://randomuser.me/api/portraits/women/41.jpg', name: 'Đỗ Thị Hoa', role: 'Thành viên' as const },
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
      { avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg', name: 'Trần Văn Hải', role: 'Thành viên' as const },
      { avatarUrl: 'https://randomuser.me/api/portraits/women/28.jpg', name: 'Nguyễn Thị Linh', role: 'Thành viên' as const },
    ],
    highlightResults: [
      'Đào tạo 5,000+ nhân viên mỗi năm.',
      'Tỷ lệ hoàn thành khóa học đạt 85%.',
      'Tiết kiệm 40% chi phí đào tạo.',
    ],
  },
];

// --- Component Trang Sáng kiến ---

const InitiativesPage = () => {
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter initiatives based on search query
  const filteredInitiatives = useMemo(() => {
    if (!searchQuery.trim()) {
      return initiativesData;
    }
    
    const query = searchQuery.toLowerCase();
    return initiativesData.filter(initiative => 
      initiative.title.toLowerCase().includes(query) ||
      initiative.summary.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Hàm xử lý sự kiện khi người dùng nhấn nút "Xem chi tiết"
  const handleViewDetails = (initiativeId: number) => {
    // Trong một ứng dụng thực tế, bạn sẽ sử dụng thư viện routing (ví dụ: React Router)
    // để điều hướng người dùng đến trang chi tiết.
    // Ví dụ: navigate(`/initiatives/${initiativeId}`);
    alert(`Đang điều hướng đến trang chi tiết của sáng kiến có ID: ${initiativeId}`);
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
                onClick={() => setViewMode('carousel')}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 text-sm ${
                  viewMode === 'carousel'
                    ? 'bg-blue-300 text-navy-400 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <svg className="w-4 h-4 inline mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Carousel
              </button>
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
            </div>

            {/* Center - Page Title */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-900">Sáng kiến Chuyển đổi số</h1>
              <p className="mt-1 text-gray-500">
                Khám phá những sáng kiến đang thúc đẩy đổi mới & sáng tạo tại VietinBank.
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
              Tìm thấy {filteredInitiatives.length} sáng kiến cho "{searchQuery}"
            </p>
          </div>
        )}

        {/* Content based on view mode */}
        {viewMode === 'carousel' ? (
          // Carousel View
          <main className="mb-8">
            {filteredInitiatives.length > 0 ? (
              <InitiativeCarousel
                initiatives={filteredInitiatives}
                onViewDetails={handleViewDetails}
              />
            ) : (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Không tìm thấy sáng kiến</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Thử tìm kiếm với từ khóa khác.
                </p>
              </div>
            )}
          </main>
        ) : (
          // Grid View
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInitiatives.length > 0 ? (
              filteredInitiatives.map((initiative) => (
                <InitiativeCard
                  key={initiative.id}
                  imageUrl={initiative.imageUrl}
                  title={initiative.title}
                  summary={initiative.summary}
                  members={initiative.members}
                  highlightResults={initiative.highlightResults}
                  onViewDetails={() => handleViewDetails(initiative.id)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Không tìm thấy sáng kiến</h3>
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

export default InitiativesPage;
