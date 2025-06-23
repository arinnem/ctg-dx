// src/components/ViewAllButton.tsx

import React from 'react';

// Sử dụng lại ArrowRightIcon để đảm bảo tính nhất quán
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);


// Định nghĩa kiểu dữ liệu cho props
interface ViewAllButtonProps {
  /**
   * Nhãn hiển thị trên nút, ví dụ: "Xem tất cả"
   */
  label: string;
  /**
   * Hàm sẽ được gọi khi người dùng bấm vào nút,
   * thường dùng để điều hướng sang trang khác.
   */
  onClick: () => void;
}

/**
 * Một nút điều hướng đơn giản, được sử dụng ở cuối các section trên trang chủ
 * để dẫn đến trang chi tiết tương ứng.
 */
const ViewAllButton: React.FC<ViewAllButtonProps> = ({ label, onClick }) => {
  return (
    <button
        onClick={onClick}
        className="group inline-flex items-center text-sm font-semibold text-[#005AAB] hover:text-[#DD0031] transition-colors duration-300"
    >
      <span>{label}</span>
      <ArrowRightIcon />
    </button>
  );
};

export default ViewAllButton;
