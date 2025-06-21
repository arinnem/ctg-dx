// src/components/InitiativeCard.tsx

import React from 'react';

// Định nghĩa kiểu dữ liệu cho một thành viên
interface Member {
  avatarUrl: string;
  name: string;
  role: 'IO' | 'Backup IO' | 'Thành viên';
}

// Định nghĩa kiểu dữ liệu cho props của component chính
interface InitiativeCardProps {
  imageUrl: string;
  title: string;
  summary: string;
  members: Member[];
  highlightResults: string[];
  onViewDetails: () => void;
}

// Icon cho danh sách kết quả
const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

// Icon mũi tên sang phải
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);


const InitiativeCard: React.FC<InitiativeCardProps> = ({ imageUrl, title, summary, members, highlightResults, onViewDetails }) => {
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
          onClick={onViewDetails}
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

        {/* Vách ngăn */}
        <hr className="my-4" />

        {/* 4. Kết quả nổi bật */}
        <div>
            <h4 className="font-semibold text-gray-700 mb-2">Kết quả nổi bật</h4>
            <ul className="space-y-2">
                {highlightResults.map((result, index) => (
                    <li key={index} className="flex items-start space-x-2">
                        <CheckCircleIcon />
                        <span className="text-sm text-gray-700">{result}</span>
                    </li>
                ))}
            </ul>
        </div>
        
        {/* Sử dụng flex-grow để đẩy phần link xuống dưới cùng */}
        <div className="flex-grow"></div>
        
        {/* 5. Link xem chi tiết - ĐÃ CẬP NHẬT */}
        <div className="mt-4 flex justify-end">
            <button
                onClick={onViewDetails}
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
