import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DashboardHighlightCard from './components/DashboardHighlightCard';
import NewsArticleCard from './components/NewArticleCard';
import RecognitionPost from './components/RecognitionPostCard';
import { Separator } from './components/Separator';
import InitiativesPage from './pages/InitiativesPage';
import NewsUpdatePage from './pages/NewsUpdatePage';
import RecognitionPage from './pages/RecognitionPage';
import InitiativeDetailPage from './pages/InitiativeDetailPage';
import ViewAllButton from './components/ViewAllButton';
import InitiativeCard from './components/InitiativeCard';
import Logo from './components/Logo';

// Import mock data
import { 
  HOMEPAGE_CONFIG, 
  newsArticles, 
  recognitionPosts, 
  initiativesData, 
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
  const featuredInitiatives = getItemsByIds(initiativesData, HOMEPAGE_CONFIG.featuredInitiatives);
  const featuredDashboardCards = getItemsByIds(dashboardCards, HOMEPAGE_CONFIG.featuredDashboardCards);

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

  return (
    <div className="min-h-screen bg-gray-50">
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

          {/* Featured Initiatives Section */}
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
  );
}

function Navigation() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-blue-600">
              <div className="flex justify-center lg:justify-center">
                <Logo className="h-10 w-auto" />
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
          <Route path="/initiatives/:initiativeId" element={<InitiativeDetailPage />} />
          <Route path="/newsupdate" element={<NewsUpdatePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;