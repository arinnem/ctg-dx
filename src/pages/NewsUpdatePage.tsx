// src/pages/NewsUpdatePage.tsx

import { useState, useMemo, useEffect } from 'react';
import NewsArticleCard from '../components/NewArticleCard';

// --- Dữ liệu giả lập (Mock Data) ---
const newsArticlesData = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
    category: 'Chuyển đổi số',
    title: 'VietinBank ra mắt nền tảng ngân hàng số thế hệ mới',
    summary: 'Ngân hàng TMCP Công thương Việt Nam (VietinBank) vừa chính thức ra mắt nền tảng ngân hàng số thế hệ mới với nhiều tính năng ưu việt.',
    publishDate: '2024-01-15',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    category: 'Công nghệ',
    title: 'Ứng dụng AI trong quy trình thẩm định tín dụng',
    summary: 'VietinBank đã triển khai thành công hệ thống AI trong quy trình thẩm định tín dụng, giúp giảm thời gian xử lý hồ sơ.',
    publishDate: '2024-01-12',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-3151cf794014?w=800',
    category: 'Đổi mới',
    title: 'Tự động hóa quy trình nội bộ với RPA',
    summary: 'Dự án tự động hóa quy trình nội bộ sử dụng công nghệ RPA đã mang lại hiệu quả đáng kể.',
    publishDate: '2024-01-10',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    category: 'Trải nghiệm khách hàng',
    title: 'Chatbot thông minh hỗ trợ khách hàng 24/7',
    summary: 'VietinBank triển khai chatbot thông minh với khả năng xử lý hơn 10,000 câu hỏi mỗi ngày.',
    publishDate: '2024-01-08',
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    category: 'Bảo mật',
    title: 'Nâng cấp hệ thống bảo mật thông tin',
    summary: 'VietinBank đã triển khai hệ thống bảo mật thông tin thế hệ mới với công nghệ blockchain.',
    publishDate: '2024-01-05',
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    category: 'Đào tạo',
    title: 'Chương trình đào tạo nhân viên về công nghệ mới',
    summary: 'VietinBank khởi động chương trình đào tạo toàn diện cho nhân viên về các công nghệ mới.',
    publishDate: '2024-01-03',
  },
];

// --- Component Trang Tin tức & Cập nhật ---

const NewsUpdatePage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter news articles based on search query
  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) {
      return newsArticlesData;
    }
    
    const query = searchQuery.toLowerCase();
    return newsArticlesData.filter(article => 
      article.title.toLowerCase().includes(query) ||
      article.summary.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Hàm xử lý sự kiện khi người dùng nhấn "Đọc thêm"
  const handleReadMore = (articleId: number) => {
    // Trong một ứng dụng thực tế, bạn sẽ sử dụng thư viện routing
    // để điều hướng người dùng đến trang chi tiết bài viết.
    alert(`Đang mở bài viết có ID: ${articleId}`);
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
              <h1 className="text-3xl font-bold text-gray-900">Tin tức & Cập nhật</h1>
              <p className="mt-1 text-gray-500">
                Cập nhật mới nhất về hành trình chuyển đổi số của VietinBank.
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
              Tìm thấy {filteredArticles.length} bài viết cho "{searchQuery}"
            </p>
          </div>
        )}

        {/* Content based on view mode */}
        {viewMode === 'grid' ? (
          // Grid View
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <NewsArticleCard
                  key={article.id}
                  imageUrl={article.imageUrl}
                  category={article.category}
                  title={article.title}
                  summary={article.summary}
                  onReadMore={() => handleReadMore(article.id)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Không tìm thấy bài viết</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Thử tìm kiếm với từ khóa khác.
                </p>
              </div>
            )}
          </main>
        ) : (
          // List View
          <main className="space-y-6">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        className="w-full h-48 md:h-full object-cover" 
                        src={article.imageUrl} 
                        alt={`Hình ảnh cho bài viết ${article.title}`} 
                      />
                    </div>
                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-semibold text-[#DD0031]">{article.category.toUpperCase()}</p>
                          <p className="text-sm text-gray-500">{article.publishDate}</p>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                        <p className="text-gray-600">{article.summary}</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <button
                          onClick={() => handleReadMore(article.id)}
                          className="inline-flex items-center text-sm font-semibold text-[#005AAB] hover:text-[#DD0031] transition-colors"
                        >
                          Đọc thêm
                          <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
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
                <h3 className="mt-2 text-sm font-medium text-gray-900">Không tìm thấy bài viết</h3>
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

export default NewsUpdatePage; 