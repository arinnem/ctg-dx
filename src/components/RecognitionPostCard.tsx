// src/components/RecognitionPostCard.tsx

import React from 'react';

// Định nghĩa kiểu dữ liệu cho người được vinh danh
interface Honoree {
  avatarUrl: string;
  name: string;
}

// Cập nhật lại kiểu dữ liệu cho props
interface RecognitionPostProps {
  posterAvatarUrl: string;
  posterName: string;
  timestamp: string;
  content: string;
  honorees: Honoree[]; // Thay thế imageUrl bằng danh sách người được vinh danh
  likeCount: number;
  commentCount: number;
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
}

// Các icon cho các hành động (giữ nguyên)
const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
);
const CommentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
);
const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>
);


const RecognitionPost: React.FC<RecognitionPostProps> = ({ 
    posterAvatarUrl, posterName, timestamp, content, honorees, likeCount, commentCount, onLike, onComment, onShare 
}) => {
  return (
    // Thẻ card chính
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-2xl mx-auto flex flex-col h-full">
      
      {/* Phần đầu của bài đăng: thông tin người đăng */}
      <div className="p-4 flex items-center space-x-4">
        <img className="w-12 h-12 rounded-full object-cover" src={posterAvatarUrl} alt={`Avatar của ${posterName}`} />
        <div>
          <p className="font-bold text-navy-500 text-left">{posterName}</p>
          <p className="text-xs text-gray-500 text-left">{timestamp}</p>
        </div>
      </div>
      
      {/* Nội dung bài đăng */}
      <div className="px-4 pb-2">
        <p className="text-gray-700">{content}</p>
      </div>

      {/* Vách ngăn */}
      <hr className="my-4 mx-4" />

      {/* Danh sách người được vinh danh (carousel) */}
      <div className="px-4">
        <h4 className="font-semibold text-gray-700 mb-2">Ghi nhận và vinh danh</h4>
        <div className="flex space-x-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {honorees.map((honoree, index) => (
              <div key={index} className="flex-shrink-0 w-24 text-center">
                <img className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-blue-200" src={honoree.avatarUrl} alt={honoree.name} />
                <p className="mt-2 text-sm font-semibold text-gray-800">{honoree.name}</p>
              </div>
            ))}
        </div>
      </div>
      
      {/* Sử dụng flex-grow để đẩy footer xuống */}
      <div className="flex-grow"></div>

      {/* Thông tin lượt thích và bình luận */}
      <div className="px-4 pt-4 pb-2 flex justify-between items-center text-sm text-gray-500">
        <p>{likeCount} lượt thích</p>
        <p>{commentCount} bình luận</p>
      </div>

      {/* Vách ngăn */}
      <hr className="mx-4"/>

      {/* Các nút hành động */}
      <div className="px-4 py-2 flex justify-around items-center">
        <button onClick={onLike} className="flex items-center space-x-2 text-gray-600 hover:text-[#DD0031] transition-colors duration-300">
          <HeartIcon />
          <span>Thích</span>
        </button>
        <button onClick={onComment} className="flex items-center space-x-2 text-gray-600 hover:text-[#005AAB] transition-colors duration-300">
          <CommentIcon />
          <span>Bình luận</span>
        </button>
        <button onClick={onShare} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300">
          <ShareIcon />
          <span>Chia sẻ</span>
        </button>
      </div>
    </div>
  );
};

export default RecognitionPost;
