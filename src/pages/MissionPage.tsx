import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MissionCard from '../components/MissionCard';
import { missionsData } from '../data/mockData';

// --- Component Trang Nhiệm vụ ---

const MissionPage = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter missions based on search query
  const filteredMissions = useMemo(() => {
    let missions = missionsData;
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      missions = missionsData.filter(mission => 
        mission.title.toLowerCase().includes(query) ||
        mission.summary.toLowerCase().includes(query) ||
        mission.status.toLowerCase().includes(query)
      );
    }
    
    // Sort missions: active missions first, then by deadline
    return missions.sort((a, b) => {
      // First sort by status: "Đang diễn ra" comes before "Đã kết thúc"
      if (a.status === 'Đang diễn ra' && b.status === 'Đã kết thúc') {
        return -1;
      }
      if (a.status === 'Đã kết thúc' && b.status === 'Đang diễn ra') {
        return 1;
      }
      
      // If both have same status, sort by deadline (earlier deadline first)
      const dateA = new Date(a.deadline.split('/').reverse().join('-'));
      const dateB = new Date(b.deadline.split('/').reverse().join('-'));
      return dateA.getTime() - dateB.getTime();
    });
  }, [searchQuery]);

  // Hàm xử lý sự kiện khi người dùng nhấn vào mission card
  const handleViewMission = (missionId: number) => {
    navigate(`/missions/${missionId}`);
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
              <h1 className="text-3xl font-bold text-gray-900">Chương trình thi đua & Nhiệm vụ</h1>
              <p className="mt-1 text-gray-500">
                Khám phá các chương trình thi đua và nhiệm vụ đang được triển khai tại VietinBank.
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
              Tìm thấy {filteredMissions.length} nhiệm vụ cho "{searchQuery}"
            </p>
          </div>
        )}

        {/* Content based on view mode */}
        {viewMode === 'list' ? (
          // List View
          <main className="mb-8">
            {filteredMissions.length > 0 ? (
              <div className="space-y-4">
                {filteredMissions.map((mission) => (
                  <div 
                    key={mission.id}
                    onClick={() => handleViewMission(mission.id)}
                    className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                  >
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        {/* Left side - Title and Summary */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-[#005AAB] group-hover:text-[#DD0031] transition-colors pr-4">
                              {mission.title}
                            </h3>
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                              mission.status === 'Đang diễn ra' 
                                ? 'bg-green-100 text-green-800 animate-pulse' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {mission.status}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm text-justify mb-4">
                            {mission.summary}
                          </p>
                        </div>
                        
                        {/* Right side - Details */}
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:gap-2 lg:min-w-[200px]">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Hạn: {mission.deadline}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span>{mission.participants} đơn vị</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Không tìm thấy nhiệm vụ</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Thử tìm kiếm với từ khóa khác.
                </p>
              </div>
            )}
          </main>
        ) : (
          // Grid View
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMissions.length > 0 ? (
              filteredMissions.map((mission) => (
                <MissionCard
                  key={mission.id}
                  title={mission.title}
                  summary={mission.summary}
                  status={mission.status}
                  deadline={mission.deadline}
                  participants={mission.participants}
                  onClick={() => handleViewMission(mission.id)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Không tìm thấy nhiệm vụ</h3>
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

export default MissionPage; 