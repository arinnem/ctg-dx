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
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);


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
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Danh mục và ngày đăng */}
        <p className="text-sm font-semibold text-[#DD0031] mb-2">{category.toUpperCase()}</p>
        
        {/* Tiêu đề bài viết */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 flex-grow">
          {title}
        </h3>
        
        {/* Tóm tắt ngắn */}
        <p className="text-gray-500 text-sm mb-4">
          {summary}
        </p>
        
        {/* Liên kết đọc thêm */}
        <div className="mt-auto pt-4 border-t border-gray-100">
            <button
                className="inline-flex items-center text-sm font-semibold text-[#005AAB] group-hover:text-[#DD0031]"
            >
                Đọc thêm
                <ArrowRightIcon />
            </button>
        </div>
      </div>
    </div>
  );
};

export default NewsArticleCard;
