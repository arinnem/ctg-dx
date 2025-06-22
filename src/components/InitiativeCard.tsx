// src/components/InitiativeCard.tsx

import React from 'react';
import { Separator } from './Separator';

// Định nghĩa kiểu dữ liệu cho một thành viên
interface Member {
  avatarUrl: string;
  name: string;
  role: 'IO' | 'Backup IO' | 'Thành viên';
}

// Định nghĩa kiểu dữ liệu cho props của component chính
interface InitiativeCardProps {
  id: number;
  imageUrl: string;
  title: string;
  summary: string;
  members: Member[];
  highlightResults: { title: string; description: string }[];
  dashboardLink?: string;
  onViewDetails: (id: number) => void;
}

// Icon mũi tên sang phải
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

// Icon dashboard
const DashboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const InitiativeCard: React.FC<InitiativeCardProps> = ({ id, imageUrl, title, summary, members, highlightResults, dashboardLink, onViewDetails }) => {
  return (
    // Thẻ card chính, overflow-hidden để bo góc cho ảnh
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-2xl">
      
      {/* 1. Hình ảnh */}
      <div className="overflow-hidden">
        <img 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
          src={imageUrl} 
          alt={`Hình ảnh của sáng kiến ${title}`} 
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* 1. Tiêu đề */}
        <button
          onClick={() => onViewDetails(id)}
          className="text-center w-full group"
        >
          <h3 className="text-xl font-bold text-[#005AAB] mb-4 group-hover:text-[#DD0031] transition-colors duration-300 cursor-pointer text-center">
            {title}
          </h3>
        </button>

        {/* 2. Tóm tắt */}
        <p className="text-gray-600 text-sm">{summary}</p>
        
        {/* Vách ngăn */}
        <hr className="my-4" />

        {/* 3. Carousel thành viên */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Thành viên</h4>
          {/* Container cho phép cuộn ngang */}
          <div className="flex space-x-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {members.map((member, index) => (
              <div key={index} className="flex-shrink-0 w-24 text-center">
                <img className="w-16 h-16 rounded-full mx-auto object-cover" src={member.avatarUrl} alt={member.name} />
                <p className="mt-2 text-sm font-semibold text-gray-800">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* 4. Kết quả nổi bật */}
        <div>
            <h4 className="font-semibold text-gray-700 mb-2">Kết quả nổi bật</h4>
            <ul className="space-y-2">
                {highlightResults.map((result, index) => (
                    <li key={index} className="flex items-start text-justify">
                        <svg
                            className="flex-shrink-0 w-5 h-5 text-green-500 mr-2 mt-1 text-justify"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-sm text-gray-700">{result.title}</span>
                    </li>
                ))}
            </ul>
        </div>
        
        {/* Sử dụng flex-grow để đẩy phần link xuống dưới cùng */}
        <div className="flex-grow"></div>
        
        {/* 5. Link xem chi tiết và Dashboard - ĐÃ CẬP NHẬT */}
        <div className="mt-4 flex justify-between items-center">
            {dashboardLink && (
                <a
                    href={dashboardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                    <DashboardIcon />
                    <span>Dashboard</span>
                </a>
            )}
            <button
                onClick={() => onViewDetails(id)}
                className="group inline-flex items-center space-x-1.5 text-sm font-semibold text-[#005AAB] hover:text-[#DD0031] transition-colors duration-300"
            >
                <span>Xem chi tiết</span>
                <ArrowRightIcon />
            </button>
        </div>
      </div>
    </div>
  );
};

export default InitiativeCard;
