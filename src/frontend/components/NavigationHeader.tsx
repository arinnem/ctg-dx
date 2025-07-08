// src/components/NavigationHeader.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- Icons (tạo lại từ SVG vì không dùng lucide-react) ---
/*const NewspaperIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4"/><path d="M16 2v20"/><path d="M11 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H6"/><path d="M15 13h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H11"/></svg>
);
const LightbulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
);
const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
);
const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.05a2.5 2.5 0 0 0-3.05-.05c-.84.71-2.3.7-3.05.05Z"/><path d="M9 18c-1.21 1.21-1 4-1 4s2.79-.21 4-1a2.12 2.12 0 0 0 0-3c-1.21-1.21-4-1-4-1Z"/><path d="M15.5 4.5a2.5 2.5 0 0 0-3.05-.05c-.84.71-2.3.7-3.05.05s-.71-2.3.05-3.05a2.5 2.5 0 0 1 3.05.05c.84-.71 2.3-.7 3.05-.05s.71 2.3-.05 3.05Z"/><path d="M12 2v20"/></svg>
);*/
const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>
);


// --- Dữ liệu cho các mục trong Menu (ĐÃ CẬP NHẬT) ---
const initiativesMenu: { title: string; href: string; description: string }[] = [
  {
    title: "Tất cả Sáng kiến",
    href: "/initiatives",
    description: "Danh sách các sáng kiến chuyển đổi số tại VietinBank",
  },
  {
    title: "Sáng kiến mới triển khai",
    href: "/initiatives?filter=new", // Thêm query param để lọc
    description: "Danh sách sáng kiến triển khai trong quý vừa qua",
  },
];

const newsMenu: { title: string; href: string; description: string }[] = [
    {
      title: "Tất cả Tin tức",
      href: "/newsupdate",
      description: "Sự kiện và bài viết về hành trình chuyển đổi số",
    },
    {
      title: "Tin tức nổi bật",
      href: "/newsupdate?filter=featured",
      description: "Thông tin và sự kiện quan trọng",
    },
  ];

const missionsMenu: { title: string; href: string; description: string }[] = [
    {
      title: "Tất cả Chương trình",
      href: "/missions",
      description: "Tất cả chương trình thi đua và nhiệm vụ",
    },
    {
      title: "Thi đua năm 2025",
      href: "/missions/2025",
      description: "Chương trình thi đua năm 2025",
    },
];

const recognitionMenu: { title: string; href: string; description: string }[] = [
    {
        title: "Vinh danh Chi nhánh",
        href: "/recognition?type=branch",
        description: "Ghi nhận thành tích các chi nhánh "
    },
    {
        title: "Vinh danh Đội nhóm",
        href: "/recognition?type=team",
        description: "Tôn vinh các đội nhóm sáng kiến"
    }
];


// --- Các thành phần con ---

// Component cho mỗi mục trong menu dropdown
const ListItem: React.FC<React.PropsWithChildren<{ href: string; title: string; isDark?: boolean }>> = ({ children, href, title, isDark = false }) => {
    return (
      <li>
        <Link
          to={href}
          className={`block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-all duration-200 hover:shadow-sm focus:shadow-sm ${
            isDark 
              ? 'hover:bg-gray-800 focus:bg-gray-800' 
              : 'hover:bg-blue-50 focus:bg-blue-50'
          }`}
        >
          <div className={`text-sm font-semibold leading-none transition-colors ${
            isDark 
              ? 'text-white hover:text-blue-400' 
              : 'text-gray-800 hover:text-blue-600'
          }`}>{title}</div>
          <p className={`line-clamp-2 text-sm leading-snug ${
            isDark ? 'text-gray-300' : 'text-gray-500'
          }`}>
            {children}
          </p>
        </Link>
      </li>
    );
};


// Component cho một mục menu có dropdown
const DropdownMenuItem: React.FC<React.PropsWithChildren<{ trigger: React.ReactNode; isDark?: boolean }>> = ({ trigger, children, isDark = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);

    const handleMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setIsOpen(false);
        }, 150); // 150ms delay before closing - shorter for better responsiveness
        setTimeoutId(id);
    };

    return (
        <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className={`flex items-center space-x-1 transition-colors py-2 px-3 rounded-md ${
                isDark 
                  ? 'text-white hover:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600'
            }`}>
                {trigger}
                <ChevronDownIcon className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`absolute top-full left-0 mt-0 w-max transition-all duration-200 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            >
                <div className={`rounded-lg shadow-2xl border pt-2 pb-1 ${
                    isDark 
                      ? 'bg-gray-900 border-gray-700' 
                      : 'bg-white border-gray-100'
                }`}>
                    {children}
                </div>
            </div>
        </div>
    );
};


// --- Component chính ---

interface NavigationHeaderProps {
  isDark?: boolean;
}

export function NavigationHeader({ isDark = false }: NavigationHeaderProps) {
  return (
    <nav className={`sticky top-0 z-50 ${isDark ? 'bg-transparent' : 'bg-white shadow-md'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo và các link chính */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <img src="./X01-logo-nobackground.png" alt="CTG DX" className="h-10 w-auto" />
              {/*<span className="text-xl font-bold text-blue-600">CTG DX</span>*/}
            </Link>
            
            <div className="hidden md:flex items-center space-x-2">
                <Link to="/" className={`transition-colors py-2 px-3 rounded-md font-medium ${
                    isDark 
                      ? 'text-white hover:text-blue-400' 
                      : 'text-gray-700 hover:text-blue-600'
                }`}>Trang chủ</Link>
                
                {/* Menu Sáng kiến */}
                <DropdownMenuItem trigger={<span>Sáng kiến</span>} isDark={isDark}>
                    <ul className="grid w-[450px] gap-3 p-4">
                        {initiativesMenu.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href} isDark={isDark}>
                                {item.description}
                            </ListItem>
                        ))}
                    </ul>
                </DropdownMenuItem>

                {/* Menu Thi đua */}
                <DropdownMenuItem trigger={<span>Thi đua</span>} isDark={isDark}>
                    <ul className="grid w-[450px] gap-3 p-4">
                        {missionsMenu.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href} isDark={isDark}>
                                {item.description}
                            </ListItem>
                        ))}
                    </ul>
                </DropdownMenuItem>

                {/* Menu Tin tức */}
                <DropdownMenuItem trigger={<span>Tin tức</span>} isDark={isDark}>
                    <ul className="grid w-[450px] gap-3 p-4">
                        {newsMenu.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href} isDark={isDark}>
                                {item.description}
                            </ListItem>
                        ))}
                    </ul>
                </DropdownMenuItem>

                {/* Menu Vinh danh */}
                <DropdownMenuItem trigger={<span>Vinh danh</span>} isDark={isDark}>
                    <ul className="grid w-[450px] gap-3 p-4">
                        {recognitionMenu.map((item) => (
                            <ListItem key={item.title} title={item.title} href={item.href} isDark={isDark}>
                                {item.description}
                            </ListItem>
                        ))}
                    </ul>
                </DropdownMenuItem>
            </div>
          </div>
          
          {/* Có thể thêm các nút khác ở đây, ví dụ: User Profile */}
          <div></div>

        </div>
      </div>
    </nav>
  );
}
