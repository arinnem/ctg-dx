// src/components/NewsArticleCard.tsx

import React from 'react';

// Định nghĩa kiểu dữ liệu cho props
interface NewsArticleCardProps {
  imageUrl: string;
  category: string;
  title: string;
  summary: string;
  onReadMore: () => void;
}

// Icon mũi tên, giống như trong InitiativeCard để tạo sự đồng nhất
/*const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);*/


const NewsArticleCard: React.FC<NewsArticleCardProps> = ({ imageUrl, category, title, summary, onReadMore }) => {
  return (
    // Thẻ card chính, với hiệu ứng hover
    <div 
        className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-2xl"
        onClick={onReadMore} // Toàn bộ thẻ có thể được nhấp vào
    >
      {/* Hình ảnh của bài viết */}
      <div className="overflow-hidden">
        <img 
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110" 
            src={imageUrl} 
            alt={`Hình ảnh cho bài viết ${title}`} 
        />
      </div>

      {/* Nội dung của thẻ */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mb-2 self-start">
          {category}
        </span>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>
        
        {/* Summary */}
        <p className="text-gray-600 text-sm line-clamp-4 min-h-[4.5rem] flex-grow">
          {summary}
        </p>
        
        {/* Read More Button */}
        <button
          onClick={onReadMore}
          className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300 self-start"
        >
          Đọc thêm →
        </button>
      </div>
    </div>
  );
};

export default NewsArticleCard;
