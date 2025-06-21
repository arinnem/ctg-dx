// src/components/DashboardHighlightCard.tsx

import React from 'react';

// Định nghĩa kiểu dữ liệu cho các props mà component sẽ nhận vào
interface DashboardHighlightCardProps {
  title: string;
  value: string;
  trendValue: string;
  trendDirection: 'up' | 'down';
  icon?: React.ReactNode; // Cho phép truyền vào một component Icon
  description?: string;
}

// Icon mũi tên lên
const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

// Icon mũi tên xuống
const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

// Icon mặc định cho các chỉ số
const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const DashboardHighlightCard: React.FC<DashboardHighlightCardProps> = ({ 
  title, 
  value, 
  trendValue, 
  trendDirection,
  icon,
  description,
}) => {
  // Quyết định màu sắc và icon dựa trên trendDirection
  const isUpward = trendDirection === 'up';
  
  // Xác định các lớp CSS dựa trên xu hướng
  const trendColorClass = isUpward ? 'text-green-600' : 'text-red-500';
  const valueColorClass = isUpward ? 'text-green-700' : 'text-red-700';
  const iconColorClass = isUpward ? 'text-green-600' : 'text-red-500';
  const iconBgClass = isUpward ? 'bg-green-100' : 'bg-red-100';


  return (
    // Áp dụng phong cách thẻ từ InitiativeCard: nền trắng, bo góc, bóng đổ lớn, hiệu ứng hover
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transition-transform duration-300 hover:scale-105">
        {/* Container cho nội dung, thay thế CardBody */}
        <div className="flex h-full flex-row items-start gap-4 p-4">
            
            {/* Icon */}
            <div className={`flex-shrink-0 p-3 rounded-full ${iconBgClass}`}>
                <div className={iconColorClass}>
                    {icon || <ChartIcon />}
                </div>
            </div>
            
            {/* Nội dung */}
            <div className="flex flex-col flex-1 min-w-0">
                {/* Căn lề phải cho toàn bộ nội dung bên trong */}
                <div className="text-right">
                    
                    {/* Giá trị chính */}
                    <p className={`text-4xl font-bold mb-1 ${valueColorClass}`}>
                      {value}
                    </p>
                    
                    {/* Thông tin xu hướng */}
                    <div className="flex items-center justify-end space-x-1 mb-2">
                      <div className={`flex items-center font-semibold text-sm ${trendColorClass}`}>
                        {isUpward ? <ArrowUpIcon /> : <ArrowDownIcon />}
                        <span>{trendValue}</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        {description || "so với tháng trước"}
                      </p>
                    </div>

                    {/* Tiêu đề */}
                    <h3 className="text-xl font-semibold text-gray-800 truncate">
                      {title}
                    </h3>

                </div>
            </div>
        </div>
    </div>
  );
};

export default DashboardHighlightCard;
