// src/components/MissionCard.tsx

import React from 'react';

// Định nghĩa các trạng thái có thể có
type MissionStatus = 'Đang diễn ra' | 'Đã kết thúc';

// Định nghĩa kiểu dữ liệu cho props
interface MissionCardProps {
  title: string;
  summary: string;
  status: MissionStatus;
  deadline: string;
  participants: number;
  onClick: () => void;
}

// Component cho Tag trạng thái (tái sử dụng logic từ InitiativeCard)
const StatusTag: React.FC<{ status: MissionStatus }> = ({ status }) => {
  const colorMap: { [key in MissionStatus]: string } = {
    'Đang diễn ra': 'bg-green-100 text-green-800 animate-pulse', // Thêm hiệu ứng pulse cho trạng thái "Đang diễn ra"
    'Đã kết thúc': 'bg-gray-100 text-gray-800',
  };

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${colorMap[status]}`}>
      {status}
    </span>
  );
};

// Các icon cần thiết
const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);


const MissionCard: React.FC<MissionCardProps> = ({ title, summary, status, deadline, participants, onClick }) => {
  return (
    // Thẻ card chính, toàn bộ thẻ có thể nhấp được
    <div 
        onClick={onClick}
        className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
    >
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Phần đầu thẻ: Status và Title */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-[#005AAB] pr-4 group-hover:text-[#DD0031] transition-colors">{title}</h3>
          <StatusTag status={status} />
        </div>

        {/* Phần tóm tắt */}
        <p className="text-gray-600 text-sm mb-6 flex-grow text-justify">
          {summary}
        </p>

        {/* Phần chân thẻ: Thông tin bổ sung */}
        <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center space-x-2">
                <ClockIcon/>
                <span>Thời hạn: {deadline}</span>
            </div>
            <div className="flex items-center space-x-2">
                <UsersIcon/>
                <span>{participants} đơn vị</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default MissionCard;

