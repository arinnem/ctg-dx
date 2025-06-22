// src/pages/InitiativesPage.tsx

import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InitiativeCard from '../components/InitiativeCard';
import InitiativeCarousel from '../components/InitiativeCarousel';
import { initiativesData } from '../data/mockData';

// --- Component Trang Sáng kiến ---

const InitiativesPage = () => {
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

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
    navigate(`/initiatives/${initiativeId}`);
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
