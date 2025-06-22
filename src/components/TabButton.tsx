// src/components/TabButton.tsx

import React from 'react';

// Định nghĩa kiểu dữ liệu cho props của component
interface TabButtonProps {
  /**
   * Nhãn hiển thị trên nút tab
   */
  label: string;
  /**
   * Cờ xác định xem tab có đang được chọn hay không
   */
  isActive: boolean;
  /**
   * Hàm được gọi khi người dùng nhấp vào tab
   */
  onClick: () => void;
}

/**
 * Một component nút có thể tái sử dụng cho các giao diện dạng tab.
 * Nó thay đổi kiểu dáng dựa trên việc có đang được kích hoạt hay không.
 */
const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  // Lớp CSS cơ sở cho tất cả các nút tab
  const baseClasses = "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-0.7xl transition-colors duration-300";

  // Lớp CSS cho trạng thái được kích hoạt
  const activeClasses = "border-blue-600 text-blue-600 font-bold text-xl";

  // Lớp CSS cho trạng thái không được kích hoạt
  const inactiveClasses = "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300";

  // Kết hợp các lớp CSS lại với nhau
  const finalClasses = `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;

  return (
    <button onClick={onClick} className={finalClasses}>
      {label}
    </button>
  );
};

export default TabButton;

