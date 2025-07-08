import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import InitiativesPage from './pages/InitiativesPage';
import MissionPage from './pages/MissionPage';
import MissionDetailPage from './pages/MissionDetailPage';
import NewsUpdatePage from './pages/NewsUpdatePage';
import RecognitionPage from './pages/RecognitionPage';
import InitiativeDetailPage from './pages/InitiativeDetailPage';
import InitiativeDashboard from './components/InitiativeDashboard';
import { NavigationHeader } from './components/NavigationHeader';
import { Boxes } from './components/ui/background-boxes';
import { AnimatedElement } from './components/ui/animated-element';
import HomeMainContentPage from './pages/HomeMainContentPage';
import { BoxesContainer } from './components/ui/boxes-container';

function HomePage() {
  const navigate = useNavigate(); // Hook để điều hướng

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full bg-gray-900">
        {/* Background Media */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <BoxesContainer />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-white min-h-screen flex flex-col">
          <NavigationHeader isDark={true} />
          <div className="flex-grow flex items-center px-4 sm:px-8">
            <div className="relative max-w-3xl pt-24 md:pt-32 pb-16">
              <AnimatedElement delay="delay-200">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                  Định hình Tương lai Số
                </h1>
              </AnimatedElement>
              <AnimatedElement delay="delay-500">
                <p className="mt-4 text-base sm:text-lg font-normal text-white/80">
                  Vươn mình trong kỷ nguyên mới
                </p>
              </AnimatedElement>
              <AnimatedElement delay="delay-700">
                <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300" onClick={() => navigate('/home-main')}>
                  Khám phá →
                </button>
              </AnimatedElement>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Bottom-Left Label */}
            <div className="absolute bottom-6 left-4 sm:bottom-8 sm:left-8 text-xs text-white/80">
              <AnimatedElement delay="delay-1000">✦ Thúc đẩy đổi mới</AnimatedElement>
            </div>

            {/* Bottom-Right Label */}
            <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 text-xs text-white/80">
              <AnimatedElement delay="delay-1000">Kiến tạo tương lai ✦</AnimatedElement>
            </div>
            
            {/* Vertical Right Label */}
            <div className="hidden lg:flex absolute top-0 right-0 h-full pr-0 mr-0 items-center justify-end">
              <AnimatedElement delay="delay-1000" className="h-full flex items-center">
                <p className="vertical-lr transform rotate-90 text-sm uppercase tracking-widest text-white/40 m-0 p-0">
                  • CON NGƯỜI • DỮ LIỆU • AI & HỌC MÁY • 
                </p>
              </AnimatedElement>
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
          <Route path="/home-main" element={<HomeMainContentPage />} />
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