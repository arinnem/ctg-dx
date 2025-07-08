import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DashboardHighlightCard from './components/DashboardHighlightCard';
import NewsArticleCard from './components/NewArticleCard';
import RecognitionPost from './components/RecognitionPostCard';
import { Separator } from './components/Separator';
import InitiativesPage from './pages/InitiativesPage';
import MissionPage from './pages/MissionPage';
import MissionDetailPage from './pages/MissionDetailPage';
import NewsUpdatePage from './pages/NewsUpdatePage';
import RecognitionPage from './pages/RecognitionPage';
import InitiativeDetailPage from './pages/InitiativeDetailPage';
import InitiativeDashboard from './components/InitiativeDashboard';
import ViewAllButton from './components/ViewAllButton';
import InitiativeCard from './components/InitiativeCard';
import MissionCard from './components/MissionCard';
import Logo from './components/Logo';
import { NavigationHeader } from './components/NavigationHeader';
import { Boxes } from './components/ui/background-boxes';
import { AnimatedElement } from './components/ui/animated-element';

// Import mock data
import { 
  HOMEPAGE_CONFIG, 
  newsArticles, 
  recognitionPosts, 
  initiativesData, 
  missionsData,
  dashboardCards,
  getItemsByIds 
} from './data/mockData';

function HomePage() {
  const navigate = useNavigate(); // Hook để điều hướng

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get featured items based on configuration
  const featuredRecognitionPosts = getItemsByIds(recognitionPosts, HOMEPAGE_CONFIG.featuredRecognitionPosts);
  const featuredNewsArticles = getItemsByIds(newsArticles, HOMEPAGE_CONFIG.featuredNewsArticles);
  const featuredDashboardCards = getItemsByIds(dashboardCards, HOMEPAGE_CONFIG.featuredDashboardCards);
  
  // Get all active missions for homepage carousel
  const activeMissions = missionsData.filter(mission => mission.status === 'Đang diễn ra');

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
    navigate(`/initiatives/${initiativeId}`);
  };

  const handleViewMission = (missionId: number) => {
    navigate(`/missions/${missionId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full bg-gray-900">
        {/* Background Media */}
        <div className="absolute inset-0 z-0">
          <Boxes />
          <div className="absolute inset-0 bg-gray-900 [mask-image:radial-gradient(transparent_20%,white)] pointer-events-none"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-white min-h-screen flex flex-col">
          <NavigationHeader isDark={true} />
          <div className="flex-grow flex items-center px-4 sm:px-8">
            <div className="relative max-w-3xl pt-24 md:pt-32 pb-16">
              <AnimatedElement delay="delay-200">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                  Định hướng Tương lai Số, Một cách Tự tin.
                </h1>
              </AnimatedElement>
              <AnimatedElement delay="delay-500">
                <p className="mt-4 text-base sm:text-lg font-normal text-white/80">
                  Chúng tôi hợp tác với các nhà lãnh đạo ngành để triển khai công nghệ tiên tiến, tối ưu hóa hoạt động và thúc đẩy tăng trưởng có thể đo lường.
                </p>
              </AnimatedElement>
              <AnimatedElement delay="delay-700">
                <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
                  Khám phá Giải pháp →
                </button>
              </AnimatedElement>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Bottom-Left Label */}
            <div className="absolute bottom-6 left-4 sm:bottom-8 sm:left-8 text-xs text-white/80">
              <AnimatedElement delay="delay-1000">✦ Thúc đẩy Đổi mới bằng Công nghệ.</AnimatedElement>
            </div>

            {/* Bottom-Right Label */}
            <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 text-xs text-white/80">
              <AnimatedElement delay="delay-1000">Kiến tạo Tương lai.</AnimatedElement>
            </div>
            
            {/* Vertical Right Label */}
            <div className="hidden lg:flex absolute top-0 right-8 h-full items-center">
              <AnimatedElement delay="delay-1000" className="h-full flex items-center">
                <p className="vertical-lr transform rotate-90 text-sm uppercase tracking-widest text-white/30">
                  CHIẾN LƯỢC • TỔ CHỨC • CON NGƯỜI • PHÂN TÍCH DỮ LIỆU • AI & HỌC MÁY • CLOUD 
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Header and Dashboard Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
              
              {/* Left Column: Header */}
              <div className="text-center lg:text-left">
                <div className="flex justify-center lg:justify-center mb-4">
                  <Logo className="h-64 w-auto" />
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
                  {featuredDashboardCards.map((card) => (
                    <DashboardHighlightCard
                      key={card.id}
                      title={card.title}
                      value={card.value}
                      trendValue={card.trendValue}
                      trendDirection={card.trendDirection}
                      description={card.description}
                      icon={card.icon}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Recognition Posts Section */}
            <section className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-semibold text-gray-900">Vinh danh & Ghi nhận</h2>
                <ViewAllButton label="Xem tất cả vinh danh" onClick={() => navigate('/recognition')} />
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
                    type={post.type}
                    onLike={() => handleLike(post.id)}
                    onComment={() => handleComment(post.id)}
                    onShare={() => handleShare(post.id)}
                  />
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Featured Missions Section */}
            <section className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-semibold text-gray-900">Chương trình thi đua/Nhiệm vụ</h2>
                <ViewAllButton label="Xem tất cả chương trình" onClick={() => navigate('/missions')} />
              </div>
              <div className="relative">
                {activeMissions.length > 0 ? (
                  <div className={`flex gap-6 pb-4 ${
                    activeMissions.length <= 3 
                      ? 'justify-start' 
                      : 'overflow-x-auto scrollbar-hide'
                  }`}>
                    {activeMissions.map((mission) => (
                      <div 
                        key={mission.id} 
                        className={`${
                          activeMissions.length <= 3 
                            ? 'flex-1 max-w-sm' 
                            : 'flex-shrink-0 w-80'
                        }`}
                      >
                        <MissionCard
                          title={mission.title}
                          summary={mission.summary}
                          status={mission.status}
                          deadline={mission.deadline}
                          participants={mission.participants}
                          onClick={() => handleViewMission(mission.id)}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Không có nhiệm vụ đang diễn ra</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Hiện tại không có chương trình thi đua hoặc nhiệm vụ nào đang được triển khai.
                    </p>
                  </div>
                )}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Featured Initiatives Section */}
            <section className="mb-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-semibold text-gray-900">Sáng kiến nổi bật</h2>
                <ViewAllButton label="Xem tất cả sáng kiến" onClick={() => navigate('/initiatives')} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {getItemsByIds(initiativesData, HOMEPAGE_CONFIG.featuredInitiatives).map((initiative) => (
                  <InitiativeCard
                    key={initiative.id}
                    id={initiative.id}
                    imageUrl={initiative.imageUrl}
                    title={initiative.title}
                    summary={initiative.summary}
                    members={initiative.members}
                    highlightResults={initiative.highlightResults}
                    status={initiative.status}
                    dashboardLink={initiative.dashboardLink}
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
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/initiatives" element={
            <>
              <NavigationHeader />
              <InitiativesPage />
            </>
          } />
          <Route path="/initiatives/:initiativeId" element={
            <>
              <NavigationHeader />
              <InitiativeDetailPage />
            </>
          } />
          <Route path="/initiatives/:initiativeId/dashboard" element={
            <>
              <NavigationHeader />
              <InitiativeDashboard />
            </>
          } />
          <Route path="/missions" element={
            <>
              <NavigationHeader />
              <MissionPage />
            </>
          } />
          <Route path="/missions/:missionId" element={
            <>
              <NavigationHeader />
              <MissionDetailPage />
            </>
          } />
          <Route path="/newsupdate" element={
            <>
              <NavigationHeader />
              <NewsUpdatePage />
            </>
          } />
          <Route path="/recognition" element={
            <>
              <NavigationHeader />
              <RecognitionPage />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App;